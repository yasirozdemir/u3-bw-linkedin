import { useState } from "react";
import { Button, Col, Row} from "react-bootstrap"
import PostInput from "./PostInput";

const SinglePost = ({ post: { text, user: { name, image, title } } }) => {
  
  const [method, setMethod] = useState("")

  const handleState = () => {
    setMethod("PUT")
    console.log("method", method)
  }

  return (
    <>
    <Col className="feed-main">
      <div className="profile-card">
        <a href="" className="d-flex">
          <div>
            <img alt="profile" className="right-nav-profile-img" src={image} />
          </div>
          <div className="d-flex flex-column profile-details">
            <h6>{name}</h6>
            <p className="profile-description">{title}</p>
          </div>
        </a>
      </div>
      <div className="post-list-post">
        <p>{text}</p>
        <Button onClick={handleState}>Edit</Button>
      </div>
      <div>
      <PostInput />
      </div>
    </Col>
    
    </>
  );
}

export default SinglePost;
