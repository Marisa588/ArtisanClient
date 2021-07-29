import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {FormGroup, FormControl, FormLabel, Input, Button, TextField } from '@material-ui/core'

const SubmissionForm = (props) => {
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [condition, setCondition] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const [fileData, setFileData] = useState("");

    
    // const uploadFile = (e) => {
        //     e.preventDefault();
        //     const data = new FormData();
        //     data.append("image", fileData);
        //     axios({
            //         method: "POST",
            //         url: "http://localhost:3001/albumcover",
            //         data: data,
            //     }).then((res) => {
                //         alert(res.data.message)
                //     })
                // }
                
    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append('artist', artist)
        data.append('album', album)
        data.append('description', description)
        data.append('price', price)
        data.append('condition', condition)
        data.append('imageUrl', fileData)
        fetch('http://localhost:3001/products/', {
            method: 'POST',
            body: data,
            headers: new Headers({
                'Content-Type': "multipart/form-data, false",
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((data) => {
                console.log(data)
                setArtist('')
                setAlbum('')
                setDescription('')
                setPrice('')
                setCondition('')
                setImageUrl('')
                // props.getProducts()
            })
    }
    
    const getFile = (e) => {
        setFileData(e.target.files[0])
    }
    // const handleSubmit = (e) => {
        //     e.preventDefault()
        
        //     fetch('http://localhost:3001/products/', {
    //         method: 'POST',
    //         body: JSON.stringify({ product: { artist: artist, album: album, description: description, price: price, condition: condition, imageUrl: imageUrl } }),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': `Bearer ${props.token}`
    //         })
    //     }).then((res) => res.json())
    //         .then((writeProduct) => {
    //             console.log(writeProduct)
    //             setArtist('')
    //             setAlbum('')
    //             setDescription('')
    //             setPrice('')
    //             setCondition('')
    //             setImageUrl('')
    //             // props.getProducts()
    //         })
    // }

    return (
        <div>

            {/* <form onSubmit={uploadFile}>
                <input
                    accept="image/*"
                    // className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={getFile}
                />
                <Button type="submit" color="primary">
                Upload
                </Button>
            </form> */}

            {/* <form onSubmit={uploadFile}>
                <input type="file" name="file" onChange={getFile} required />
                <input type="submit" name="upload" />
            </form> */}

            {/* <form onSubmit={handleSubmit}>
                <FormGroup>
                <FormLabel htmlFor="imageUrl">ImageUrl</FormLabel>
                <Input name="image" type="file" value={imageUrl} onChange={(e) => setCondition(e.target.files)} />
                
                
                <FormLabel htmlFor="imageUrl">Product Image</FormLabel>
                <Input name="image" type="file" />
                </FormGroup>

                <Button type='submit'>Submit</Button>
            </form> */}
            {/* <img src=""></img> */}
            <form >
                <FormGroup>
                    <FormLabel htmlFor="artist">Artist</FormLabel>
                    <Input name="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
                    <FormLabel htmlFor="album">Album</FormLabel>
                    <Input name="Album" value={album} onChange={(e) => setAlbum(e.target.value)} />
                    <FormLabel htmlFor="description">Description</FormLabel>
                    <Input name="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    <FormLabel htmlFor="price">Price</FormLabel>
                    <Input name="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
                    <FormLabel htmlFor="condition">Condition</FormLabel>
                    <Input name="Condition" value={condition} onChange={(e) => setCondition(e.target.value)} />
                    <input
                        accept="image/*"
                        id="contained-button-file"
                        type="file"
                        onChange={getFile}
                    />

                    {/* <FormLabel htmlFor="imageUrl">Product Image</FormLabel>
                    <Input name="image" type="file" /> */}
                </FormGroup>

                <Button onClick={handleSubmit} type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default SubmissionForm;
