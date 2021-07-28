import React, {useState} from 'react';
import {Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody} from 'reactstrap'
import EditIcon from '@material-ui/icons/Edit';

const UpdatedProduct = (props) => {
    const [editDescription, setEditDescription] = useState(props.postToUpdate.description);
    const [editArtist, setEditArtist] = useState(props.postToUpdate.artist);
    const [editAlbum, setEditAlbum] = useState(props.postToUpdate.album);
    const [editPrice, setEditPrice] = useState(props.postToUpdate.price);
    const [editCondition, setEditCondition] = useState(props.postToUpdate.condition);
    const [editImageUrl, setEditImageUrl] = useState(props.postToUpdate.imageUrl);

    const postToUpdate = (event, post) => {
        event.preventDefault(
        fetch(`http://localhost:3000/log/${props.postToUpdate.id}`, {
            method: 'POST',
            body: JSON.stringify({log: {description: editDescription, artist: editArtist, album: editAlbum, price: editPrice, condition: editCondition, imageUrl: editImageUrl }}),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`
            })
        }) .then((res) => {
            props.fetchPost();
            props.updateOff();
        }))
    }
    function onChange(e) {
        console.log(`event.target.value: ${JSON.stringify(e.target.value)}`);
    }

    return(
        <Modal isOpen={true}>
            <ModalHeader>Update Post</ModalHeader>
            <ModalBody>
                <Form onSubmit={postToUpdate}>
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
                    <FormGroup>
                        <Label htmlFor="imageUrl">Update Image:</Label>
                        <Input type="text" name="imageUrl" value={editImageUrl} onChange={(e) => setEditImageUrl(e.target.value)}>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Update Post!</Button>
                </Form>
            </ModalBody>
        </Modal>
    )
}

export default UpdatedProduct;
    
    