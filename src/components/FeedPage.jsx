import { Container, Row, Col } from "react-bootstrap";
import FeedList from "./FeedList";
import LeftSidebar from "./LeftSidebar";
import PostInput from "./PostInput";
import RightNavbar from "./RightNavbar";

const FeedPage = () => {
  return (
    <Container>
      <Row
        className="no-gutters justify-content-center"
        style={{ marginInline: "-1rem" }}
      >
        <div className="topHeaderFix mr-4">
          <LeftSidebar />
        </div>
        <div className="topHeaderFix w-50">
          <PostInput />
          <FeedList />
        </div>
        <div className="w-25">
          <RightNavbar />
        </div>
      </Row>
    </Container>
  );
};

export default FeedPage;
