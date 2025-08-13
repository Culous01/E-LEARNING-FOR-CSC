import { Routes, Route } from "react-router-dom";
import './App.css';
// import { Navbar } from './ReusableComponent/Navbar';
import Home from './RoutePages/Home';
import Login from './RoutePages/Login';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

    </>

  )
}

export default App
