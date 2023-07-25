import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import SingUp from "./pages/sign-up/SingUp";
import Home from "./pages/home/Home";
import Calendar from "./pages/calendar/Calendar";
import Profile from "./pages/profile/Profile";
import Library from "./pages/library/Library";
import Bulletin from "./pages/bulletin/Bulletin";

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={ <Login/> }/> 
        <Route exact path="/sign-up" element={ <SingUp/> }/> 
        <Route exact path="/home" element={ <Home/> }/> 
        <Route exact path="/calendar" element={ <Calendar/> }/>
        <Route exact path="/profile" element={ <Profile/> }/>
        <Route exact path="/library" element={ <Library/> }/>
        <Route exact path="/bulletin" element={ <Bulletin/> }/>   
      </Routes>
    </Router>
  );
}

export default App;
