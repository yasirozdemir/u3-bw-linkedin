import { Row, Col, Button } from "react-bootstrap";

const Ad = () => {
  return (
    <Row>
      <Col lg={4} md={5} className="right-navbar">
        <div className="right-navbar-main">
          <div className="ad-section">
            <div className="mb-3">
              <h6 className="ad-info">Ad</h6>
              <h5 className="ad-header mb-3">
                Get the latest jobs and industry news
              </h5>
              <div className="d-flex justify-content-center add-img">
                <img
                  alt="profile"
                  className="right-nav-profile-img"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
                <img
                  alt="brand"
                  className="brand"
                  src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80"
                />
              </div>
              <h3 className="mt-3 brand-cta">
                Nikolai, explore relevant opportunities with Trendyol Group
              </h3>
            </div>
            <Button className="ad-button" variant="outline-primary">
              Follow
            </Button>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Ad;
