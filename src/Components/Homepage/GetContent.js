import React from'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import Modal from '@material-ui/core/Modal';
 

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      maxWidth: '100vw',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      // backgroundColor: '#E5D2B4'

    },
    imageList: {
      width: 1200,
      height: 3000,
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)',
    },
    align: {
      textAlign: 'center',
      color: '#8C6373'
    }
  }));
  
function AllProduct() {
    const classes = useStyles();
    const [itemData, setItemData] = useState([])
    const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
      const fetchItems = async () => {
          const result = await axios(`http://localhost:3001/products`)
          console.log(result.data)
          setItemData(result.data)
      }
      fetchItems()
  }, [])
    
    console.log(itemData)


  return (
    <div className={classes.root}>
    <ImageList rowHeight={400} className={classes.imageList}>
      <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
        <ListSubheader className={classes.align} component="div">For Sale</ListSubheader>
      </ImageListItem>
        {itemData.map((item) => (
        <ImageListItem key={item.imageUrl}>
          <img src={item.imageUrl} alt={item.album} />
          <ImageListItemBar
            album={item.album}
            subtitle={<span>By: {item.artist} <br/><br/> Price: ${item.price} </span>}
            actionIcon={
              <IconButton aria-label={`info about ${item.album}`} className={classes.icon}>
                <InfoIcon>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                  >
                    {item.description}
                  </Modal>
                </InfoIcon>
                <FavoriteIcon />
                <ShareIcon />
              </IconButton>
            }
            />
        </ImageListItem>
      ))}
    </ImageList>
    
  </div>
  )
}


export default AllProduct