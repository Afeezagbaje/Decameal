import { Route, Routes } from 'react-router-dom';
import ForgotPassword from '../pages/forgotPassword/forgotPassword';
import Welcome from '../pages/welcome';

const App = () => (
  <Routes>
    <Route exact path="/" element={<Welcome />} />
    <Route exact path="/forgot-password" element={<ForgotPassword />} />
  </Routes>
);

export default App;
