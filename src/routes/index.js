import { Route, Routes } from 'react-router-dom';
import ForgotPassword from '../pages/forgotPassword/forgotPassword';
import Welcome from '../pages/welcome';
import Reset from '../pages/ResetPassword'

const App = () => (
  <Routes>
    <Route exact path="/" element={<Welcome />} />
    <Route exact path="/forgot-password" element={<ForgotPassword />} />
    <Route exact path="/ResetPassword" element={<Reset />} />

  </Routes>
);

export default App;
