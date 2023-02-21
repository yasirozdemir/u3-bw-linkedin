/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../styles/main-section.css";
import { setSpecificUserExperience, setMyInfo, setUserList } from "../redux/actions";

const MainSection = () => {
  const userId = useParams().userId;
  const dispatch = useDispatch();
  const experienceData = useSelector(state => state.experienceData)
  const myInfoData = useSelector(state => state.me)
  const userListData = useSelector(state => state.users)
  const specificPerson = userListData.find((u) => { return (
    userId === u._id)
  })
  console.log(specificPerson)
  // console.log(experienceData)
  // console.log(myInfoData)
  console.log(userListData)

  useEffect(() => {
    dispatch(setSpecificUserExperience(userId))
  }, [userId])

  return (
    <Container className="topHeaderFix">
      <Row>
        <Col className="main-section my-1">
          <div className="main-div">
            <div className="upper-part">
              <img
                src="https://media.licdn.com/dms/image/C5616AQEMdMdUfoLALA/profile-displaybackgroundimage-shrink_350_1400/0/1642410753940?e=1682553600&v=beta&t=KCi12rGY4UskuB0E5Q0Anu9MXsFoZm0_cUUibM3-_bA"
                alt=""
              />
            </div>
            <div className="bottom-part">
              <div className="photo-container">
                <div className="display-flex">
                  <img
                    src={specificPerson?.image}
                    alt="Profile img"
                  />
                </div>
                <div className="flex-1 flex-column"></div>
              </div>
              <div className="text-container">
                <div className="main-info">
                  <div className="left-panel">
                    <h1>{specificPerson?.name}{specificPerson?.surname}</h1>
                    <p>{specificPerson?.title}</p>
                    <p>Area: {specificPerson?.area}</p>
                    <p>Username: {specificPerson?.username}</p>
                  </div>
                  <div className="right-panel">
                    <ul>
                      <li>EPICODE</li>
                      <li>Udacity</li>
                    </ul>
                  </div>
                </div>
                <p>500+ connections</p>
              </div>
              <div className="icons-container display-flex">
                <div>
                  <button className="send-invite">
                    Send invitation{" "}
                    <span>
                      <svg
                        viewBox="0 0 16 16"
                        fill="#6c757d"
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div>
                  <button className="message-button">
                    Message{" "}
                    <span>
                      <svg
                        viewBox="0 0 16 16"
                        fill="white"
  
                        width="16"
                        height="16"
                        focusable="false"
                      >
                        <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
                <div>
                  <button className="more-button">More</button>
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="minor-section highlights-section my-1">
          <div>
            <h2>Highlights</h2>
            <div className="">
              <p>
              {specificPerson?.bio}
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Architecto, officia eaque quasi nisi
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="minor-section about-section my-1">
          <div>
            <h2>About</h2>
                <>
                <p>
                  {specificPerson?.bio}
                </p>
                </>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="minor-section activity-section my-1">
          <div>
            <h2>Activity</h2>
            <p>{specificPerson?.createdAt}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="minor-section experience-section my-1">
          <div>
            <h2>Experience</h2>
            <br />
            { experienceData && experienceData.map((e) => {
              return(
                <>
                <h5>Role: {e.role}</h5>
                <h6>At {e.company}, located in {e.area}</h6>
                <p>In charge of: {e.description}</p>
                </>
              )
            } ) }
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainSection;
