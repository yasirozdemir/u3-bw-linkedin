import { useState } from "react";
import { Col, Row, Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { editPost } from "../redux/actions";
import { dislikePost, doEditPost, likePost } from "../redux/actions";
import { useParams } from "react-router-dom";
import { removePost } from "../redux/actions";
import "../styles/SinglePost.css";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

const SinglePost = ({ post }) => {
  const dispatch = useDispatch();

  const likedPosts = useSelector((state) => state.likedPosts);
  const isLiked = likedPosts.some((p) => post?._id === p._id);

  const whenShared = () => {
    const today = new Date();
    const postedAt = new Date(post?.createdAt);

    const howManyMins = differenceInMinutes(today, postedAt);
    const howManyHours = differenceInHours(today, postedAt);
    const howManyDays = differenceInDays(today, postedAt);

    if (howManyMins >= 60) {
      if (howManyHours >= 24) return `${howManyDays}d`;
      else return `${howManyHours}h`;
    } else return `${howManyMins}m`;
  };

  const myInfo = useSelector((state) => state.me);
  const [wannaEdit, setWannaEdit] = useState(false);
  const isMe = myInfo?._id === post?.user._id;

  const [editPost, setEditPost] = useState(post);
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditPost({ ...editPost, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(doEditPost(post?._id, editPost));
  };

  const setRemovePost = (e) => {
    //e.preventDefault(e);
    console.log("Delete post triggered");
    console.log(e);
    dispatch(removePost(post?._id, postId));
  };

  const params = useParams();
  const postId = params.postId;

  return (
    <Row className="postRow">
      <Col className="feed-main">
        <div className="profile-card d-flex align-items-center">
          <Link to={"/in/" + post?.user._id} className="d-flex">
            <div>
              <img
                alt="profile"
                className="right-nav-profile-img"
                src={post?.user.image}
              />
            </div>
            <div className="d-flex flex-column profile-details">
              <h6 className="m-0">
                {post?.user.name} {post?.user.surname}
              </h6>

              <p className="m-0 profile-description">{post?.user.title}</p>
              <small
                className="text-muted  d-flex align-items-center"
                style={{ fontSize: "0.7rem" }}
              >
                <span className="mr-1">{whenShared()}</span> •
                <svg
                  className="ml-1"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  width="12"
                  height="12"
                >
                  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
                </svg>
              </small>
            </div>
          </Link>
          {isMe ? (
            <div className="ml-auto postEditDelete">
              <button
                onClick={() => {
                  setWannaEdit(!wannaEdit);
                }}
              >
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"></path>
                </svg>
              </button>
              <button
                onClick={() => {
                  setRemovePost(postId);
                }}
              >
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M20 4v1H4V4a1 1 0 011-1h4a1 1 0 011-1h4a1 1 0 011 1h4a1 1 0 011 1zM5 6h14v13a3 3 0 01-3 3H8a3 3 0 01-3-3zm9 12h1V8h-1zm-5 0h1V8H9z"></path>
                </svg>
              </button>
            </div>
          ) : (
            <button className="followBtn ml-auto d-flex align-items-center">
              <svg
                className="mr-2"
                viewBox="0 0 16 16"
                width="16px"
                height="16px"
              >
                <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
              </svg>
              Follow
            </button>
          )}
        </div>
        <div className="post-list-post mt-3">
          <p>{post?.text}</p>
        </div>
        {isMe && wannaEdit && (
          <Form
            className="post-form d-flex flex-column my-4"
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <Form.Label>
                <h6 className="m-0 text-muted">Edit post</h6>
              </Form.Label>
              <div className="d-flex">
                <Form.Control
                  type="text"
                  name="text"
                  value={editPost.text}
                  className="w-75"
                  onChange={handleInputChange}
                />
                <Button
                  className="mx-auto mb-3"
                  variant="primary"
                  type="submit"
                >
                  Update
                </Button>
              </div>
            </Form.Group>
          </Form>
        )}
        {post?.image && (
          <div className="postImgWrapper">
            <img src={post?.image} alt="stuff" />
          </div>
        )}
        <Row className="postBtnWrapper">
          {post && isLiked ? (
            <>
              <button
                onClick={() => {
                  dispatch(dislikePost(post?._id));
                }}
                style={{ color: "#0A66C2" }}
              >
                <img
                  src="https://static.licdn.com/sc/h/5zhd32fqi5pxwzsz78iui643e"
                  alt=""
                ></img>
                <span className="ml-1">Like</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => {
                dispatch(likePost(post));
              }}
            >
              <svg viewBox="0 0 24 24" width="24" height="24">
                <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z"></path>
              </svg>
              <span className="ml-1">Like</span>
            </button>
          )}
          <button>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z"></path>
            </svg>
            <span className="ml-1">Comment</span>
          </button>
          <button>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M13.96 5H6c-.55 0-1 .45-1 1v10H3V6c0-1.66 1.34-3 3-3h7.96L12 0h2.37L17 4l-2.63 4H12l1.96-3zm5.54 3H19v10c0 .55-.45 1-1 1h-7.96L12 16H9.63L7 20l2.63 4H12l-1.96-3H18c1.66 0 3-1.34 3-3V8h-1.5z"></path>
            </svg>
            <span className="ml-1">Repost</span>
          </button>
          <button>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z"></path>
            </svg>
            <span className="ml-1">Send</span>
          </button>
        </Row>
      </Col>
    </Row>
  );
};

export default SinglePost;
