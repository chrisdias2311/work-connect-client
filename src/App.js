import './App.css';
import ClientSignup from './components/ClientSignup';
import Home from './components/Home';
import { BrowserRouter, Switch, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<><Home /></>}></Route>
        <Route path='/clientsignup' element={<><ClientSignup /></>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
