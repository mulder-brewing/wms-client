import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

import { authSelectors } from '../../../store/auth';

const SignedInRoute = ({ component: Component, ...rest }) => {
    const isSignedIn = useSelector(authSelectors.isSignedIn);

    return (
        <Route
            {...rest}
            render={ props => 
                isSignedIn ?
                    <Component {...props} /> :
                    <Redirect to="/sign-in" />
            } 
        />
    );
}

export default SignedInRoute;