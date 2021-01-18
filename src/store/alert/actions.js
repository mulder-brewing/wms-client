import * as types from './types';

const default_alert = (severity, title, message) => ({
    alert: {
        alert_props: {
            severity, 
            variant: 'filled'
        },
        message,
        snackbar_props: {
            anchorOrigin: {
                vertical: 'top', 
                horizontal: 'center'
            },
            open: true
        },
        title,
    },
    type: types.SHOW
});

const success_alert = (title, message) => ({
    alert: {
        alert_props: {
            severity: 'success', 
            variant: 'filled'
        },
        message,
        snackbar_props: {
            autoHideDuration: 5000,
            anchorOrigin: {
                vertical: 'bottom', 
                horizontal: 'left'
            },
            open: true
        },
        title,
    },
    type: types.SHOW
});

export const close = () => ({
    type: types.CLOSE
});

export const error = (title, message) => default_alert('error', title, message);

export const success = (title, message) => success_alert(title, message);

