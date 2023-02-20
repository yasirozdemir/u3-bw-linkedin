import { Col, Row } from "react-bootstrap";

const FoundedUsers = ({ user }) => {
  return (
    <>
      <Row className="align-items-center mb-2">
        <Col xs={2}>
          <div
            className="d-flex justify-content-center"
            style={{
              width: "36px",
              height: "36px",
              overflow: "hidden",
            }}
          >
            <img
              src={user.image && user.image}
              alt="❌"
              className="w-100 rounded-circle"
            />
          </div>
        </Col>
        <Col className="d-flex">
          <h6 className="mr-2">
            {user.name} {user.surname}
          </h6>
          <small className="text-muted">{user.title}</small>
        </Col>
      </Row>
    </>
  );
};

export default FoundedUsers;
