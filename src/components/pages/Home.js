import React,{useState,useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import axios from 'axios';



const Home=()=>{
    const [users,setUsers]=useState([]);

    useEffect(()=>{
        loadUsers();
    },[])


    const loadUsers=async ()=>{
        const result = await axios.get("http://localhost:3003/users");
        setUsers(result.data.reverse())
    }

    const deleteuser=async (id)=>{
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
    }
    return(
        <>
        <div className="container">
        <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
        <thead className="thead-dark">
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Action</th>

            </tr>
        </thead>
        <tbody>
            {
                users.map((item,i)=>{
                    return (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.username}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link to={`/users/${item.id}`}><i class="far fa-eye text-primary mr-2"></i></Link>
                                <Link to={`/users/edit/${item.id}`}><i class="fas fa-user-edit text-primary mr-2"></i></Link>
                                <Link onClick={()=> deleteuser(item.id)}><i class="fas fa-trash text-danger"></i></Link>
                            </td>
                        </tr>
                    )
                })
            }
                        </tbody>
        </table>
        </div>
        </div>
        </>
    )
}

export default Home;