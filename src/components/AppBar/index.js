import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState } from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useTranslation } from "react-i18next";

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

const createMenuItem = (key, path) => ({
    key,
    path
});

const menuItems = [
    createMenuItem('menu.home', '/'),
    createMenuItem('menu.sign_in', '/signin'),
    createMenuItem('menu.sign_up', '/signup')
];

export default function ButtonAppBar() {
    const classes = useStyles();
    const { t, i18n } = useTranslation('global');

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = open => {
        setIsDrawerOpen(open);
    }

    const list = (
        <div
            className={classes.list}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <List>
                {menuItems.map(item => (
                    <ListItem 
                        button 
                        component={Link}
                        key={item.key} 
                        to={item.path} 
                    >
                        <ListItemText primary={t(item.key)} />
                    </ListItem>
                ))}
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
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrawerOpen} onClose={() => toggleDrawer(false)}>
                {list}
            </Drawer>
        </div>
    );
}
