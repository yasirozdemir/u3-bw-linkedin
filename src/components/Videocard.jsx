
import { Button } from "react-bootstrap";

const Videocard = () => {
    return(
        <div className="video-card">
        <a href="" className="d-flex">
          <div>
            <img
              alt="video"
              className="video"
              src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            />
          </div>
          <div className="d-flex flex-column video-details">
            <h6>Learning LinkedIn Sales Navigator</h6>
            
          </div>
        </a>
      </div>
    )
}

export default Videocard