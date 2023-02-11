import React, { useState } from 'react'
import "./WorkerSignup.js";
// import { useDispatch } from 'react-redux';
// import { signUpUser } from '../redux/actions/formActions';
// import { Connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { setUser } from '../redux/actions/formActions';

import axios from 'axios';

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { grey } from '@mui/material/colors';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { checkboxClasses } from '@mui/material';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function ClientSignup() {

    const [formData, setFormData] = useState({
        UserName: '',
        password: '',

    });
    

    // const dispatch = useDispatch();

    // const handleEmailChange = (event) => {
    //     setFormData({ ...formData, email: event.target.value });
    // }
    const handleUserNameChange = (event) => {
        setFormData({ ...formData, firstName: event.target.value });
    }
    

    
    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }
    

    const testsubmit = (e) => {
        e.preventDefault();
        console.log("Signup called");
        

        const formdata = new FormData();
        formdata.append('username', formData.UserName);
        
        formdata.append('password', formData.password);

        // axios.post('http://localhost:5000/api/worker/register', formdata, {
        //     headers: {
        //         'Content-Type': 'multipart/form-data',
        //     },
        // })
        //     .then(res => console.log("An eror", res))
        //     .catch(err => console.log(err));
    }




    const submitSignupForm = (e) => {
        e.preventDefault();
        console.log("Signup called");

        const formdata = new FormData();
        formdata.append('firstname', formData.UserName);
        formdata.append('password', formData.password);
        

        axios.post('http://localhost:5000/api/worker/register', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => console.log("An eror", res))
            .catch(err => console.log(err));
    }

    return (
        <div className='signup'>

            <div className='signup_container'>
                <h1>Admin-Login</h1>

                <form >

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.UserName} onChange={handleUserNameChange} label="Username" variant="outlined" />
                    </div>
                    <div className='inputField'>
                        <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password" variant="outlined" />
                    </div>
                    <br></br>
                    <br></br>
                </form>
                <Button variant="contained" onClick={submitSignupForm}>
                    Login
                </Button>
            </div>
        </div>
    )
}

export default ClientSignup
