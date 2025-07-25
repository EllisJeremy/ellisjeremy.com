import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Home from "./pages/Home/Home";
import Sylvester from "./pages/Sylvester/Sylvester";
import OrchardCalendar from "./pages/OrchardCalendar/OrchardCalendar";

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Navigate to="/" replace />} />
          <Route path="/Sylvester" element={<Sylvester />} />
          <Route path="/Calendar" element={<OrchardCalendar />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}
