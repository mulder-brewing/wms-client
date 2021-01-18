import * as types from './types';

const initialState = {
    alert_props: {
        variant: 'filled'
    },
    message: null,
    snackbar_props: {
        anchorOrigin: {
            vertical: 'top', 
            horizontal: 'center'
        },
        open: false
    },
    title: null
};

const alertReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.SHOW:
            return action.alert;
        case types.CLOSE:
            return {
                ...state,
                snackbar_props: {
                    ...state.snackbar_props,
                    open: false
                }
            };
        default:
            return state;
    }
};

export default alertReducer;