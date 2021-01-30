import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { authOperations, authSelectors } from '../../store/auth';
import SignedInDrawerLink from './DrawerLink/SignedInDrawerLink';
import SignedOutDrawerLink from './DrawerLink/SignedOutDrawerLink';

const useStyles = makeStyles((theme) => ({
    list: {
        width: 250
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

const MyAppBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isSignedIn = useSelector(authSelectors.isSignedIn);
    const open = Boolean(anchorEl);
    const { t } = useTranslation('global');

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const signOut = () => {
        dispatch(authOperations.signOut);
        handleClose();
    };

    const toggleDrawer = open => {
        setIsDrawerOpen(open);
    }

    const drawerLinks = (
        <div
            className={classes.list}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <List>
                <SignedOutDrawerLink 
                    textkey="menu.sign_in"
                    to="/signin"
                />
                <SignedOutDrawerLink 
                    textkey="menu.sign_up"
                    to="/signup"
                />
                <SignedInDrawerLink
                    textkey="menu.home" 
                    to="/"
                />
            </List>
        </div>
    );

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={() => toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        className={classes.title}
                    >
                        {t('app.title')}
                    </Typography>
                    {isSignedIn && (
                        <div>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={signOut}>{t('menu.sign_out')}</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
                {drawerLinks}
            </Drawer>
        </div>
    );
}

export default MyAppBar;
