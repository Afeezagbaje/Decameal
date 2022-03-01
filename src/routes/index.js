import { Route, Routes } from 'react-router-dom';
import Welcome from '../pages/welcome';
import Reset from '../pages/ResetPassword'
import SimpleContainer from '../component/footer/Footer';

const App = () => (
  <div>
  <Routes>
    <Route exact path="/" element={<Welcome />} />
    <Route exact path="/ResetPassword" element={<Reset />} />
  </Routes>
  <SimpleContainer />
  </div>
);

export default App;
