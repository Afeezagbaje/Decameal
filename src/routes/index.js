import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login'
import ForgotPassword from "../pages/forgotPassword/forgotPassword";
import Welcome from "../pages/welcome";
import Reset from "../pages/resetPassword/ResetPassword";

const App = () => (
  <Routes>
    <Route exact path="/" element={<Welcome />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/forgot-password" element={<ForgotPassword />} />
    <Route exact path="/reset-password" element={<Reset />} />
  </Routes>
);

export default App;
