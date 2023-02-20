
import { Button } from "react-bootstrap";

const ContactCard = () => {
    return(
        <div className="contact-card">
        <a href="" className="d-flex">
          <div>
            <img
              alt="profile"
              className="right-nav-profile-img"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            />
          </div>
          <div className="d-flex flex-column profile-details">
            <h6>Fernandoe Forest</h6>
            <p>
              Full Stack Developer at Epicode | Design | UX | Investment
            </p>
            <Button
              variant="outline-secondary"
              className="connect-button"
            >
              + Follow
            </Button>
          </div>
        </a>
      </div>
    )
}

export default ContactCard