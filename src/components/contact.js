import React,{useEffect,useState} from 'react';
import ContactForm from './contactForm';
import firebaseDB from "../firebase";
function Contact(){
    var [contactObjects, setcontactObjects]=useState(0);

    useEffect(()=>{
        firebaseDB.child('contacts').on('value',snapshot=>{
            if(snapshot.val()!=null){
                setcontactObjects({
                    ...snapshot.val()
                })
            }
        })
    },[])   /// similar to component DidMount
    const addOrEdit = obj=>{
        firebaseDB.child('contacts').push(obj,err=>{
            if(err){
                console.log(err)
            }
        })
    }
    return(
        <>
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4 text-center">Contact Register</h1>
            </div>
        </div>
        <div className="conatiner">
        <div className="row">
        <div className="col-md-5">
        <ContactForm addOrEdit={addOrEdit}/>
        </div>
        <div className="col-md-7">
        <div>
        <table className="table table-borderless table-stripped">
        <thead className="thead-light">
        <tr>
            <th>Full Name</th>
            <th>Mobile</th>     
            <th>Email</th>
            <th>Action</th>                    
        </tr>
        </thead>
        <tbody>
        {
            Object.keys(contactObjects).map(id=>{
                     return <tr key={id}>
                    <td>{contactObjects[id].fullName}</td>
                    <td>{contactObjects[id].mobile}</td>
                    <td>{contactObjects[id].email}</td>
                    <td>
                        <i className="far fa-edit text-warning"></i>
                        <i className="far fa-trash-alt ml-3 text-danger"></i>
                    </td>
                </tr>
            })
        }
        </tbody>
        </table>
        </div>
        </div>
        </div>
        </div>
        </>
    )
}
export default Contact;