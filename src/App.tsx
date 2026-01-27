import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home/Home";
import Sylvester from "./pages/Sylvester/Sylvester";
import BehaviorLens from "./pages/BehaviorLens/BehaviorLens";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Navigate to="/" replace />} />
          <Route path="/Sylvester" element={<Sylvester />} />
          <Route path="/BehaviorLens" element={<BehaviorLens />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
