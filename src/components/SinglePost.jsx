import { Col } from "react-bootstrap"

const SinglePost = ({ post: { text, user: { name, image, title } } }) => {
  return (
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
      </div>
    </Col>
  );
}

export default SinglePost;
