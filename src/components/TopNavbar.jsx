import { Dropdown, Container, Row, Form } from "react-bootstrap";
import { ReactComponent as LinkedIn } from "../assets/icons/linkedinLogo.svg";
import { ReactComponent as Home } from "../assets/icons/home.svg";
import { ReactComponent as Network } from "../assets/icons/network.svg";
import { ReactComponent as Jobs } from "../assets/icons/jobs.svg";
import { ReactComponent as Messaging } from "../assets/icons/messaging.svg";
import { ReactComponent as Notifications } from "../assets/icons/notifications.svg";
import { ReactComponent as Work } from "../assets/icons/work.svg";
import { Link } from "react-router-dom";
import "../styles/TopNavbar.css";

const TopNavbar = () => {
  return (
    <>
      <header className="fixed-top">
        <Container>
          <Row>
            <LinkedIn style={{ height: "2.5rem", width: "2.5rem" }} />
            <Form className="d-flex align-items-center position-relative">
              <svg
                viewBox="0 0 16 16"
                width="16"
                height="16"
                focusable="false"
                className="position-absolute"
                style={{ left: "1rem" }}
              >
                <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z"></path>
              </svg>
              <Form.Control
                id="searchInput"
                type="search"
                placeholder="Search"
              />
            </Form>
            <div className="d-flex ml-auto">
              <Link to="/" className="navItems">
                <div className="d-flex flex-column align-items-center">
                  <Home />
                  <small>Home</small>
                </div>
              </Link>
              <Link to="/" className="navItems">
                <div className="d-flex flex-column align-items-center">
                  <Network />
                  <small>My Network</small>
                </div>
              </Link>
              <Link to="/" className="navItems">
                <div className="d-flex flex-column align-items-center">
                  <Jobs />
                  <small>Jobs</small>
                </div>
              </Link>
              <Link to="/" className="navItems">
                <div className="d-flex flex-column align-items-center">
                  <Messaging />
                  <small>Messaging</small>
                </div>
              </Link>
              <Link to="/" className="navItems">
                <div className="d-flex flex-column align-items-center">
                  <Notifications />
                  <small>Notifications</small>
                </div>
              </Link>
              <div className="d-flex flex-column align-items-center navItems">
                <Dropdown alignRight>
                  <Dropdown.Toggle>
                    <div id="profilePic">
                      <img
                        src="http://placekitten.com/200/300"
                        alt=""
                        className="w-100"
                      />
                    </div>
                    <small className="d-flex align-items-center">
                      Me
                      <svg
                        viewBox="0 0 16 16"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M8 11L3 6h10z"></path>
                      </svg>
                    </small>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="d-flex flex-column align-items-center navItems">
                <Work />
                <small className="d-flex align-items-center">
                  Work
                  <svg
                    viewBox="0 0 16 16"
                    width="16"
                    height="16"
                    focusable="false"
                  >
                    <path d="M8 11L3 6h10z"></path>
                  </svg>
                </small>
              </div>
              <Link to="/" className="navItems">
                <div className="d-flex flex-column align-items-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    width="24"
                    height="24"
                    focusable="false"
                  >
                    <circle
                      cx="12"
                      cy="4"
                      r="2"
                      style={{ isolation: "isolate" }}
                      opacity=".75"
                    ></circle>
                    <path d="M21 10H3a1 1 0 00-1 1v10a1 1 0 001 1h18a1 1 0 001-1V11a1 1 0 00-1-1zm-5 9H8v-2h8v2zm2-4H6v-2h12v2z"></path>
                    <g opacity=".6">
                      <path
                        d="M9.57 5.75l-2.41 4.83 1.68.84 2.28-4.57a3 3 0 01-1.55-1.1zM14.43 5.75a3 3 0 01-1.55 1.1l2.28 4.57 1.68-.84z"
                        style={{ isolation: "isolate" }}
                        opacity=".55"
                      ></path>
                    </g>
                  </svg>
                  <small>Post a job for free</small>
                </div>
              </Link>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};
export default TopNavbar;
