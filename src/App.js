import CssBaseline from '@material-ui/core/CssBaseline';
import {
    BrowserRouter as Router,
    Switch
} from 'react-router-dom';

import Alert from './components/Alert/Alert';
import AppBar from './components/AppBar';
import AuthCheck from './components/AuthCheck';
import Home from './containers/Home/Home';
import SignedInRoute from './components/Routing/SignedInRoute';
import SignedOutRoute from './components/Routing/SignedOutRoute';
import SignIn from './containers/SignIn/SignIn';
import SignUp from './containers/SignUp/SignUp';

function App() {
    return (
        <Router>
            <CssBaseline />
            <div>
                <Alert />
                <AppBar />
                <AuthCheck />
                <Switch>
                    <SignedInRoute exact path="/" component={Home} />
                    <SignedOutRoute path="/signup" component={SignUp} />
                    <SignedOutRoute path="/signin" component={SignIn} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
