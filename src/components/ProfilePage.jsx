import { Container, Row, Col } from "react-bootstrap";
import MainSection from "./MainSection";
import RightNavbar from "./RightNavbar";

const ProfilePage = () => {
  return (
    <Container className="p-0">
      <Row className="no-gutters">
        <Col xs={8}>
          <MainSection />
        </Col>
        <Col className="topHeaderFix">
          <RightNavbar />
        </Col>
      </Row>
    </Container>
  );
};

export default ProfilePage;
