import React from 'react';
import { useSelector } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import MaterialUIAlert from '@material-ui/lab/Alert';
import MaterialUIAlertTitle from '@material-ui/lab/AlertTitle';

import { alertActions, alertSelectors} from '../../store/alert';
import { useDispatch } from 'react-redux';

const Alert = () => {
    const alert = useSelector(alertSelectors.selectAlert);
    const dispatch = useDispatch();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(alertActions.close());
    };

    return ( 
        <Snackbar {...alert.snackbar_props} onClose={handleClose}>
            <MaterialUIAlert {...alert.alert_props} onClose={handleClose}>
                <MaterialUIAlertTitle>{alert.title}</MaterialUIAlertTitle>
                {alert.message && alert.message}
            </MaterialUIAlert>
        </Snackbar>
    );
}

export default Alert;