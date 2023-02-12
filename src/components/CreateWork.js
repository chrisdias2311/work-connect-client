import React, { useState } from 'react'
import "./ClientSignup.css";
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
import { useEffect } from 'react';

function CreateWork() {
    useEffect(() => {
        const status = JSON.parse(localStorage.getItem('client')).validity;
        if (status !== "Yes") {
            navigate("/");
        } 
    }, []);



    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        category: '',
        day: '',
        month: '',
        year: '',
        location: ''
    });
    const imageData = new FormData();
    const [imageUpload, setImageUpload] = useState(false);

    // const dispatch = useDispatch();




    const handleTitleChange = (event) => {
        setFormData({ ...formData, title: event.target.value });
    }
    const handleDescChange = (event) => {
        setFormData({ ...formData, desc: event.target.value });
    }
    const handleCategoryChange = (event) => {
        setFormData({ ...formData, category: event.target.value });
    }
    const handleDayChange = (event) => {
        setFormData({ ...formData, day: event.target.value });
    }
    const handleMonthchange = (event) => {
        setFormData({ ...formData, month: event.target.value });
    }
    const handleYearChange = (event) => {
        setFormData({ ...formData, year: event.target.value });
    }
    const handleLocationChange = (event) => {
        setFormData({ ...formData, location: event.target.value });
    }


    const createTask = (e) => {
        if (formData.title && formData.desc && formData.category && formData.day && formData.month && formData.year && formData.location) {
            e.preventDefault();
            console.log("Create Task called");

            // const clientId = localStorage.getItem('client');
            const client = JSON.parse(localStorage.getItem('client'))._id;

            const formdata = new FormData();
            formdata.append('cid', client);
            formdata.append('title', formData.title);
            formdata.append('desc', formData.desc);
            formdata.append('category', formData.category);
            formdata.append('date', formData.day + '-' + formData.month + '-' + formData.year);
            formdata.append('location', formData.location);

            console.log("This is the cid", client);


            axios.post('http://localhost:5000/api/work/createtask', formdata, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then(res => {
                    alert("Task Created Successfully")
                    console.log("An eror", res)
                })
                .catch(err => console.log(err));
        } else {
            alert("Please Fill all the fields!")
        }
    }

    return (
        <div className='signup'>
            {/* <img
                className='signup_logo'
                src={Logo}
            /> */}

            <div className='signup_container'>
                <h1>Create a task</h1>

                <form className='inputForm'>

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.title} onChange={handleTitleChange} label="Work Title" variant="outlined" />
                    </div>

                    <br></br>

                    <div className='inputField'>
                        <TextField
                            id="outlined-multiline-flexible"
                            label="Work Description"
                            value={formData.desc}
                            onChange={handleDescChange}
                            fullWidth
                            multiline
                            maxRows={4}
                        />
                    </div>
                    <br></br>

                    <div className='inputfield'>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formData.category}
                                label="Select Category"
                                onChange={handleCategoryChange}
                            >
                                <MenuItem value={'Electric'}>Electric</MenuItem>
                                <MenuItem value={'Plumbing'}>Plumbing</MenuItem>
                                <MenuItem value={'Painting'}>Painting</MenuItem>
                                <MenuItem value={'Carpentry'}>Carpentry</MenuItem>
                                <MenuItem value={'Painting'}>Painting</MenuItem>
                                <MenuItem value={'Masonary'}>Masonary</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <br></br>
                    <div className='inputDate'>
                        <TextField sx={{
                            width: { sm: 100, md: 120 },
                            "& .MuiInputBase-root": {

                            }
                        }} className='inputField' id="outlined-basic" value={formData.day} onChange={handleDayChange} label="Day" variant="outlined" />

                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Month</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={formData.month}
                                label="Select Category"
                                onChange={handleMonthchange}
                            >
                                <MenuItem value={'Janauary'}>Janauary</MenuItem>
                                <MenuItem value={'February'}>February</MenuItem>
                                <MenuItem value={'March'}>March</MenuItem>
                                <MenuItem value={'April'}>April</MenuItem>
                                <MenuItem value={'May'}>May</MenuItem>
                                <MenuItem value={'June'}>June</MenuItem>
                                <MenuItem value={'July'}>July</MenuItem>
                                <MenuItem value={'August'}>August</MenuItem>
                                <MenuItem value={'September'}>September</MenuItem>
                                <MenuItem value={'October'}>October</MenuItem>
                                <MenuItem value={'November'}>November</MenuItem>
                                <MenuItem value={'December'}>December</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField sx={{
                            width: { sm: 100, md: 200 },
                            "& .MuiInputBase-root": {

                            }
                        }} className='inputField' id="outlined-basic" value={formData.year} onChange={handleYearChange} label="Year" variant="outlined" />
                    </div>

                    <br></br>

                    <div className='inputField'>
                        <TextField className='inputField' fullWidth id="outlined-basic" value={formData.location} onChange={handleLocationChange} label="Work Location" variant="outlined" />
                    </div>

                    <br></br>
                    <br></br>

                </form>

                <Button variant="contained" onClick={createTask}>
                    Create Task
                </Button>
            </div>
        </div>
    )
}

export default CreateWork
