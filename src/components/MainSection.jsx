/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Col, Container, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "../styles/main-section.css";
import "../styles/PPModal.css";
import { parseISO, format } from "date-fns";

import {
  removeExperience,
  setSpecificUserExperience,
  setSpecificUser,
  setUrlParam,
} from "../redux/actions";
import ExperienceInput from "./ExperienceInput";
import Modal from "react-bootstrap/Modal";
import PostInput from "./PostInput";
import PPModal from "./PPModal";

const MainSection = () => {
  const [show, setShow] = useState(false);
  const [showPPModal, setShowPPModal] = useState(false);
  const [method, setMethod] = useState("");
  const [heading, setHeading] = useState("");
  const [experience, setExperience] = useState("");

  const handleClose = () => setShow(false);

  const setAddExperience = () => {
    setMethod("POST");
    setHeading("Add an Experience");
    setShow(true);
    setExperience("");
  };

  const setEditExperience = (e) => {
    setMethod("PUT");
    setHeading("Edit this Experience");
    setShow(true);
    setExperience(e);
    console.log("aldkfjlakjdf", e);
  };

  const setRemoveExperience = (e) => {
    // e.preventDefault();
    console.log("Delete triggered");
    console.log(e);
    dispatch(removeExperience(userId, e._id));
  };

  const params = useParams();
  const userId = params.userId;
  const dispatch = useDispatch();
  const experienceData = useSelector((state) => state.experienceData);

  // const myInfoData = useSelector(state => state.me)
  const userListData = useSelector((state) => state.users);
  const specificPerson = userListData.find((u) => {
    return userId === u._id;
  });

  const myInfo = useSelector((state) => state.me);
  const isMe = specificPerson._id === myInfo._id;

  const handlePopupClose = () => {
    setShow(false);
  };

  useEffect(() => {
    dispatch(setSpecificUserExperience(userId));
    dispatch(setSpecificUser(specificPerson));
    dispatch(setUrlParam(params));
  }, [userId]);

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
                    src={isMe ? myInfo?.image : specificPerson?.image}
                    alt="Profile img"
                    onClick={() => {
                      setShowPPModal(true);
                    }}
                  />
                  {isMe && (
                    <PPModal
                      userId={userId}
                      showPPModal={showPPModal}
                      setShowPPModal={setShowPPModal}
                      userImage={specificPerson?.image}
                    />
                  )}
                </div>
                <div className="flex-1 flex-column"></div>
              </div>
              <div className="text-container">
                <div className="main-info">
                  <div className="left-panel">
                    <h1>
                      {specificPerson?.name} {specificPerson?.surname}
                    </h1>
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
                {isMe ? (
                  <>
                    <button className="meBtns third">
                      Add profile section
                    </button>
                    <button className="meBtns second">Open to</button>
                  </>
                ) : (
                  <>
                    <div>
                      <button className="send-invite">
                        Send invitation
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
                        Message
                        <span className="ml-2">
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
                  </>
                )}
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
              <p>{specificPerson?.bio}</p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="minor-section about-section my-1">
          <div>
            <h2>About</h2>
            <>
              <p>{specificPerson?.bio}</p>
            </>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="minor-section activity-section my-1">
          <div>
            <h2>Activity</h2>
            <p>
              Created on:{" "}
              {format(parseISO(specificPerson?.createdAt), "EEEE, MMMM do")}{" "}
              <br /> Updated on:{" "}
              {format(parseISO(specificPerson.updatedAt), "EEEE, MMMM do")}
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="minor-section experience-section my-1">
          <div>
            <div
              className="d-flex justify-content-between"
              style={{ alignItems: "center" }}
            >
              <h2>Experience</h2>
              {userId === "63f3370b8381fc0013fffad1" && (
                <Button
                  className="add-experience-button"
                  variant="outline-primary"
                  onClick={setAddExperience}
                >
                  +
                </Button>
              )}
            </div>
            <br />
            {experienceData &&
              experienceData.map((e) => {
                return (
                  <div key={e._id}>
                    <h5>Role: {e.role}</h5>
                    <p>
                      At {e.company}, located in {e.area}
                      <br />
                      <span>In charge of: {e.description}</span>
                    </p>
                    {userId === "63f3370b8381fc0013fffad1" && (
                      <div className="d-flex gap">
                        <p
                          onClick={() => setEditExperience(e)}
                          className="edit-experience-button"
                        >
                          edit
                        </p>
                        <p
                          onClick={() => setRemoveExperience(e)}
                          className="remove-experience-button ml-3"
                        >
                          remove
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
          </div>
        </Col>
        <div>
          <Modal id="popup" className="popup" show={show} onHide={handleClose}>
            <ExperienceInput
              userId={userId}
              method={method}
              heading={heading}
              onClose={handlePopupClose}
              experience={experience}
            />
          </Modal>
        </div>
      </Row>
      <br />
      {/* <Row>
      <PostInput />
      </Row> */}
    </Container>
  );
};

export default MainSection;
