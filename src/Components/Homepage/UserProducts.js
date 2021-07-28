import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import updatedProduct from './Edit';
import EditIcon from '@material-ui/icons/Edit';





const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  imageList: {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  override: {
    IconButton: "space around"
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

const DeletePost = (props) => {
      const [deleteData, setDeleteData] = useState([])
      
      fetch(`http://localhost:3001/products/${postData.id}`, {
        method: "DELETE",
        headers: new Headers({
          "Content-Type": "application/json",
          "Authorization": `Bearer ${props.token}`
        })
      })
      .then(response => response.json())
      .catch(err => {
        console.error(err)
      })
      .then((json) => {
        setDeleteData(json);
      })
      .catch(err => {
        console.error(err)
      })
      console.log(deleteData)
    }
    // handleDelete = postId => {
    //   const myProducts= this.deleteData.myProducts.filter(postId => post.Id !== postId)
    //   this.setDeleteData({posts: posts})
    // };

const classes = useStyles();



    return (
      <div className={classes.root}>
      <ImageList className={classes.imageList} cols={2.5}>
        {postData.map((post) => (
          <ImageListItem key={post.imageUrl}>
            <img src={post.imageUrl} alt={post.title} />
            <ImageListItemBar
              title={post.album}
              classes={{
                root: classes.titleBar,
                title: classes.delete,
              }}
              actionIcon={
                <div>                
                  <DeleteIcon />
                  <EditIcon />
                </div>           
                
              }

            />
          </ImageListItem>
        ))}
      </ImageList>
    </div> 
    )

}


export default MyProducts