import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login_page/login'
// import LoginScreen from '../pages/login_page/login_screen';
import Welcome from '../pages/welcome';


const App = () => (
  <Routes>
    <Route exact path="/" element={<Welcome />} />
    <Route exact path="/login_screen" element={<Login />} />
  </Routes>
);

export default App;
