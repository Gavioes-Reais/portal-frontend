import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import SingUp from "./pages/sign-up/SingUp";
import Home from "./pages/home/Home";

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={ <Login/> }/> 
        <Route exact path="/sign-up" element={ <SingUp/> }/> 
        <Route exact path="/home" element={ <Home/> }/> 
      </Routes>
    </Router>
  );
}

export default App;
