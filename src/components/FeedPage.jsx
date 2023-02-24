import { Container, Row } from "react-bootstrap";
import CustomFooter2 from "./CustomFooter2";
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
        <div className="topHeaderFix" style={{ width: "48%" }}>
          <PostInput />
          <FeedList />
        </div>
        <div className="topHeaderFix">
          <RightNavbar />
          <CustomFooter2 />
        </div>
      </Row>
    </Container>
  );
};

export default FeedPage;
