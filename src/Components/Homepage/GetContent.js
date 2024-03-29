import React from'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import Modal from '@material-ui/core/Modal';
import ListItemText from '@material-ui/core/ListItemText';

import ButtonGroup from '@material-ui/core/ButtonGroup';

import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

 

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      // backgroundColor: '#E5D2B4'

    },
    imageList: {
      flexWrap: 'no-wrap'
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
    

  useEffect(() => {
      const fetchItems = async () => {
          const result = await axios(`http://localhost:3001/products`)
          console.log(result.data)
          setItemData(result.data)
      }
      fetchItems()
  }, [])
    
    console.log(itemData)
    // function BasicButtonGroup() {
    //   const button{

    //   onclick(e.target.value);
    //   }
    // }


  return (
    <div className={classes.root}>
    <ImageList rowHeight={400} className={classes.imageList}>
      <ImageListItem key="Subheader" cols={2} style={{ height: 'auto' }}>
        <ListItemText className={classes.align} component="div">For Sale</ListItemText>
      </ImageListItem>
        {itemData.map((item) => (
        <ImageListItem key={item.imageUrl}>
          <img src={item.imageUrl} alt={item.album} />
          <ImageListItemBar
            album={item.album}
            subtitle={<span>By: {item.artist} ; Condition: {item.condition}<br/><br/> Price: ${item.price} ; Description: {item.description} </span>}
            actionIcon={
              <ButtonGroup varient="contained">
                <FavoriteIcon />
                <AddShoppingCart />
              </ButtonGroup>
            }
            />
        </ImageListItem>
      ))}
    </ImageList>
    
  </div>
  )
}


export default AllProduct