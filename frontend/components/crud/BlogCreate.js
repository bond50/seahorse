import useCreate from "../../hooks/useCreate";
import dynamic from "next/dynamic";
import 'react-quill/dist/quill.snow.css';
import {QuillFormats, QuillModules} from '/..../../helpers/quill';
import SideCatTags from "../reusables/forms/side-cat-tags";
import React from "react";
import Alert from "../messages/Alert";

const ReactQuill = dynamic(() => import('react-quill'), {ssr: false});


const CreateBlog = () => {
    const {
        showCategories,
        showTags,
        handleBody,
        handleChange,
        publish,
        error,
        success,
        title,
        loading,
        body
    } = useCreate('blog', 'categories', 'tags', 'blog')

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
                            {loading ? <>
                        <span className="spinner-grow spinner-grow-sm"
                              role="status"
                              aria-hidden="true"/> Publishing...</> : 'Publish'}
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
                    tags={showTags}
                    categories={showCategories}
                    handleChange={handleChange}/>
            </div>
        </div>
    );
};

export default CreateBlog