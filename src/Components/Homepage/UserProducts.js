// import { identifier } from '@babel/types';
// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ImageList from '@material-ui/core/ImageList';
// import ImageListItem from '@material-ui/core/ImageListItem';
// import ImageListItemBar from '@material-ui/core/ImageListItemBar';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';
// import EditIcon from '@material-ui/icons/Edit';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     flexWrap: 'nowrap',
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: 'translateZ(0)',
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
//   },
// }));

// function UserProducts () {
//   const [edit, setEdit] = useState([])
//   const [products, setProducts] = useState([])

//   useEffect(() => {
//     fetch(`http://localhost:3001/products/`)
//       .then(res => res.json())
//       .then(data => setProducts(data))
//   }, [])

//   const handleDelete = async (id) => {
//     await fetch(`http://localhost:3001/products/${productId}`, {
//       method: 'DELETE'
//     })
//     const newProducts = products.filter(product => product.id != id)
//     setProducts(newProducts) 
//   }

//     const classes = useStyles();
  
//     return (
//       <div className={classes.root}>
//         <ImageList className={classes.imageList} cols={2.5}>
//           {newProducts.map((item) => (
//             <ImageListItem key={item.img}>
//               <img src={item.img} alt={item.title} />
//               <ImageListItemBar
//                 title={item.title}
//                 classes={{
//                   root: classes.titleBar,
//                   title: classes.title,
//                 }}
//                 actionIcon={
//                   <DeleteIcon />
//                 }
//               />
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </div>
//     );
//   }

//   export default UserProducts