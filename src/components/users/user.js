import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

export default function User() {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    })

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        loadUser();
    }, [])
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push('/');

    }
    const loadUser = async () => {
        const result = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(result.data)
    }
    return (
        <div class="conatiner">
            <div class="s">
                <form className="st" onSubmit={e => onSubmit(e)}>
                    <input type="text" name="name" value={user.name} onChange={(e) => onInputChange(e)} placeholder="Enter Your Name"></input>
                    <input type="text" name="username" value={user.username} onChange={(e) => onInputChange(e)} placeholder="Enter Your Username"></input>
                    <input type="email" name="email" value={user.email} onChange={(e) => onInputChange(e)} placeholder="Enter Your Email"></input>
                    <input type="text" name="phone" value={user.phone} onChange={(e) => onInputChange(e)} placeholder="Enter Your Phone Number"></input>
                    <input type="text" name="website" value={user.website} onChange={(e) => onInputChange(e)} placeholder="Enter Your Website Name"></input>
                </form>
            </div>
        </div>
    )
}
