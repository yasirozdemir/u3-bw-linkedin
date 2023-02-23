import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts, setUrlParam } from "../redux/actions";
import PostInput from "./PostInput";
import SinglePost from "./SinglePost";
import LeftSidebar from "./LeftSidebar";

const FeedList = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts.posts);
  const sortedPosts = allPosts.slice(0, 30);
  // const currentUser = { id: 123 };
  const userPosts = allPosts.filter((post) => post.username === "dianabertego");

  const reversedPosts = allPosts.slice().reverse().slice(0, 30);
  console.log("reversedPosts:", reversedPosts);

  console.log("here are the sorted", userPosts);

  useEffect(() => {
    console.log("UEf triggered");
    dispatch(getAllPosts());
    dispatch(setUrlParam(null));
  }, []);

  return (
    <>
      <Container className="feed-list-main">
        <Row className="d-flex">
          <Col md={4}>
            <LeftSidebar />
            <PostInput />
          </Col>
          <Col className="d-flex flex-column" md={8}>
            {/* {userPosts.length > 0 &&
              userPosts.map((post) => {
                return <SinglePost key={post._id} post={post} />;
              })} */}
            {reversedPosts.length > 0 &&
              reversedPosts.map((post) => {
                return <SinglePost key={post._id} post={post} />;
              })}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FeedList;
