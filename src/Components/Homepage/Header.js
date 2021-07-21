import React from 'react';
import { Button, Toolbar, PropTypes, IconButton, Typography, Link, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import { SearchIcon } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    }
}));

function Header(props) {

    const classes = useStyles();


    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button size="small">Add Record</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Rad Records
                </Typography>
                <IconButton>
                    {/* <SearchIcon /> */}
                </IconButton>
                <Button onClick={props.logout} variant="outlined" size="small">
                    LOGOUT
                </Button>
            </Toolbar>

        </React.Fragment>
    );


}

export default Header;