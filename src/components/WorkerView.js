import './WorkerView.css'
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

function WorkerView() {
  return (
    <>
      <body style={{ backgroundColor: 'rgb(179, 239, 241)',height:'100vh'}}>
    <div style={{ display: "grid", placeItems: "center" }}>
  <Card className="card1" style={{ backgroundColor: 'rgb(229, 233, 188)'}}>
    <CardContent>
      <Typography variant="h5" className="name">
        {"Name "}
        {"Last Name"}
      </Typography>
      <Typography variant="body1">
        Gender
      </Typography>
      <Typography className="SkillC">
        Skill1
      </Typography>
      <Typography className="SkillC">
        Skill2
      </Typography>
    </CardContent>
    {/* <CardActions>
      <Button size="small" color="primary">
        Update Profile
      </Button>
    </CardActions> */}
  </Card>
  <Card className="card2" style={{ backgroundColor: 'rgb(191, 233, 188)'}}>
    <CardContent>
      <Typography variant="h5">
        Feedback
      </Typography>
      <Box>
        <Card>
          <CardContent>
            <Typography style={{height:'8vh'}}>
              {"Feedback1"}
            </Typography>
          </CardContent>
        </Card>
        <Typography style={{height:'2vh'}}>
            {" "}
        </Typography>
        <Card>
          <CardContent>
            <Typography  style={{height:'8vh'}}>
            {"Feedback2"}
            </Typography>
          </CardContent>
        </Card>
        <Typography  style={{height:'2vh'}}>
            {" "}
        </Typography>
        <Card>
          <CardContent>
            <Typography  style={{height:'8vh'}}>
            {"Feedback3"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </CardContent>
  </Card>
</div>
</body>
    </>
  )
}

export default WorkerView