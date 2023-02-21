import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const FoundedUsers = ({ user }) => {
  return (
    <>
      <Link to={"/in/" + user._id}>
        <Row className="align-items-center my-1">
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
          <Col className="d-flex ml-2">
            <h6 className="mr-2" style={{ fontWeight: 600 }}>
              {user.name} {user.surname}
            </h6>
            <small className="text-muted">{user.title}</small>
          </Col>
        </Row>
      </Link>
    </>
  );
};

export default FoundedUsers;
