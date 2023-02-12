import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import TaskCard from './TaskCard';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

// Temporary Home page
function WorkerDashboard() {

  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const status = JSON.parse(localStorage.getItem('worker')).validity;

    if (status !== "Yes") {
      navigate("/");
    } else {
      axios
        .get("http://localhost:5000/api/work/availabletasks")
        .then((response) => {
          console.log(response.data);
          setTasks(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  return (
    <div>
      <Box>
        <NavigationBar postion="sticky" />
        {
          tasks.length > 0 ? tasks.map((item, index) =>
            <TaskCard
              location={item.location}
              workId={item._id}
              title={item.workTitle}
              desc={item.workDescription}
              category={item.category}
              date={item.date}
            />
          ) : <h1>No users found</h1>
        }
      </Box>


      {/* <div className='Card-container'>
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
        </div> */}

      <Footer />
    </div>
  )
}

export default WorkerDashboard
