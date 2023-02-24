import { useState } from "react";
import { Form } from "react-bootstrap";
import { MdOutlineSaveAlt } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../redux/actions";
import "../styles/PostInput.css";
import PostModal from "./PostModal";

function PostInput() {
  const dispatch = useDispatch();

  const [showPostModal, setShowPostModal] = useState(false);

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
    setPost({
      text: "",
    });
  };

  const handleFileChange = (event) => {
    const img = event.target.files[0];
    setImg(img);
    // console.log(img)
  };

  return (
    <>
      <PostModal
        post={post}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleFileChange={handleFileChange}
        myInfo={myInfo}
        showPostModal={showPostModal}
        setShowPostModal={setShowPostModal}
      />
      <div id="createPostWrapper">
        <div className="d-flex w-100">
          <div
            className="d-flex align-items-center justify-content-center mr-2"
            style={{ width: "48px", height: "48px", objectFit: "cover" }}
          >
            <img src={myInfo?.image} alt="" className="w-100 rounded-circle" />
          </div>
          <button
            onClick={() => {
              setShowPostModal(true);
            }}
          >
            Start a post
          </button>
        </div>
      </div>
    </>
  );
}

export default PostInput;
