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

    const [ img, setImg ] = useState(null);

    const handleSubmit = async (event) => {
        const postSth = JSON.stringify(post);
        event.preventDefault();
        console.log("successfully submitted");
        const imgForm = new FormData();
        imgForm.append("post", img);
        imgForm.append("postData", postSth);       
        dispatch(addPost(imgForm));
        console.log(imgForm.get("postData"))       
    }
 

    const handleFileChange = (event) => {
        const img = event.target.files[0];
        setImg(img);
        // console.log(img)
    }

    return(
        <>
        <Form className="post-form" onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label><h5>Create a post</h5></Form.Label>
            <Form.Control as="textarea" rows={3} type="text"
              name="text"
              value={post.text}
              onChange={handleInputChange}
            />
            </Form.Group>
        <Button variant="primary" type="submit">Post picture</Button>
        <Form.Group>
            <Form.File
              id="imageFile"
              label="Choose an image file"
              onChange={handleFileChange}
            />
          </Form.Group>
        </Form>
        </>
    )
}

export default PostInput