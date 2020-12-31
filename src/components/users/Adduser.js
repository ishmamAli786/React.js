import React,{useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

export default function AddUser() {
    let history = useHistory();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    })

    const onInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=async (e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user);
        history.push('/');

    }
    return (
        <div class="conatiner">
            <div class="s">
                <form className="st" onSubmit={e=>onSubmit(e)}>
                    <input type="text" name="name" value={user.name} onChange={(e)=>onInputChange(e)} placeholder="Enter Your Name"></input>
                    <input type="text" name="username" value={user.username} onChange={(e) => onInputChange(e)} placeholder="Enter Your Username"></input>
                    <input type="email" name="email" value={user.email} onChange={(e) => onInputChange(e)} placeholder="Enter Your Email"></input>
                    <input type="number" name="phone" value={user.phone} onChange={(e) => onInputChange(e)} placeholder="Enter Your Phone Number"></input>
                    <input type="text" name="website" value={user.website} onChange={(e) => onInputChange(e)} placeholder="Enter Your Website Name"></input>
                <button className="btn btn-primary btn-lg">Add User</button>
            </form>
            </div>
        </div>
    )
}
