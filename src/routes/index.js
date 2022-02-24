import { Route, Switch } from 'react-router-dom';
import Welcome from '../pages/welcome';


const App = () => (
  <Switch>
    <Route exact path="/" component={Welcome} />
  </Switch>
);

export default App;
