import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import { authOperations, authSelectors } from '../../store/auth';

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const ValidateEmail = () => {
    const classes = useStyles();
    const { 
        errors, 
        formState: { isSubmitted, isValid },
        handleSubmit,
        register
    } = useForm({
        mode: 'onChange'
    });
    const { t } = useTranslation('form');
    const dispatch = useDispatch();
    const isEmailValidated = useSelector(authSelectors.isEmailValidated);

    const onSubmit = async data => dispatch(authOperations.validateEmail({
        token: data.token
    }));

    return (
        <Container maxWidth="xs">
            { isEmailValidated && <Redirect to="/sign-in" /> }
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography 
                    component="h1" 
                    variant="h5"
                >
                    {t('form:validateEmail.title')}
                </Typography>
                <form
                    className={classes.form}
                    noValidate
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Grid 
                        container 
                        direction="column" 
                        spacing={2}
                    >
                        <Grid item>
                            <TextField
                                autoFocus
                                error={!!errors.token}
                                fullWidth
                                inputRef={register({
                                    required: true
                                })}
                                label={t('form:validateEmail.token')}
                                name="token"
                                required
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        className={classes.submit}
                        color="primary"
                        disabled={isSubmitted && !isValid}
                        fullWidth
                        type="submit"
                        variant="contained"
                    >
                        {t('form:validateEmail.title')}
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default ValidateEmail;