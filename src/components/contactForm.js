import React, { useState, useEffect } from 'react';

function ContactForm(props) {
    const intialFieldValue = {
        fullName: '',
        mobile: '',
        email: '',
        address: ''
    }
    var [values, setValues] = useState(intialFieldValue);

    const handleInputChange=(e)=>{
        var {name,value}=e.target;
        setValues({
            ...values,[name]:value
        })
    }
    var handleFormSubmit=(e)=>{
        props.addOrEdit(values)
    }
    return (
        <>
            <form autoComplete="off" onSubmit={handleFormSubmit}>
                <div className="form-group input-group">
                <div className="input-group-prepend">
                <div className="input-group-text">
                <i className="fas fa-user"></i>
                </div>
                </div>
                    <input type="text" onChange={handleInputChange} className="form-control" placeholder="Full Name" name="fullName" value={values.fullName}/>
                </div>
                <div className="form-row">
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input type="number" className="form-control" onChange={handleInputChange} placeholder="mobile" name="mobile" value={values.mobile} />
                    </div>
                    <div className="form-group input-group col-md-6">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input type="email" className="form-control" placeholder="email" onChange={handleInputChange} name="email" value={values.email} />
                    </div>
                </div>
                    <div className="form-group">
                        <textarea className="form-contorl" name="address" placeholder="address" onChange={handleInputChange} value={values.address}></textarea>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="save" className="btn btn-primary btn-block"></input>
                    </div>
            </form>
        </>
    )
}
export default ContactForm;