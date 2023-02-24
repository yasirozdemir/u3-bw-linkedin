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
        <div className="startPost d-flex w-100">
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
        <div className="fourBtns mt-2">
          <button>
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#378FE9"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
            </svg>
            Photo
          </button>
          <button>
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#5F9B41"
            >
              <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
            </svg>
            Video
          </button>
          <button>
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#C37D16"
            >
              <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
            </svg>
            Event
          </button>
          <button>
            <svg
              className="mr-2"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#E16745"
            >
              <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
            </svg>
            Write Article
          </button>
        </div>
      </div>
    </>
  );
}

export default PostInput;
