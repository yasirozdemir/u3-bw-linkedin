/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Col, Container, Row } from "react-bootstrap";
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
    setExperience(e);
    setShow(true);
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
    window.scrollTo(0, 0);
    document.title = `${specificPerson.name} ${specificPerson.surname} | LinkedIn`;
  }, [userId]);

  return (
    <Container className="topHeaderFix">
      <Row>
        <Col className="main-section">
          <div className="main-div">
            <div className="upper-part">
              <img
                src="https://live-production.wcms.abc-cdn.net.au/8393f16b3a14cd32d0d5d75c1c05d56b?impolicy=wcms_crop_resize&cropH=1080&cropW=1918&xPos=1&yPos=0&width=862&height=485"
                className="w-100"
                style={{ height: "220px", objectFit: "cover" }}
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
                    style={{ objectFit: "cover" }}
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
                    <p className="mb-0">{specificPerson?.title}</p>
                    <p className="greyClass"> {specificPerson?.area}</p>
                    {/* <p>Username: {specificPerson?.username}</p> */}
                  </div>
                  <div className="right-panel">
                    <ul>
                      <li>EPICODE</li>
                      <li>Udacity</li>
                    </ul>
                  </div>
                </div>
                <p className="connections">500+ connections</p>
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
                        <span className="ml-1">
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
              className="d-flex justify-content-between mb-3"
              style={{ alignItems: "center" }}
            >
              <h2 className="mb-0">Experience</h2>
              {userId === "63f3370b8381fc0013fffad1" && (
                <div onClick={setAddExperience} className="edit-button-exp">
                  <svg height="23" width="23">
                    <path
                      fill="grey"
                      d="M11 5.5v12M5.5 11h12"
                      stroke="grey"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>

            {experienceData &&
              experienceData
                .slice(0)
                .reverse()
                .map((e) => {
                  return (
                    <div className="exp-card" key={e._id}>
                      <div className="d-flex">
                        {e.image && (
                          <div className="exp-image">
                            <img src={e.image} alt=""></img>
                          </div>
                        )}
                        <div className="d-flex  flex-grow-1 justify-content-between ml-3">
                          <div className="d-flex flex-column">
                            <h5>{e.role}</h5>
                            <p className="company">
                              {e.company.toUpperCase()}{" "}
                            </p>
                            <p className="greyClass"> {e.area}</p>
                            <p className="greyClass">
                              {" "}
                              {e.startDate?.slice(0, 10)} -{" "}
                              {e.endDate?.slice(0, 10)}
                            </p>
                          </div>
                          {userId === "63f3370b8381fc0013fffad1" && (
                            <div className="d-flex gap">
                              <div
                                onClick={() => setEditExperience(e)}
                                className="edit-experience-button"
                              >
                                <div className="edit-button-exp">
                                  <svg height={23} width={23}>
                                    <path
                                      fill="grey"
                                      d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <div
                                onClick={() => setRemoveExperience(e)}
                                className="remove-experience-button ml-3"
                              >
                                <div className="edit-button-exp">
                                  <svg height={23} width={23}>
                                    <path
                                      fill="none"
                                      stroke="grey"
                                      strokeWidth="2"
                                      d="M19.5 12.5H3.5C3.22 12.5 3 12.28 3 12s.22-.5.5-.5h16c.28 0 .5.22.5.5s-.22.5-.5.5z"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="exp-description">{e.description}</p>
                    </div>
                  );
                })}
          </div>
        </Col>
        <div>
          <Modal
            id="popup"
            className="popup"
            show={show}
            size="lg"
            onHide={handleClose}
          >
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
