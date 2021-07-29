import React from 'react';
import { makeStyles, Modal } from '@material-ui/core'
import SubmissionForm from './SubmissionForm';

import userIcon from '../../assets/listyourrecord-small.png'

function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    btn: {
      background: 'transparent',
      color: 'transparent',
      border: 'none'
    },
    img: {
      maxWidth: '100px',
      maxHeight: '100px'
    }
  }));
  
  export default function SimpleModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const body = (
      <div style={modalStyle} className={classes.paper}>
        <h2>Submit a rad record</h2>
          <SubmissionForm token={props.token}/>
      </div>
    );
  
    return (
      <div>
        <button className={classes.btn} type="button" onClick={handleOpen}>
          <img className={classes.img} src={userIcon}></img>
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    );
  }