import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { addContact} from '../.././store/action/index';
import shortid from 'shortid';

export default function Addcontact() {
    const history=useHistory();
    const dispatch=useDispatch();
    const [name,setName]=useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const createContact=(e)=>{
        e.preventDefault();
        const nameContact = { id:shortid.generate(),name,phone,email}
        dispatch(addContact(nameContact))
        setName('')
        setPhone('')
        setEmail('')
        history.push('/')
    }
    return (
        <div className="card border-0 shadow">
        <div className="card-header">
        Add A Contact
        </div>
        <div class="card-body">
        <form onSubmit={(e)=>createContact(e)}>
        <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
        </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Phone" value={phone} onChange={(e) =>setPhone(e.target.value)}></input>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <button className="btn btn-primary" type="submit">Create Contact</button>
        </form>
        </div>
        </div>
    )
}
