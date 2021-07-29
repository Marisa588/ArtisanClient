import React from 'react';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageList from '@material-ui/core/ImageList';
import ImageListItem from '@material-ui/core/ImageListItem';
import ImageListItemBar from '@material-ui/core/ImageListItemBar';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdatedProduct from './Edit';
import EditIcon from '@material-ui/icons/Edit';








const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    paddingTop: '50',
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

  
}));





  
function MyProducts (props) {
 const [postId, setPostId] = useState([])
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
    .then((data) => {
      setPostData(data);
    })
    .catch(err => {
      console.error(err)
    })
    }, []);
console.log(postData)


// let postId = postData.map(post(Id));


let handleDelete = (e) => {
  e.preventDefault() 
           fetch(`http://localhost:3001/${postId}`, {
             method: "Delete",
             headers: new Headers({
               "Content-Type": "application/json",
               "Authorization": `Bearer ${props.token}`
             })
           })
           .then(response => response.json())
           .then((data) => {
             console.log(data);
           })
           .catch(err => {
             console.error(err)
           })
          }


const classes = useStyles();



    return (
      <div className={classes.root}>
      <ImageList className={classes.imageList} cols={4} rowHeight={300}>
        {postData.map((post) => (
          <ImageListItem key={post.imageUrl}>
            <img src={post.imageUrl} alt={post.title} />
            <ImageListItemBar
              title= {post.album}
              classes={{
                root: classes.titleBar,
                title: classes.delete,
              }}
              actionIcon={
                <div>                
                  <DeleteIcon onClick= {handleDelete} /> 
                  <EditIcon onClick= {UpdatedProduct} />
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