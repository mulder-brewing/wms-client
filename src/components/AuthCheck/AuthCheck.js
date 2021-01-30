import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authOperations } from '../../store/auth';

const AuthCheck = () => {
    const dispatch = useDispatch();
    const authCheck = useCallback(() => dispatch(authOperations.authCheck),[dispatch]);
    useEffect(authCheck,[authCheck]);
    return null;
}

export default AuthCheck;