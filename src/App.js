import './App.css';
import ClientSignup from './components/ClientSignup';
import ClientLogin from './components/ClientLogin';
import WorkerSignup from './components/WorkerSignup';
import WorkerLogin from './components/WorkerLogin';
import AdminLogin from './components/AdminLogin';
import WorkerDashboard from './components/WorkerDashboard';
import CreateAdmin from './components/CreateAdmin';
import InvalidClients from './components/InvalidClients';
import InvalidWorkers from './components/InvalidWorkers';
// import InvalidUsers from './components/InvalidClients';

// import Home from './components/Home';
// import Navbar from './components/NavigationBar'
// import Card from './components/TaskCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";
// import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/workerdashboard' element={<><WorkerDashboard /></>}></Route>
        <Route path='/clientsignup' element={<><ClientSignup /></>}></Route>
        <Route path='/clientlogin' element={<><ClientLogin /></>}></Route>
        <Route path='/workersignup' element={<><WorkerSignup /></>}></Route>
        <Route path='/workerlogin' element={<><WorkerLogin /></>}></Route>
        <Route path='/adminlogin' element={<><AdminLogin /></>}></Route>
        <Route path='/createadmin' element={<><CreateAdmin /></>}></Route>
        <Route path='/invalidclients' element={<><InvalidClients /></>}></Route>
        <Route path='/invalidworkers' element={<><InvalidWorkers /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// zane