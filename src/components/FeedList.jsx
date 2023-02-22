import { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllPosts } from "../redux/actions";
import SinglePost from "./SinglePost";

const FeedList = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts.posts);
  const sortedPosts = allPosts.slice(0, 30);
  console.log("here are the sorted", sortedPosts);

  useEffect(() => {
    console.log("UEf triggered");
    dispatch(getAllPosts());
  }, []);

  return (
    <>
      <Container className="feed-list-main">
        <Row className="d-flex">
          <Col md={3}>
            <div>Sidebar</div>
          </Col>
          <Col className="d-flex flex-column" md={9}>
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
