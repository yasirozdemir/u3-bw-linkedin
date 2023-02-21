import { Button } from "react-bootstrap";

const ContactCard = ({profile}) => {
  return (
    <div className="contact-card">
      <a href="" className="d-flex">
        <div>
          <img
            alt="profile"
            className="right-nav-profile-img"
            src={profile.image}
          />
        </div>
        <div className="d-flex flex-column profile-details">
          <h6>{profile.name}</h6>
          {profile.bio ? (<p>{profile.bio}</p>) : (<p>no bio available 😢</p>)}
          
          <Button variant="outline-secondary" className="connect-button">
            + Follow
          </Button>
        </div>
      </a>
    </div>
  );
};

export default ContactCard;
