import React from 'react'
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import NavigationBar  from './NavigationBar';



function Home() {
  const navigate = useNavigate();

  const toAdminLogin = () => {
    navigate('/adminlogin')
  } 
  const toClientSignup = () => {
    navigate('/clientsignup')
  } 
  const toWorkerSignup = () => {
    navigate('/workersignup')
  } 
  const toClientLogin = () => {
    navigate('/clientlogin')
  } 
  const toWorkerLogin = () => {
    navigate('/workerlogin')
  } 
  

  return (
    <div className='home'>
      <div className='home_container'>
        <NavigationBar />
        <img className="home_image" src="https://i.pinimg.com/originals/b2/b9/12/b2b9128b7e56515f4f6b5317a58ba1af.jpg"></img>
        <Button variant="contained">Admin</Button>
        <Button variant="contained">CLient</Button>
        <Button variant="contained">Worker</Button>
        <div className='home_left'>
        </div>
        
      </div>
    </div>
  )
}

export default Home