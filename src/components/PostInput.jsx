import { useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux";
import { addPost } from "../redux/actions";


function PostInput () {
    const dispatch = useDispatch();

    const [post, setPost] = useState(
         {
            text: "",
        }
    );

    const handleInputChange = (event) => {
        const {name, value} = event.target;
        setPost({...post, [name]: value });
        // console.log("Hello:" , value)
    };

    const handleSubmit = async (event) => {
        console.log("successfully submitted");

        event.preventDefault();
        dispatch(addPost(post));        
    }

    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><h5>Create new post</h5></Form.Label>
            <Form.Control as="textarea" rows={3} type="text"
              name="text"
              value={post.text}
              onChange={handleInputChange}
            />
            </Form.Group>
        <Button variant="primary" type="submit">Submit</Button>
        </Form>
        </>
    )
}

export default PostInput