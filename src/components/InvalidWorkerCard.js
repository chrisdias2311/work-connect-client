import React from 'react'
import './UserCard.css';
// import Logo from '../Logo.jpeg';
// import IdCard from '../IdCard.jpeg';
import Button from '@mui/material/Button';

function InvalidWorkerCard({ workerId, email, firstname, lastname, phone, expertise, idimage }) {

    const registerWorker = (cid) => {
        console.log("This is the worker ID to be registered", cid)
    }

    const declineWorker = (cid) => {
        console.log("This is the worker ID to be Declined", cid)
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
                    <h4 className='individualFiels'>Expertise: {expertise}</h4>
                    <div className='buttonsContainer'>
                        <div className='controlButton'>
                            <Button onClick={() => registerWorker(workerId)} className='controlButton' variant="contained">Register</Button>
                        </div>
                        <div className='controlButton'>
                            <Button  onClick={() => declineWorker(workerId)} className='controlButtons' variant="contained" color='error'>Decline</Button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default InvalidWorkerCard;