import { Route, Routes } from 'react-router-dom';
import Dashboard from '../pages/dashBoard/dashboard';
import Login from "../pages/login/login";
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import Home from "../pages/home/LandingPage";
import Reset from "../pages/resetPassword/ResetPassword";
import AboutPage from "../pages/About_page/about";

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/reset-password" element={<Reset />} />
    <Route path="/about" element={<AboutPage />} />
  </Routes>
);

export default App;
