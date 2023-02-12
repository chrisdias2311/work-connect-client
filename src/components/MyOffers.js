import React from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MyOffers.css'
import OfferCard from './OfferCard';

function MyOffers() {
    const [clientWorks, setclientWorks] = useState('');
    const [bids, setBids] = useState('');

    const navigate = useNavigate()

    useEffect(() => {
        const clientValidity = JSON.parse(localStorage.getItem('client')).validity;

        if (clientValidity !== 'Yes') {
            navigate("/");
        } else {
            const clientid = JSON.parse(localStorage.getItem('client'))._id

            const formdata = new FormData();
            formdata.append('clientId', clientid);

            axios.post('http://localhost:5000/api/bid/checkmyoffers', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    const clientOffers = res.data;
                    setclientWorks(res.data[0]._id)
                    console.log("Users works", clientOffers[0]._id)
                })
                .catch(err => console.log(err));

            // console.log("Final Data: ", clientWorks[0]._id)
        }
    }, []);

    const getData = () => {
        const formdata = new FormData();
        // console.log(clientWorks)
        formdata.append('workId', clientWorks);
        axios.post('http://localhost:5000/api/bid/checkbids', formdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(res => {
                setBids(res.data);
                console.log("These are the bids", bids)
                // const clientOffers = res.data;
                // setclientWorks(res.data[0]._id)
                // console.log("Users works", clientOffers[0].location)
            })
            .catch(err => console.log(err));
    }


    return (
        <div>
            <button onClick={getData}>GetData</button>
            {
                bids.length > 0 ? bids.map((item, index) =>
                    <OfferCard
                        workId={item.workId}
                        workerId={item.workerId}
                        name={item.workerName}
                        expertise={item.workerExpertise}
                        price={item.price}
                    />
                ) : <h1>No Data found</h1>
            }

            {/* Display all the bids */}
        </div>
    )
}

export default MyOffers
