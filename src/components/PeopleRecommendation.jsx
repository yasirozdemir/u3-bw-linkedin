import { Row, Col } from "react-bootstrap";
import ContactCard from "./ContactCard";

const PeopleRecommendation = ({ title, profiles }) => {
  return (
    <Row>
      <Col className="right-navbar">
        <div className="right-navbar-main">
          <div className="nav-section">
            <h5 className="mb-3">{title}</h5>
            {profiles.map((profile) => {
              return <ContactCard key={profile._id} profile={profile} />;
            })}

            <div className="show-more">
              <p>Show more</p>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default PeopleRecommendation;
