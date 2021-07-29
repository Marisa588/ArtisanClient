import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'
import EditIcon from '@material-ui/icons/Edit';
import MyProducts from './UserProducts'

function postId () {
    console.log(MyProducts)
}
  function UpdatedProduct (props) {
    const [editAlbum, setEditAlbum] = useState();
    const [editArtist, setEditArtist] = useState();
    const [editDescription, setEditDescription] = useState();
    const [editPrice, setEditPrice] = useState();
    const [editCondition, setEditCondition] = useState();
    



    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/products${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ products: {description: editDescription, artist: editArtist, album: editAlbum, price: editPrice, condition: editCondition }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => res.json())
            .then((updatePost) => {
                console.log(updatePost);
                setEditArtist('')
                setEditAlbum('')
                setEditDescription('')
                setEditPrice('')
                setEditCondition('')
                
            })
    }
    
    // function onChange(e) {
    //     console.log(`event.target.value: ${JSON.stringify(e.target.value)}`);
    // }

    return(
        <Modal>
            <ModalHeader>Update Post</ModalHeader>
            <ModalBody>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Edit Album:</Label>
                        <Input type="text" value={editAlbum} onChange={(e) => setEditAlbum(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Edit Artist:</Label>
                        <Input type="text" value={editArtist} onChange={(e) => setEditArtist(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>Edit Description:</Label>
                        <Input type="text" value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="price">Edit Price:</Label>
                        <Input type="price" name="Price" value={editPrice} onChange={(e) => setEditPrice(e.target.value)}> 
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="condition">Edit Condition:</Label>
                        <Input type="text" name="condition" value={editCondition} onChange={(e) => setEditCondition(e.target.value)}> 
                        </Input>
                    </FormGroup>
                    <Button type="submit">Updated Post!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}


export default UpdatedProduct;
    
    