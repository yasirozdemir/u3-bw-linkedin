import { Button } from "react-bootstrap";

const Promotedcard = () => {
  return (
    <div className="promo-card">
      <a href="" className="d-flex align-items-center">
        <div>
          <img
            alt="profile"
            className="promo-img"
            src="https://images.unsplash.com/photo-1496200186974-4293800e2c20?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80"
          />
        </div>
        <div className="d-flex flex-column promo-details">
          <h6>Zeit für einen neuen Job?</h6>
          <p>
            Hire the world's top designers on-demand. Start your no-risk trial.
          </p>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="30"
          color="black"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"
          />
        </svg>
      </a>
    </div>
  );
};

export default Promotedcard;
