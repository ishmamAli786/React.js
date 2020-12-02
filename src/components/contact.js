import React,{useEffect,useState} from 'react';
import ContactForm from './contactForm';
import firebaseDB from "../firebase";
function Contact(){
    var [contactObjects, setcontactObjects]=useState(0);
    var [currentId,setCureentId]=useState('')

    useEffect(()=>{
        firebaseDB.child('contacts').on('value',snapshot=>{
            if(snapshot.val()!=null){
                setcontactObjects({
                    ...snapshot.val()
                })
            } else {
                setcontactObjects({})
            }
        })
    },[])   /// similar to component DidMount
    const addOrEdit = obj=>{
        if(currentId==''){
            firebaseDB.child('contacts').push(obj, err => {
                if (err) {
                    console.log(err)
                } else {
                    setCureentId('')
                }
            })
        }else{
            firebaseDB.child(`contacts/${currentId}`).set(obj, err => {
                if (err) {
                    console.log(err)
                }else{
                    setCureentId('')
                }
            })
        }
    }

    const onDelete=(key)=>{
        if(window.confirm('Are You Sure To Delete This Account')){
            firebaseDB.child(`contacts/${key}`).remove(err => {
                if (err) {
                    console.log(err)
                } else {
                    setCureentId('')
                }
            })
        }
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
        <ContactForm {...({addOrEdit,currentId,contactObjects})}/>
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
                             <a onClick={()=> setCureentId(id)}><i className="far fa-edit text-warning"></i></a>
                             <a onClick={()=>onDelete(id)}><i className="far fa-trash-alt ml-3 text-danger"></i></a>
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