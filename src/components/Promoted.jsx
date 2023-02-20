import { Row, Col} from "react-bootstrap";
import Promotedcard from "./Promotedcard";


const Promoted = () => {
    return(
        <Row>
        <Col lg={4} md={5} className="right-navbar">
          <div className="right-navbar-main">
            <div className="nav-section">
              <h5 className="mb-1 promoted-header">Promoted</h5>
              <Promotedcard />
              <Promotedcard />
              
            </div>
          </div>
        </Col>
      </Row>
    )
}

export default Promoted