import './App.css';
import ClientSignup from './components/ClientSignup';
import ClientLogin from './components/ClientLogin';
import WorkerSignup from './components/WorkerSignup';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
        <>
        <Box>
        <Navbar postion="sticky" />
        <div className='Card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <div className='Card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <div className='Card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        <div className='Card-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
      </Box>
      </>
      }></Route>
        <Route path='/clientsignup' element={<><ClientSignup /></>}></Route>
        <Route path='/clientlogin' element={<><ClientLogin/></>}></Route>
        <Route path='/workersignup' element={<><WorkerSignup /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// zane