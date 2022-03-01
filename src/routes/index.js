import { Route, Routes } from 'react-router-dom';
import Welcome from '../pages/welcome';

const App = () => (
  <div>
  <Routes>
    <Route exact path="/" element={<Welcome />} />
  </Routes>
  </div>
);

export default App;
