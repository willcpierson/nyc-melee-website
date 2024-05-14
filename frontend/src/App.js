import NavBar from "./components/NavBar/index.js";
import FrontPage from "./components/FrontPage/index.js";
import StaffPage from "./components/StaffPage/index.js";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutPage from "./components/AboutPage/index.js";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
