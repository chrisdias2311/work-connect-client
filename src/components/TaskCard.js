import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import { width } from '@mui/system';
import { TextField } from '@mui/material';
import './Card.css'
import { useState } from 'react';
import Link from '@mui/material/Link';
import axios from 'axios';


function TaskCard({ workId, title, desc, category, date, location }) {
  const [bid, setBid] = useState('');

  const handleBidChange = (event) => {
    setBid(event.target.value);
  }

  const createBid = (workId) => {
    const workerId = JSON.parse(localStorage.getItem('worker'))._id;

    const formdata = new FormData();
    formdata.append('workerid', workerId);
    formdata.append('workid', workId);
    formdata.append('price', bid);

    axios.post('http://localhost:5000/api/bid/createbid', formdata, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        alert(res.data);
        console.log("This is the response", res.data);
        localStorage.setItem('admin', JSON.stringify(res.data));
      })
      .catch(err =>
        console.log("This is the error", err),
      );
  }

  return (
    <>
      <div className='Container'>
        <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              Description: {desc}
            </Card.Text>
            <Card.Text>
              Category: {category}
            </Card.Text>
            <Card.Text >
              Date: {date}
            </Card.Text>
            <TextField className='inputField' value={bid} onChange={handleBidChange} fullWidth id="outlined-basic" label="Enter Bid here" variant="outlined" />
            <Link href={location} underline="none">
              {'Check Location'}
            </Link>
            <br></br>
            <br></br>
            <Button onClick={() => createBid(workId)} variant="primary" >Bid</Button>
            {/* <PlumbingIcon style={{ marginLeft: '125px' }} /> */}
          </Card.Body>
        </Card>
      </div>

    </>
  );
}

export default TaskCard;