import React, {useState} from 'react';
import classes from '../styles/Contact.module.css'
import Alert from "./messages/Alert";
import {emailContactForm} from '../actions/form';

const Contact = () => {
    const [values, setValues] = useState({
        message: '',
        name: '',
        subject: '',
        email: '',
        loading: false,
        showForm: true,
        sent: false,
        buttonText: 'Send Message',
        success: false,
        error: false
    });
    const {message, name, email, subject, loading, success, error} = values;
    const clickSubmit = e => {
        e.preventDefault();
        setValues({...values, loading: true});
        emailContactForm({name, subject, email, message}).then(data => {
            if (data.error) {
                setValues({...values, error: data.error, loading: false});
            } else {
                setValues({
                    ...values,
                    sent: true,
                    name: '',
                    loading: false,
                    showForm: false,
                    email: '',
                    subject: '',
                    message: '',
                    buttonText: 'Sent',
                    success: data.success
                });
            }
        });
    };
    let btnText = 'Send Message'
    if (loading) {
        btnText = <><span className="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"/> Sending...</>
    }


    const handleChange = name => e => {
        setValues({...values, [name]: e.target.value, error: false, success: false, buttonText: 'Send Message'});
    };
    const showSuccessMessage = () => success && <div>
        <Alert msg="Your Message has been Sent.Thank you" label='Success' type='success'/>
    </div>


    const showErrorMessage = () => (
        <Alert msg={error} type="danger" label="Danger"/>
    );

    return (
        <section className={classes.Contact}>
            <div className="container position-relative" data-aos="fade-up">

                <div className="row gy-4 d-flex justify-content-end">

                    <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">

                        <div className={`${classes.infoItem} d-flex`}>
                            <i className="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h4>Location: Mombasa</h4>
                                <p>Sea View Plaza – 2nd floor</p>
                                <p>Margaret Avenue off Mama Ngina Drive</p>
                            </div>
                        </div>
                        <div className={`${classes.infoItem} d-flex`}>
                            <i className="bi bi-geo-alt flex-shrink-0"></i>
                            <div>
                                <h4>Location: Nairobi</h4>
                                <p> Westlands, woodvale Avenue</p>
                                <p>Madonna House</p>
                            </div>
                        </div>


                        <div className={`${classes.infoItem} d-flex`}>
                            <i className="bi bi-envelope flex-shrink-0"></i>
                            <div>
                                <h4>Email:</h4>
                                <p>info@seahorsenergy.com</p>
                                <p>info@seahorseenergy.co.ke</p>
                            </div>
                        </div>


                        <div className={`${classes.infoItem} d-flex`}>
                            <i className="bi bi-phone flex-shrink-0"></i>
                            <div>
                                <h4>Call:</h4>
                                <p>+254 796777444 </p>
                                <p>+254 796777333 </p>
                            </div>
                        </div>


                    </div>

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="250">

                        <form className={classes.form} onSubmit={clickSubmit}>
                            <div className="row">
                                <div className={`col-md-6 form-group ${classes.formGroup}`}>
                                    <input
                                        type="text"
                                        name="name"
                                        onChange={handleChange('name')}
                                        value={name}
                                        className={`form-control ${classes.input}`}
                                        placeholder="Your Name"
                                        required/>

                                </div>
                                <div className={`col-md-6 form-group mt-3 ${classes.formGroup} mt-md-0`}>
                                    <input
                                        type="email"
                                        className={`form-control ${classes.input}`}
                                        name="email"
                                        onChange={handleChange('email')}
                                        value={email}
                                        placeholder="Your Email"
                                        required/>
                                </div>
                            </div>
                            <div className={`form-group ${classes.formGroup} mt-3`}>
                                <input
                                    type="text"
                                    className={`form-control ${classes.input}`}
                                    name="subject"
                                    onChange={handleChange('subject')}
                                    value={subject}
                                    placeholder="Subject" required/>
                            </div>
                            <div className={`form-group ${classes.formGroup} mt-3`}>
                                <textarea
                                    className={`form-control ${classes.textarea}`}
                                    name="message" rows="5"
                                    placeholder="Message"
                                    onChange={handleChange('message')}
                                    value={message}
                                    required/>
                            </div>
                            <div className="my-3">
                                {showErrorMessage()}
                                {showSuccessMessage()}
                            </div>
                            <div className="text-center">
                                <button type={`submit`} className={classes.btn}>{btnText}</button>
                            </div>
                        </form>

                    </div>


                </div>

            </div>
        </section>
    );
};

export default Contact;