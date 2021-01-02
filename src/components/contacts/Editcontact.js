import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory,useParams} from 'react-router-dom';
import { getContact, updateContact} from '../.././store/action/index';
import shortid from 'shortid';

export default function Editcontact() {
    const {id}=useParams();
    const contacts=useSelector(state=>state.contacts)
    const data=useSelector(state=>state.contact)
    const history = useHistory();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

  
    useEffect(()=>{
        dispatch(getContact(id))
        if(data !=null){
            setName(data.name)
            setPhone(data.phone)
            setEmail(data.email)
        }
    },[data]);

    const updateContacts=(event)=>{
        event.preventDefault();
        let update_contact=Object.assign(data,{name:name,phone:phone,email:email});


        dispatch(updateContact(update_contact));
        history.push('/');
    };
    return (
        <div className="card border-0 shadow">
            <div className="card-header">
                Add A Contact
        </div>
            <div class="card-body">
                <form onSubmit={updateContacts}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Phone" value={phone} onChange={(e) => setPhone(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <button className="btn btn-warning" type="submit">Update Contact</button>
                </form>
            </div>
        </div>
    )
}
