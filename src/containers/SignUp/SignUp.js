import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink, Redirect } from 'react-router-dom';
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

const SignUp = () => {
    const classes = useStyles();
    const { 
        errors, 
        formState: { isSubmitted, isValid },
        handleSubmit,
        register
    } = useForm({
        mode: 'onChange'
    });
    const { t } = useTranslation(['alert', 'form']);
    const dispatch = useDispatch();
    const isSignedUp = useSelector(authSelectors.isSignedUp);

    const onSubmit = async data => dispatch(authOperations.signUp({
        company: {
            name: data.company_name
        },
        user: {
            username: data.username,
            password: data.password
        },
        email: data.email
    }));

    return (
        <Container maxWidth="xs">
            { isSignedUp && <Redirect to="/signin" /> }
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography 
                    component="h1" 
                    variant="h5"
                >
                    {t('form:signup.title')}
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
                                error={!!errors.company_name}
                                fullWidth
                                inputProps={{ maxLength: 50 }}
                                inputRef={register({
                                    required: true
                                })}
                                label={t('form:signup.company')}
                                name="company_name"
                                required
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                error={!!errors.email}
                                fullWidth
                                helperText={errors.email && errors.email.message}
                                inputProps={{ maxLength: 255 }}
                                inputRef={register({
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: t('form:validation.email')
                                    },
                                    required: true
                                })}
                                label={t('form:shared.email')}
                                name="email"
                                required
                                type="email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                error={!!errors.username}
                                fullWidth
                                inputProps={{ maxLength: 50 }}
                                inputRef={register({
                                    required: true
                                })}
                                label={t('form:shared.auth.username')}
                                name="username"
                                required
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                error={!!errors.password}
                                fullWidth
                                helperText={errors.password && errors.password.message}
                                inputProps={{ maxLength: 40 }}
                                inputRef={register({
                                    minLength: {
                                        value: 8,
                                        message: t('form:validation.minLength', { minLength: 8 })
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                                        message: t('form:signup.validation.password_complexity')
                                    },
                                    required: true
                                })}
                                label={t('form:shared.auth.password')}
                                name="password"
                                required
                                type="password"
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
                        {t('form:signup.title')}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link 
                                component={RouterLink}
                                to="/signin" 
                                variant="body2"
                            >
                                {t('form:signup.sign_in_instead')}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;