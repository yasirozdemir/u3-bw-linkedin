import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { editPost } from "../redux/actions";
import { doEditPost } from "../redux/actions";
import { useParams } from "react-router-dom";
import { removePost } from "../redux/actions";

const SinglePost = ({ post }) => {
  const dispatch = useDispatch();

  const [editPost, setEditPost] = useState(post);
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditPost({ ...editPost, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(doEditPost(post._id, editPost));
  };

  const setRemovePost = (e) => {
    //e.preventDefault(e);
    console.log("Delete post triggered");
    console.log(e);
    dispatch(removePost(post._id, postId));
  };

  const params = useParams();
  const postId = params.postId;

  return (
    <Row>
      <Col className="feed-main">
        <div className="profile-card">
          <Link to={"/in/" + post.user._id} className="d-flex">
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
          </Link>
        </div>
        <div className="post-list-post">
          <p>{post.text}</p>
        </div>
        {post.image && (
          <div
            style={{
              maxWidth: "300px",
              maxHeight: "200px",
              overflow: "hidden",
            }}
          >
            <img
              src={post.image}
              alt="stuff"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "cover",
              }}
            />
          </div>
        )}
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
          <br />
          <Button variant="danger" onClick={() => setRemovePost(postId)}>
            Remove
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

export default SinglePost;
