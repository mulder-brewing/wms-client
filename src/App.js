import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import AppBar from './components/AppBar';
import SignUp from './containers/SignUp/SignUp';

function App() {
  return (
    <Router>
      <div>
        <AppBar />
        <Switch>
          <Route exact path="/">
            <div>
              <h2>Home</h2>
            </div>
          </Route>
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
