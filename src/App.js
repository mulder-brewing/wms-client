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
import SignIn from './containers/SignIn';
import SignUp from './containers/SignUp';
import ValidateEmail from './containers/ValidateEmail';

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
                    <SignedOutRoute exact path="/sign-up" component={SignUp} />
                    <SignedOutRoute exact path="/validate-email" component={ValidateEmail} />
                    <SignedOutRoute exact path="/sign-in" component={SignIn} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
