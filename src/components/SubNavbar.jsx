const SubNavbar = () => {
  return (
    <>
      <div className="d-flex align-items-center">
        <div style={{ width: "32px", height: "32px" }}>
          <img
            src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"
            alt=""
            className="w-100 rounded-circle"
          />
        </div>
        <div className="ml-2">
          <p className="m-0" style={{ fontWeight: "600" }}>
            Username
          </p>
          <small className="m-0">User Title</small>
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
