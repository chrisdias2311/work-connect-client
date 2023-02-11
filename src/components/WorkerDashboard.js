import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import TaskCard from './TaskCard';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

// Temporary Home page
function WorkerDashboard() {
  return (
    <div>
      <Box>
        <NavigationBar postion="sticky" />
        <div className='Card-container'>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        <div className='Card-container'>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        <div className='Card-container'>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
        <div className='Card-container'>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </Box>
      <Footer />
    </div>
  )
}

export default WorkerDashboard
