import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    // backgroundColor: 'theme.palette.background.paper,',
    backgroundColor: '#E5D2B4' //just trying this out, can change if we don't like it

  },
  imageList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  align: {
    textAlign: 'center',
    color: '#8C6373'
  }
}));



  
function MyProducts (props) {
 
  const [postData, setPostData] = useState([])
    useEffect(() => {  
    fetch(`http://localhost:3001/products/mine`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.token}`
      })
    })
    .then(response => response.json())
    .then((json) => {
      setPostData(json);
    })
    .catch(err => {
      console.error(err)
    })
    }, []);
console.log(postData)

const classes = useStyles();



    return (
      <div className={classes.root}>
         <ListItemText className={classes.align} component="div">My Listings</ListItemText>
      <ImageList className={classes.imageList} cols={2}>
        {postData.map((post) => (
          <ImageListItem key={post.imageUrl}>
            <img src={post.imageUrl} alt={post.title} />
            <ImageListItemBar
              title={post.title}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <EditIcon />
                
              }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div> 
    )
    }

export default MyProducts