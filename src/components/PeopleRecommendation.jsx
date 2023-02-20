import { Row, Col} from "react-bootstrap";
import ContactCard from "./ContactCard";


const PeopleRecommendation = ({title, profile}) => {
    return(
        <Row>
        <Col lg={4} md={5} className="right-navbar">
          <div className="right-navbar-main">
            <div className="nav-section">
              <h5 className="mb-3">{title}</h5>
              <ContactCard />
              <div className="show-more">
                <p>Show more</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    )
}

export default PeopleRecommendation