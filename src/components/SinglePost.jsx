import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
// import { editPost } from "../redux/actions";
import { doEditPost } from "../redux/actions";
import { useParams } from "react-router-dom";
import { removePost } from "../redux/actions";
import PostPictureModal from "./PostPictureModal";

const SinglePost = ({ post }) => {
  const [showPostPictureModal, setShowPostPictureModal] = useState(false);

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

  const postInfo = useSelector((state) => state.specificPost);
  const isPost = post._id === postInfo._id;

  const params = useParams();
  const postId = params.postId;

  return (
    <Row>
      <Col className="feed-main">
        <div className="profile-card">
          <a href="" className="d-flex">
            <div>
              <img
                alt="profile"
                className="right-nav-profile-img"
                src={isPost ? postInfo?.image : post.user.image}
                onClick={() => {
                  setShowPostPictureModal(true);
                }}
              />
              {isPost && (
                <PostPictureModal
                  postId={postId}
                  showPostPictureModal={showPostPictureModal}
                  setShowPostPictureModal={setShowPostPictureModal}
                  postImage={post.user.image}
                />
              )}
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
