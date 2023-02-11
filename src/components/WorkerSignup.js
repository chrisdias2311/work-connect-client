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

function ClientSignup() {

   

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        expertise: '',
        image: '',
        password: '',

    });
    const imageData = new FormData();
    const [imageUpload, setImageUpload] = useState(false);

    // const dispatch = useDispatch();

    const handleEmailChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
    }
    const handleFirstNameChange = (event) => {
        setFormData({ ...formData, firstName: event.target.value });
    }
    const handleLastNameChange = (event) => {
        setFormData({ ...formData, lastName: event.target.value });
    }
    const handlePhoneChange = (event) => {
        setFormData({ ...formData, phone: event.target.value });
    }

    // expertise function


    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }
    const handleIdImageChange = async (event) => {
        setFormData({ ...formData, image: event.target.files[0] });

        imageData.append('file', formData.image);
        console.log(formData.image.name);
        setImageUpload(true);
    }


    const submitSignupForm = (e) => {
        e.preventDefault();
        console.log("Signup called");

        const formdata = new FormData();
        formdata.append('firstname', formData.firstName);
        formdata.append('lastname', formData.lastName);
        formdata.append('phone', formData.phone);
        formdata.append('password', formData.password);
        formdata.append('file', formData.image);

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
                <h1>Sign-up</h1>

                <form >

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.firstName} onChange={handleFirstNameChange} label="Firstname" variant="outlined" />
                    </div>

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.lastName} onChange={handleLastNameChange} label="Lastname" variant="outlined" />
                    </div>

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.phone} onChange={handlePhoneChange} label="Phone-no" variant="outlined" />
                    </div>

                    <div className='inputField'>
                        <input type="checkbox" className='inputField' fullWidth id="outlined-basic" value={formData.expertise} variant="outlined" label="Electrian" />
                        <input type="checkbox" className='inputField' fullWidth id="outlined-basic" value={formData.expertise} variant="outlined" label="Electrian"/>
                        <input type="checkbox" className='inputField' fullWidth id="outlined-basic" value={formData.expertise} variant="outlined" label="Electrian"/>
                    </div>

                    <div className='inputField'>
                        <TextField fullWidth type="password" className='inputField' id="outlined-basic" value={formData.password} onChange={handlePasswordChange} label="Password" variant="outlined" />
                    </div>



                    <h5>Upload valid Govt. Identity card</h5>
                    <Button variant="contained" value={formData.image} component="label" onChange={handleIdImageChange}>
                        Upload
                        <input hidden type="file" />
                    </Button>
                    <IconButton color="primary" aria-label="upload picture" component="label" onChange={handleIdImageChange}>
                        <input hidden type="file" />
                        <PhotoCamera />
                    </IconButton>

                    <br></br>
                    <br></br>

                    {
                        imageUpload ?
                        <Alert severity="success">{formData.image.name}</Alert>
                            :
                            <div></div>
                    }
                </form>

                <p>by signing-in you agree to AMAZON FAKE CLONE conditions of Use and sale. Please see our Privacy Notice, our Cookies Noties and our Interest-Based Ads </p>

                <Button variant="contained" onClick={submitSignupForm}>
                    Create Work-Connect Account
                </Button>
            </div>
        </div>
    )
}

export default ClientSignup
