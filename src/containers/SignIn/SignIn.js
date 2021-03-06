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
import { useTranslation } from 'react-i18next';

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
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn() {
    const classes = useStyles();
    const dispatch = useDispatch();
    const isCheckingAuth = useSelector(authSelectors.isCheckingAuth);
    const isEmailConfirmed = useSelector(authSelectors.isEmailValidated);
    const isSignedIn = useSelector(authSelectors.isSignedIn);
    const isSignedUp = useSelector(authSelectors.isSignedUp);
    const { t } = useTranslation(['form']);
    const {  
        errors, 
        formState: { isSubmitted, isValid },
        handleSubmit,
        register
    } = useForm({
        mode: 'onChange'
    });

    if (isCheckingAuth) {
        return null;
    }

    const onSubmit = data => dispatch(authOperations.signIn(data.username, data.password));
    
    return (
        <Container maxWidth="xs">
            { isSignedIn && <Redirect to="/" /> }
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography 
                    component="h1" 
                    variant="h5"
                >
                    {t('form:signin.title')}
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
                                inputProps={{ maxLength: 40 }}
                                inputRef={register({
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
                        {t('form:signin.title')}
                    </Button>
                    <Grid 
                        container
                        direction="column"
                        alignItems="flex-end"
                        spacing={2}
                    >
                        { !isSignedUp &&
                            <Grid item>
                                <Link
                                    component={RouterLink} 
                                    to="/sign-up"
                                    variant="body2"
                                >
                                    {t('form:signin.sign_up_instead')}
                                </Link>
                            </Grid>
                        }
                        { !isEmailConfirmed &&
                            <Grid item>
                                <Link
                                    component={RouterLink} 
                                    to="/validate-email"
                                    variant="body2"
                                >
                                    {t('form:validateEmail.title')}
                                </Link>
                            </Grid>
                        }
                    </Grid>
                </form>
            </div>
        </Container>
    );
}