// initial componet
// import { Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Dashboard from "./components/dashboard/index";
// import Register from "./components/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home title={"Home Page"} />} />
        <Route path="/login" element={<Login title="LOGIN PAGE" descripsi="Absensi Apps" />} />
        <Route path="/register" element={<Register title="REGISTER PAGE" descripsi="Absensi Apps" />} />
        <Route path="/dashboard" element={<Dashboard title="Dashboard" />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
