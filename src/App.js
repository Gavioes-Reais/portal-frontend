import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import SingUp from "./pages/sign-up/SingUp";
import Home from "./pages/home/Home";
import Calendar from "./pages/calendar/Calendar";

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={ <Login/> }/> 
        <Route exact path="/sign-up" element={ <SingUp/> }/> 
        <Route exact path="/home" element={ <Home/> }/> 
        <Route exact path="/calendar" element={ <Calendar/> }/> 
      </Routes>
    </Router>
  );
}

export default App;
