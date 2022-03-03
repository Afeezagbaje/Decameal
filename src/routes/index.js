import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login'
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import Reset from "../pages/ResetPassword";
import LandingPage from '../pages/landing page/LandingPage'

const App = () => (
  <Routes>
  <Route exact path="/" element={<LandingPage />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/forgot-password" element={<ForgotPassword />} />
    <Route exact path="/reset-password" element={<Reset />} />
  </Routes>
);

export default App;
