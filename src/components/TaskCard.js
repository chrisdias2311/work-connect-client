import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import { width } from '@mui/system';
import './Card.css'


function TaskCard() {
  return (
    <>
    <div className='Container'>
    <Card style={{ width: '20rem'}}>
      
      <Card.Body>
        <Card.Title>Work Title</Card.Title>
        <Card.Text style={{paddingBottom:'50px'}}>
          Description
        </Card.Text>
        
        <Button variant="primary">Apply for Work</Button>
        <PlumbingIcon style={{marginLeft:'125px'}} />
      </Card.Body>
    </Card>
    </div>
    
    </>
  );
}

export default TaskCard;