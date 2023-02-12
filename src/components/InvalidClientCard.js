import React from 'react'
import './UserCard.css';
// import Logo from '../Logo.jpeg';
// import IdCard from '../IdCard.jpeg';
import Button from '@mui/material/Button';
import axios from 'axios';

function InvalidClientCard({ clientId, email, firstname, lastname, phone, year, dept, div, idimage }) {

    const registerClient = (cid) => {
        axios.put(`http://localhost:5000/api/client/validateclient/${cid}`, {
            validity: 'Yes'
        })
        .then(res => {
            alert("Client Registered Successfully")
            console.log("Successful", res)
        })
            .catch(err => console.log(err));
    }

    const declineClient = (cid) => {
        axios.put(`http://localhost:5000/api/client/validateclient/${cid}`, {
            validity: 'Decline'
        })
            .then(res => {
                alert("Client Registration Declined")
                console.log("Successful", res)
            })
            .catch(err => console.log(err));
    }


    return (
        <div className='box'>
            <div className='card'>
                <div className='leftImage'>
                    <img className='IdImage' src={"http://" + idimage}></img>
                </div>
                <div className='rightContent'>
                    <div className='floor1'>
                        <h2>Name: {firstname} {lastname}</h2>
                        <h2 className='fields'>Phone: {phone}</h2>
                    </div>
                    <h4 className='individualFiels'>Email: {email}</h4>
                    <div className='buttonsContainer'>
                        <div className='controlButton'>
                            <Button onClick={() => registerClient(clientId)} className='controlButton' variant="contained">Register</Button>
                        </div>
                        <div className='controlButton'>
                            <Button onClick={() => declineClient(clientId)} className='controlButtons' variant="contained" color='error'>Decline</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InvalidClientCard;
