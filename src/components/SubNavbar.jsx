import { useSelector } from "react-redux";

const SubNavbar = () => {
  const specificPerson = useSelector((state) => state.specificUserId);

  return (
    <>
      <div className="d-flex align-items-center">
        <div>
          <img
            src={specificPerson?.image}
            alt=""
            className="w-100 rounded-circle"
            style={{
              minWidth: "32px",
              height: "32px",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
        <div className="ml-2">
          <p className="m-0" style={{ fontWeight: "600" }}>
            {specificPerson?.name}
            {specificPerson?.surname}
          </p>
          <small className="m-0">{specificPerson?.title}</small>
        </div>
      </div>
      <div className="d-flex align-items-center">
        <button className="mr-2">More</button>
        <button className="d-inline-flex align-items-center">
          <svg viewBox="0 0 16 16" width="16" height="16" focusable="false">
            <path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path>
          </svg>
          <span className="ml-2">Message</span>
        </button>
      </div>
    </>
  );
};

export default SubNavbar;
