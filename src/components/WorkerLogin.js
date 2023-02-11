import React, { useState } from 'react'
import "./WorkerLogin.css";
// import { useDispatch } from 'react-redux';
// import { signUpUser } from '../redux/actions/formActions';
import { Connect } from 'react-redux';
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

function ClientLogin() {

   

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        
        phone: '',
        
        password: '',

    });
    

    // const dispatch = useDispatch();

    const handlePidChange = (event) => {
        setFormData({ ...formData, pid: event.target.value });
    }
    const handleEmailChange = (event) => {
        setFormData({ ...formData, email: event.target.value });
    }
    
    const handlePhoneChange = (event) => {
        setFormData({ ...formData, phone: event.target.value });
    }


    


    const handlePasswordChange = (event) => {
        setFormData({ ...formData, password: event.target.value });
    }
    

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     console.log("This is form data: ", console.log(formData));
    // }

    // const registerUser = async () => {
    //     const email = formData.email;
    //     const firstname = formData.firstName;
    //     const lastname = formData.lastName;
    //     const password = formData.password;
    //     const IDCard = formData.image;

    //     console.log("This is the formdata ", email, firstname, lastname, password, IDCard)

    //     if (formData.email.length > 1 && formData.password.length > 1) {
    //         let result = await fetch('http://localhost:5000/api/user/register', {
    //             method: 'post',
    //             body: JSON.stringify({ email, firstname, lastname, password, IDCard }),
    //             headers: {
    //                 'Content-Type': 'application/json'
    //             },
    //         })
    //         result = await result.json()

    //         // localStorage.setItem("user", JSON.stringify(result));
    //         // localStorage.setItem("owner", name);

    //         if (result.auth) {
    //             alert("You have been succesfully registered!")
    //             localStorage.setItem('token', JSON.stringify(result.auth))
    //             localStorage.setItem('user', JSON.stringify(result.newUser))
    //             dispatch(setUser(result.newUser))
    //             navigate('/');
    //         }
    //     } else {
    //         alert("Please enter valid details");
    //     }
    // }


    const submitSignupForm = (e) => {
        e.preventDefault();
        console.log("Signup called");

        const formdata = new FormData();
        formdata.append('email', formData.email);
        formdata.append('firstname', formData.firstName);
        formdata.append('lastname', formData.lastName);
        formdata.append('phone', formData.phone);
        formdata.append('password', formData.password);
        formdata.append('file', formData.image);

        axios.post('http://localhost:5000/api/client/register', formdata, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        })
            .then(res => console.log("An eror", res))
            .catch(err => console.log(err));
    }

    return (
        <div className='signup'>
            {/* <img
                className='signup_logo'
                src={Logo}
            /> */}

            <div className='signup_container'>
                <h1>Worker-Login</h1>

                <form >

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.phone} onChange={handlePhoneChange} label="Phone-no" variant="outlined" />
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

export default ClientLogin
