import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Teams from './component/Teams/Teams';
import TeamDescription from './component/TeamDescription/TeamDescription';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
          <Teams></Teams>
        </Route>
        <Route path="/team/:teamid">
          <TeamDescription></TeamDescription>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
