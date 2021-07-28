import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FormGroup, FormControl, FormLabel, Input, Button, TextField } from '@material-ui/core'

const SubmissionForm = (props) => {
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [condition, setCondition] =useState('')
    const [imageUrl, setImageUrl] =useState('')

    const [fileData, setFileData] = useState("");

    const getFile = (e) => {
        setFileData(e.target.files[0])
    };

    // const uploadFile = (e) => {
    //     e.preventDefault();
    //     const data = new FormData();
    //     data.append("file", fileData);
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

        fetch('http://localhost:3001/products/', {
            method: 'POST',
            body: JSON.stringify({ product: { artist: artist, album: album, description: description, price: price, condition: condition } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }).then((res) => res.json())
            .then((writeProduct) => {
                console.log(writeProduct)
                setArtist('')
                setAlbum('')
                setDescription('')
                setPrice('')
                setCondition('')
                // setImageUrl('')
                // props.getProducts()
            })
    }

    return (
        <div>
            {/* <form onSubmit={uploadFile}>
                <input type="file" name="file" onChange={getFile} required />
                <input type="submit" name="image" />
            </form> */}

            <form onSubmit={handleSubmit}>
                <FormGroup>
                    {/* <FormLabel htmlFor="imageUrl">ImageUrl</FormLabel>
                    <Input name="image" type="file" value={imageUrl} onChange={(e) => setCondition(e.target.value)} /> */}


                    <FormLabel htmlFor="imageUrl">Product Image</FormLabel>
                    <Input name="image" type="file" />
                </FormGroup>

                <Button type='submit'>Submit</Button>
            </form>
            <img src=""></img>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    {/* <FormLabel htmlFor="imageUrl">ImageUrl</FormLabel>
                    <Input name="image" type="file" value={imageUrl} onChange={(e) => setCondition(e.target.value)} /> */}
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

                    {/* <FormLabel htmlFor="imageUrl">Product Image</FormLabel>
                    <Input name="image" type="file" /> */}
                </FormGroup>
                
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default SubmissionForm;
