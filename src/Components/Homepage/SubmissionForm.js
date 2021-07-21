import React, {useState, useEffect} from 'react'
import { FormGroup, FormControl, FormLabel, Input, Button, TextField } from '@material-ui/core'

const SubmissionForm = (props) => {
    const [artist, setArtist] = useState('')
    const [album, setAlbum] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [condition, setCondition] =useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        // Multer stuff goes here

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
                props.getProducts()
            })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
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
                </FormGroup>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}

export default SubmissionForm;
