import { Container, Row, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/WorkModalRight.css";

const WorkModalRight = ({ show, setShow }) => {
  if (show) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <>
      <div
        id="modalBG"
        onClick={() => {
          setShow(false);
        }}
        className={show ? "fixed-top show" : "fixed-top hide"}
      ></div>
      <Container
        id="workModal"
        className={
          show
            ? "show ml-auto fixed-top mr-0 py-2 px-5"
            : "hide fixed-top py-2 mr-0 px-5"
        }
      >
        <Row className="align-items-center">
          <h5 className="mt-1" style={{ fontWeight: "600" }}>
            Work
          </h5>
          <button
            onClick={() => {
              setShow(false);
            }}
            className="ml-auto"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" focusable="false">
              <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
            </svg>
          </button>
        </Row>
        <Row>
          <Card className="w-100">
            <Card.Header as="h6" style={{ backgroundColor: "transparent" }}>
              Visit More LinkedIn Products
            </Card.Header>
            {/* <div>
              <Col>
                <button className="d-flex flex-column align-items-center">
                  1 <span>Learning</span>
                </button>
              </Col>
              <Col>
                <button>
                  2 <span>Insights</span>
                </button>
              </Col>
              <Col>
                <button>
                  3 <span>Post a job</span>
                </button>
              </Col>
              <Col>
                <button>
                  4 <span>Advertise</span>
                </button>
              </Col>
              <Col>
                <button>
                  5 <span>Find Leads</span>
                </button>
              </Col>
              <Col>
                <button>
                  6 <span>Groups</span>
                </button>
              </Col>
              <Col>
                <button>
                  7<span>Services Marketplace</span>
                </button>
              </Col>
            </div> */}
          </Card>
        </Row>
        <Row className="mt-1">
          <Card className="w-100">
            <Card.Header as="h6" style={{ backgroundColor: "transparent" }}>
              Linked In Business Services
            </Card.Header>
            <Card.Body className="pt-2">
              <Link to="/">
                <p className="m-0 text-dark">Talent Solutions</p>
                <small className="text-muted">
                  Find, attract and recruit talent
                </small>
              </Link>
              <Link to="/">
                <p className="m-0 text-dark">Sales Solutions</p>
                <small className="text-muted">Unlock sales opportunities</small>
              </Link>
              <Link to="/">
                <p className="m-0 text-dark">Post a job for free</p>
                <small className="text-muted">
                  Get your job in front of quality candidates
                </small>
              </Link>
              <Link to="/">
                <p className="m-0 text-dark">Marketing Solutions</p>
                <small className="text-muted">
                  Acquire customers and grow your business
                </small>
              </Link>
              <Link to="/">
                <p className="m-0 text-dark">Learning Solutions</p>
                <small className="text-muted">
                  Develop talent across your organization
                </small>
              </Link>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "transparent" }}>
              <Link to="/" className="text-dark">
                Create a Company Page
              </Link>
            </Card.Footer>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default WorkModalRight;
