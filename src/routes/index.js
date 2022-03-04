import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login'
import ForgotPassword from '../pages/forgotPassword/forgotPassword';
import Welcome from '../pages/welcome';
import Dashboard from '../pages/dashBoard/dashboard';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Welcome />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/forgot-password" element={<ForgotPassword />} />
    <Route exact path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default App;
