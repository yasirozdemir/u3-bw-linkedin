import { Link } from "react-router-dom";
import { BsBookmarkFill } from "react-icons/bs";
import "../styles/LeftSidebar.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const LeftSidebar = () => {
  const myInfo = useSelector((state) => state.me);
  const [scrollValue, setScrollValue] = useState(0);
  const handleScroll = () => {
    let scrollValue = document.documentElement.scrollTop;
    setScrollValue(scrollValue);
  };
  useState(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const isFixed = scrollValue >= 370;

  return (
    <>
      <div id="leftSidebar">
        <div id="first" className="mb-2">
          <div id="bgImg"></div>
          <div className="px-2">
            <Link
              to={"/in/" + myInfo?._id}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              <div className="imgWrapper">
                <img
                  src={myInfo?.image}
                  alt=""
                  className="w-100 rounded-circle"
                />
              </div>
              <div className="text-center" style={{ marginBlockStart: "50px" }}>
                <p className="text-dark m-0" style={{ fontWeight: "600" }}>
                  {myInfo?.name} {myInfo?.surname}
                </p>
              </div>
            </Link>
            <p
              className="m-0 text-center text-muted"
              style={{ fontSize: "0.8rem" }}
            >
              {myInfo?.title}
            </p>
          </div>
          <div
            className="mt-2 py-2"
            style={{ borderBlock: "solid 1px rgba(60, 60, 60, 0.2)" }}
          >
            <div className="d-flex align-items-center py-1 px-2  hover hovAnim">
              <small className="text-muted" style={{ fontSize: "0.7rem" }}>
                Whos's viewed your profile
              </small>
              <span
                className="ml-auto"
                style={{
                  fontSize: "0.7rem",
                  color: "#0A66C2",
                  fontWeight: "700",
                }}
              >
                962
              </span>
            </div>
            <div className="d-flex align-items-center py-1 px-2 hover hovAnim">
              <small className="text-muted" style={{ fontSize: "0.7rem" }}>
                Impressions of your post
              </small>
              <span
                className="ml-auto"
                style={{
                  fontSize: "0.7rem",
                  color: "#0A66C2",
                  fontWeight: "700",
                }}
              >
                11K
              </span>
            </div>
          </div>
          <div
            className="d-flex flex-column px-2 py-2 hover hovAnim"
            style={{ borderBlockEnd: "solid 1px rgba(60, 60, 60, 0.2)" }}
          >
            <small className="text-muted" style={{ fontSize: "0.7rem" }}>
              Access exclusive tools & insights
            </small>
            <Link to="/" className="d-flex">
              <svg viewBox="0 0 24 24" width="18" height="18">
                <path
                  d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
                  fill="#f8c77e"
                ></path>
                <path
                  d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
                  fill="#e7a33e"
                ></path>
              </svg>
              <span
                className="text-dark ml-1"
                style={{
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  textDecoration: "underline",
                }}
              >
                Network Smarter, Try Premium Free
              </span>
            </Link>
          </div>
          <div className="d-flex  align-items-center p-2 hover hovAnim">
            <BsBookmarkFill />
            <span
              className="text-dark ml-1"
              style={{ fontSize: "0.75rem", fontWeight: "700" }}
            >
              My items
            </span>
          </div>
        </div>
        <div id="second" className={isFixed ? "fixed" : ""}>
          <div className="p-2 d-flex flex-column">
            <Link
              to="/"
              className="my-2"
              style={{
                fontWeight: "600",
                fontSize: "0.8rem",
                color: "#0A66C2",
              }}
            >
              Groups
            </Link>
            <div className="d-flex align-items-center">
              <Link
                to="/"
                style={{
                  fontWeight: "600",
                  fontSize: "0.8rem",
                  color: "#0A66C2",
                }}
              >
                Events
              </Link>
              <svg
                className="evPlsIcon ml-auto"
                viewBox="0 0 16 16"
                width="16"
                height="16"
              >
                <path d="M14 9H9v5H7V9H2V7h5V2h2v5h5z"></path>
              </svg>
            </div>
            <Link
              to="/"
              className="my-2"
              style={{
                fontWeight: "600",
                fontSize: "0.8rem",
                color: "#0A66C2",
              }}
            >
              Followed Hashtags
            </Link>
          </div>
          <div
            className="text-dark d-flex align-items-center justify-content-center py-2 hover hovAnim"
            style={{ borderBlockStart: "solid 1px rgba(60, 60, 60, 0.2)" }}
          >
            Discover More
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftSidebar;
