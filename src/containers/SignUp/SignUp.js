import React from 'react';
import TextField from '@material-ui/core/TextField';

import classes from './SignUp.module.css';

const signUp = () => (
    <div className={classes.SignUp}>
        <form noValidate autoComplete="off">
            <TextField id="standard-basic" label="Standard" />
        </form>
    </div>
);

export default signUp;