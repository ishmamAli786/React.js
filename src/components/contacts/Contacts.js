import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteContact} from '../../store/action';
import {useDispatch} from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function Contacts(props) {
    const dispatch=useDispatch();
    return (
            
            <tr>
                <td>
                    <div className="custom-control custom-checkbox">
                    <input checked={props.selectAll} type="checkbox" className="custom-control-input"></input>
                        <label className="custom-control-label"></label>
                    </div>
                </td> 
            <td>{props.contact.name}</td>
                <td>{props.contact.phone}</td>
                <td>{props.contact.email}</td>
                <td>

                <Link to={`/edit/${props.contact.id}`} className="text-primary mr-2"><EditIcon /></Link>
                <span className="text-danger" onClick={() => dispatch(deleteContact(props.contact.id))}><DeleteIcon /></span>
                </td>

            </tr>
    )
}
