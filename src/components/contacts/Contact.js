import React,{useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Contacts from './Contacts';
import { selectContact, clearAllContact, deleteAllContact} from '../../store/action';

export default function Contact() {
    const dispatch=useDispatch();
    const [selectAll,setSelectAll]=useState(false);
    const contacts = useSelector(state => state.contacts);
    const selectedContacts = useSelector(state => state.selectedContacts);
    useEffect(()=>{
        if(selectAll){
            dispatch(selectContact(contacts.map((contact=>contact.id))))
        }else{
            dispatch(clearAllContact())
        }
    },[selectAll])
    return (
        <div>
        {
                selectedContacts.length > 0 ? (
                    <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteAllContact())}>Delete All</button>
                ):null
        }
            <table className="table shadow">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input id="selectAll" type="checkbox" value={selectAll} onClick={() => setSelectAll(!selectAll)} className="custom-control-input"></input>
                                <label htmlFol="selectAll" className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>

                        
                    </tr>
                </thead>
                <tbody>
                {
                        contacts.map((item,i) => (
                        <Contacts contact={item} key={item.id} selectAll={selectAll}/>  
                        ))
                }
                </tbody>
            </table>
        </div>
    )
}
