import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
// import { editPost } from "../redux/actions";
import { editPost } from "../redux/actions";

const SinglePost = ({ post }) => {
  const dispatch = useDispatch();

  const [editPost, setEditPost] = useState(post);
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditPost({ ...editPost, [name]: value });
    console.log(name, value);
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log("submit has been triggered")
  //   dispatch(editPost(post._id, editPost))
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editPost(post._id, editPost));
  };

  return (
    <Row>
      <Col className="feed-main">
        <div className="profile-card">
          <a href="" className="d-flex">
            <div>
              <img
                alt="profile"
                className="right-nav-profile-img"
                src={post.user.image}
              />
            </div>
            <div className="d-flex flex-column profile-details">
              <h6>{post.user.name}</h6>
              <p className="profile-description">{post.user.title}</p>
            </div>
          </a>
        </div>
        <div className="post-list-post">
          <p>{post.text}</p>
        </div>
        <Form className="post-form" onSubmit={handleSubmit}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>
              <h5>Edit post</h5>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="text"
              value={editPost.text}
              onChange={handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SinglePost;
