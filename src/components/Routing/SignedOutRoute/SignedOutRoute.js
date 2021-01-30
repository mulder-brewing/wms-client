import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { authSelectors } from '../../../store/auth';

const SignedOutRoute = ({ component: Component, ...rest }) => {
    const isSignedIn = useSelector(authSelectors.isSignedIn);

    return (
        <Route
            {...rest}
            render={ props => 
                !isSignedIn ?
                    <Component {...props} /> :
                    <Redirect to="/" />
            } 
        />
    );
}

export default SignedOutRoute;