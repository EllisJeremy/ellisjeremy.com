
import { BrowserRouter as Router, Routes, Route, Navigate  } from 'react-router-dom';

import Home from "./pages/Home/Home";
import Sylvester from "./pages/Sylvester/Sylvester";

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Navigate to="/" replace  />} />
        <Route path="/Sylvester" element={<Sylvester />} />
      </Routes>
    </Router>

    
    
  );
}






