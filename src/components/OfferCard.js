import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './OfferCard.css'

const OfferCard = ({ workId, workerId, name, expertise, price }) => {
    const acceptBid = (workID, workerID) => {


        // const formdata = new FormData();
        // formdata.append('Cemail', formData.email);
        // formdata.append('Cname', formData.firstName);
        // formdata.append('Cphone', formData.lastName);
        // formdata.append('Wphone', formData.phone);
        // formdata.append('Wname', formData.password);
        // formdata.append('location', formData.image);
    }


    return (
        <div className='Container'>
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        Expertise: {expertise}
                    </Card.Text>
                    <Card.Text>
                        Price: ${price}
                    </Card.Text>

                    <br></br>
                    <Button onClick={() => acceptBid(workId, workerId)} variant="primary" >Accept Bid</Button>
                    {/* <PlumbingIcon style={{ marginLeft: '125px' }} /> */}
                </Card.Body>
            </Card>
        </div>
    )
}

export default OfferCard