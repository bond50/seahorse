import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import {QuillFormats, QuillModules} from '/..../../helpers/quill';
import SideCatTags from "../reusables/forms/side-cat-tags";
import {dataFromLocalStorage, setDataToLocalStorage} from "../reusables/functions/dataFromLocalStorage";
import React, {useEffect, useState} from "react";
import Alert from "../messages/Alert";
import useSWR from "swr";
import {fetcher} from "../axios/axios";
import {createService} from "../../actions/service";
import {getCookie} from "../../actions/auth";

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});

const token = getCookie('token');

const PageCreate = () => {
    const [checked, setChecked] = useState([]); // categories
    const [body, setBody] = useState(dataFromLocalStorage('pages'));
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        loading: false,
        formData: {},
        title: '',
        hidePublishButton: false
    });

    const {data: categories} = useSWR({url: `/service-categories`, method: 'get'}, fetcher);
    const {error, success, formData, title} = values;


    useEffect(() => {
        setValues({
            ...values,
            formData: new FormData(), // <-- valid formData object after initial render
        });

    }, [],)


    const publish = e => {
        e.preventDefault();
        setValues({...values, loading: true});
        createService(formData, token)
            .then(data => {
                    if (data.error) {
                        setValues({...values, error: data.error, loading: false});
                    } else {
                        setValues({
                            ...values,
                            title: '',
                            error: '',
                            success: `A new item titled "${data.title}" is created`,
                            loading: false
                        });
                        setBody('');
                    }
                }
            )

    };

    const handleChange = name => e => {
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({...values, [name]: value, formData, error: ''});
    };


    const handleBody = e => {
        setBody(e);
        formData.set('body', e);
        setDataToLocalStorage('page', e)
    };


    const handleToggle = c => () => {
        setValues({...values, error: ''});
        // return the first index or -1
        const clickedCategory = checked.indexOf(c);
        const all = [...checked];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        setChecked(all);
        formData.set('categories', all);
    };


    const showCategories = () => {
        return (
            categories &&
            categories.map((c, i) => (
                <label key={i} className="list-group-item border-0">
                    <input onChange={handleToggle(c._id)} type="checkbox" className="form-check-input me-1"/>
                    {c.name}
                </label>
            ))
        );
    };


    return (
        <div className='row'>
            <div className="col-md-8">
                <form onSubmit={publish}>
                    <div className="form-group mb-3">
                        <label className="text-muted">Title</label>
                        <input
                            type="text"
                            name='title'
                            className="form-control"
                            value={title}
                            onChange={handleChange('title')}/>
                    </div>

                    <div className="form-group mb-3">
                        <ReactQuill
                            modules={QuillModules}
                            formats={QuillFormats}
                            value={body}
                            placeholder="Write something amazing..."
                            onChange={handleBody}
                        />
                    </div>

                    <div>
                        <button type="submit" className="btn btn-primary">
                            Publish
                        </button>
                    </div>
                </form>
                <div className="mb-3">
                    <br/>
                    <Alert msg={error} type="danger" label="Danger"/>
                    <Alert msg={success} label='Success' type='success'/>
                </div>
            </div>

            <div className="col-md-4">
                <SideCatTags
                    categories={showCategories}
                    handleChange={handleChange}/>
            </div>

        </div>

    );
};

export default PageCreate;