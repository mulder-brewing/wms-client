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

import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useTranslation } from "react-i18next";
import axios from '../../axios';

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
    const { register, handleSubmit, errors } = useForm();
    const { t } = useTranslation('form');

    const onSubmit = async data => {
        const postData = {
            company: {
                name: data.company_name
            },
            user: {
                username: data.username,
                password: data.password
            }
        };
        const reponse = await axios.post('signup', postData);
        console.log(reponse);
    }

    return (
        <Container maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    {t('signup.title')}
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
                                error={!!errors.company}
                                fullWidth
                                inputRef={register({
                                    required: true
                                })}
                                label={t('signup.company')}
                                name="company_name"
                                required
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                error={!!errors.username}
                                fullWidth
                                inputRef={register({
                                    required: true
                                })}
                                label={t('shared.auth.username')}
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
                                        message: t('validation.minLength', {minLength: 8})
                                    },
                                    pattern: {
                                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                                        message: t('signup.validation.password_complexity')
                                    },
                                    required: true
                                })}
                                label={t('shared.auth.password')}
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
                        fullWidth
                        type="submit"
                        variant="contained"
                    >
                        {t('signup.title')}
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link 
                                component={RouterLink}
                                to="/signin" 
                                variant="body2"
                            >
                                {t('signup.sign_in_instead')}
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    );
}

export default SignUp;