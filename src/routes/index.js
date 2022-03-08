import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashBoard/dashboard';
import Login from "../pages/login/login";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import Home from "../pages/home/LandingPage";
import Reset from "../pages/resetPassword/ResetPassword";
import AboutPage from "../pages/About_page/about";

const App = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/forgot-password" element={<ForgotPassword />} />
    <Route exact path="/dashboard" element={<Dashboard />} />
    <Route path="/profile" element= { ( <h1>profile</h1> ) } />
    <Route exact path="/reset-password" element={<Reset />} />
    <Route exact path="/about" element={<AboutPage />} />
  </Routes>
);

export default App;
