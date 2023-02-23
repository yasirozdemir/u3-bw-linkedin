import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/actions";
import "../styles/PostInput.css";

function PostInput() {
  const dispatch = useDispatch();

  const myInfo = useSelector((state) => state.me);
  const [post, setPost] = useState({
    text: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPost({ ...post, [name]: value });
    // console.log("Hello:" , value)
  };

  const [img, setImg] = useState(null);

  const handleSubmit = async (event) => {
    const postSth = JSON.stringify(post);
    event.preventDefault();
    console.log("successfully submitted");
    const imgForm = new FormData();
    imgForm.append("post", img);
    imgForm.append("postData", postSth);
    dispatch(addPost(imgForm));
    console.log(imgForm.get("postData"));
  };

  const handleFileChange = (event) => {
    const img = event.target.files[0];
    setImg(img);
    // console.log(img)
  };

  return (
    <div id="createPostWrapper">
      <Form className="post-form" onSubmit={handleSubmit}>
        <div className="d-flex w-100 my-2">
          <div
            className="d-flex align-items-center justify-content-center mr-2"
            style={{ width: "48px", height: "48px", objectFit: "cover" }}
          >
            <img src={myInfo?.image} alt="" className="w-100 rounded-circle" />
          </div>
          <Form.Group style={{ flexGrow: "1" }}>
            <Form.Control
              type="text"
              value={post.text}
              placeholder="Start a post..."
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
        <div>
          <button type="submit">Share</button>
          <button>Image</button>
          <Form.Group>
            <Form.File id="imageFile" onChange={handleFileChange} />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}

export default PostInput;
