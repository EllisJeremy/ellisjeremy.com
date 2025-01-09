
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./pages/Home/Home";
import Sylvester from "./pages/Sylvester/Sylvester";

export default function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sylvester" element={<Sylvester />} />
      </Routes>
    </Router>

    
    
  );
}






