import { useSelector } from "react-redux";
import { BsThreeDots } from "react-icons/bs";
import { BiSearchAlt2 } from "react-icons/bi";
import { GoSettings } from "react-icons/go";
import { FaRegEdit, FaChevronUp, FaChevronDown } from "react-icons/fa";
import "../styles/messaging.css";
import { useState } from "react";

const Messaging = () => {
  const myInfo = useSelector((state) => state.me);
  const userList = useSelector((state) => state.users).slice(0, 12);
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div id="messageBox" className="fixed-bottom d-flex flex-column">
        <div className="d-flex justify-content-between w-100 ml-auto">
          <div className="d-flex align-items-center">
            <div id="msgImgWrapper">
              <img
                src={myInfo.image}
                style={{ width: "32px", height: "32px", borderRadius: "50%" }}
                alt=""
              />
            </div>
            <p className="ml-2 m-0">Messaging</p>
          </div>
          <div className="d-flex align-items-center">
            <button>
              <div className="msgIcons">
                <BsThreeDots />
              </div>
            </button>
            <button>
              <div className="msgIcons">
                <FaRegEdit />
              </div>
            </button>
            {showMore && (
              <button
                onClick={() => {
                  setShowMore(false);
                }}
              >
                <div className="msgIcons">
                  <FaChevronDown />
                </div>
              </button>
            )}
            {showMore || (
              <button
                onClick={() => {
                  setShowMore(true);
                }}
              >
                <div className="msgIcons">
                  <FaChevronUp />
                </div>
              </button>
            )}
          </div>
        </div>
        <div className="px-3 position-relative">
          <input
            type="text"
            placeholder="Search messages"
            className=" w-100 mt-2 px-4"
          />
          <BiSearchAlt2 id="msgSearchIcon" className="position-absolute" />
          <GoSettings
            id="msgSettingsIcon"
            className="position-absolute"
            style={{ transform: "rotate(90deg)" }}
          />
        </div>
        <div id="msgMore" className={showMore ? "show" : "hide"}>
          {userList &&
            userList.map((u) => {
              return (
                <div
                  key={u._id}
                  className="d-flex align-items-center pl-2 mt-3"
                >
                  <div className="userImgWrapper">
                    <img
                      src={u.image}
                      className="w-100 rounded-circle"
                      alt=""
                    />
                  </div>
                  <div
                    className="d-flex flex-column ml-2 pb-3"
                    style={{
                      borderBottom: "1px solid  rgba(0, 0, 0, 0.25)",
                      flexGrow: "1",
                    }}
                  >
                    <h6 className="mb-0" style={{ fontWeight: "600" }}>
                      {u.name} {u.surname}
                    </h6>
                    <h6 className="mb-0">{u.title}</h6>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Messaging;
