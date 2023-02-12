import React,{useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './OfferCard.css'

const OfferCard = () => {
  return (
    <>
        <div className='main_card'>
        <form> 
            <div className='Worker-Details'>
            <div className='input-field'>
                <TextField name='title'  label="Name" disabled id="outlined-read-only-input" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div className='input-field'>
                <TextField  label="Expertise"  name='content' disabled id="outlined-read-only-input" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div className='input-field'>
                <TextField type='text' name='price' label="Wages" variant="outlined" disabled id="outlined-read-only-input" InputProps={{
            readOnly: true,
          }} />
            </div>
            <div className='input-field'>
                <TextField  name='category' multiline maxRows={5} label="Loaction" variant="outlined" disabled id="outlined-read-only-input" InputProps={{
            readOnly: true,
          }} />
            </div>
            </div>
        </form>
    </div>
    </>
  )
}

export default OfferCard