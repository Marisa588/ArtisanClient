import React from 'react';
import { Button, Toolbar, IconButton, MenuItem, Menu, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ModalTest from './ModalTest'

import logo from '../../assets/radnew.png'
import userIcon from '../../assets/usericon.png'

const useStyles = makeStyles((theme) => ({
    toolbar: {
        background: '#ED6A40',
        padding: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '100px'
    },
    toolbarTitle: {
        flex: 1,
    },
    img: {
        maxWidth: '45%'
    },
    btn: {
        padding: '0 5% 0'
    }

}));

function Header(props) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Toolbar className={classes.toolbar}>
            
            {/* <Button className={classes.btn} aria-controls="simple-menu">SELL</Button> */}
            <ModalTest token={props.token}/>
            <img className={classes.img} alt='brightly colored logo with text rad records' src={logo}></img>
            <IconButton
                aria-label="account of current user"
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                color="inherit"
                className={classes.btn}
            >
                <Avatar alt="user icon that looks like a record player" src={userIcon} className={classes.small}></Avatar>
            </IconButton>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>My Listings</MenuItem>
                <MenuItem onClick={handleClose}>My Likes</MenuItem>
                <MenuItem onClick={props.logout}>Logout</MenuItem>
            </Menu>
        </Toolbar>

    );


}

export default Header;