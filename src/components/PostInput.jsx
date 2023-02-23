import { useRef, useState } from "react";
import { Form } from "react-bootstrap";
import { MdOutlineSaveAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/actions";
import "../styles/PostInput.css";

function PostInput() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);

  const imitateInputFile = () => {
    inputRef.current.click();
  };

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
        <div className="d-flex w-100 mt-2">
          <div
            className="d-flex align-items-center justify-content-center mr-2"
            style={{ width: "48px", height: "48px", objectFit: "cover" }}
          >
            <img src={myInfo?.image} alt="" className="w-100 rounded-circle" />
          </div>
          <Form.Group style={{ flexGrow: "0.95" }}>
            <Form.Control
              type="text"
              value={post.text}
              placeholder="Start a post..."
              onChange={handleInputChange}
            />
          </Form.Group>
        </div>
        <div className="d-flex align-items-center justify-content-center">
          <button type="submit" className="mr-3">
            <MdOutlineSaveAlt
              className="mr-1"
              style={{ fontSize: "1.5rem", transform: "rotate(180deg)" }}
            />
            Share
          </button>
          <button onClick={imitateInputFile}>
            <svg className="mr-1" viewBox="0 0 24 24" width="24" height="24">
              <path d="M16 13a4 4 0 11-4-4 4 4 0 014 4zm6-4v11H2V9a3 3 0 013-3h1.3l1.2-3h9l1.2 3H19a3 3 0 013 3zm-5 4a5 5 0 10-5 5 5 5 0 005-5z"></path>
            </svg>
            Add Image
          </button>
          <Form.Group className="d-none">
            <Form.File
              ref={inputRef}
              id="imageFile"
              onChange={handleFileChange}
            />
          </Form.Group>
        </div>
      </Form>
    </div>
  );
}

export default PostInput;
