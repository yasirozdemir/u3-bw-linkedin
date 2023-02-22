import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import PostInput from "./PostInput";
import SinglePost from "./SinglePost";
import LeftSidebar from "./LeftSidebar";

const FeedList = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts.posts);
  const sortedPosts = allPosts.slice(0, 30);
  // const currentUser = { id: 123 };
  const userPosts = allPosts.filter((post) => post.username === "dianabertego");

  console.log("here are the sorted", userPosts);

  useEffect(() => {
    console.log("UEf triggered");
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      <Container className="feed-list-main">
        <Row className="d-flex">
          <Col md={3}>
            <LeftSidebar />
            <PostInput />
          </Col>
          <Col className="d-flex flex-column" md={9}>
            {userPosts.length > 0 &&
              userPosts.map((post) => {
                return <SinglePost key={post._id} post={post} />;
              })}
            {allPosts.length > 0 &&
              sortedPosts.map((post) => {
                return <SinglePost key={post._id} post={post} />;
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FeedList;
