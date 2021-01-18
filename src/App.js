import CssBaseline from '@material-ui/core/CssBaseline';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

import Alert from './components/Alert/Alert';
import AppBar from './components/AppBar';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';

function App() {
    return (
        <Router>
            <CssBaseline />
            <div>
                <Alert />
                <AppBar />
                <Switch>
                    <Route exact path="/">
                        <div>
                            <h2>Home</h2>
                        </div>
                    </Route>
                    <Route path="/signup" component={SignUp} />
                    <Route path="/signin" component={SignIn} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
