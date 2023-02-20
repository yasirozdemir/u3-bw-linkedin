import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "../styles/main-section.css"

const MainSection = () => {

    return(
        <Container>
            <Row>
                <Col className="main-section my-1">
                    <div className="main-div">
                        <div className="upper-part">
                            <img src="https://media.licdn.com/dms/image/C5616AQEMdMdUfoLALA/profile-displaybackgroundimage-shrink_350_1400/0/1642410753940?e=1682553600&v=beta&t=KCi12rGY4UskuB0E5Q0Anu9MXsFoZm0_cUUibM3-_bA" alt="" />
                        </div>
                        <div className="bottom-part">
                            <div className="photo-container">
                                <div className="display-flex">
                                    <img src="https://media.licdn.com/dms/image/C5103AQGmrLRIn_91KA/profile-displayphoto-shrink_400_400/0/1519565533648?e=1682553600&v=beta&t=YsMv7v7JcxiplahDtiFQadVyu-dymQTP6KToIvmfPCE" alt="" /></div>
                                    <div className="flex-1 flex-column"></div>
                            </div>
                            <div className="text-container">
                                <div className="main-info">
                                    <div className="left-panel">
                                        <h1>May Hemade</h1>
                                        <p>Teacher Assistant at Epicode</p>
                                        <p>Current location</p>
                                    </div>
                                    <div className="right-panel">
                                        <ul>
                                            <li>EPICODE</li>
                                            <li>Udacity</li>
                                        </ul>
                                    </div>
                                </div>
                                <p>500+ connections</p>
                                <p>mutual connections</p>
                            </div>
                            <div className="icons-container display-flex">
                                <div>
                                    <button>Send invitation <span><svg viewBox="0 0 16 16" fill="#70b5f9" width="16" height="16" focusable="false"><path d="M9 4a3 3 0 11-3-3 3 3 0 013 3zM6.75 8h-1.5A2.25 2.25 0 003 10.25V15h6v-4.75A2.25 2.25 0 006.75 8zM13 8V6h-1v2h-2v1h2v2h1V9h2V8z"></path></svg></span>
                                        
                                    </button>
                                </div>
                                <div>
                                    <button>Message <span><svg viewBox="0 0 16 16" fill="#70b5f9" width="16" height="16" focusable="false"><path d="M14 2L0 6.67l5 2.64 5.67-3.98L6.7 11l2.63 5L14 2z"></path></svg></span>
                                    
                                    </button>
                                </div>
                                <div>
                                    <button className="more-button">More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="minor-section highlights-section my-1">
                    <div>
                       <h2>Highlights</h2>
                       <div className="">
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, accusantium. Facilis, a corrupti. Reprehenderit nam, iure earum eius impedit error corporis, ad, eum officia cum autem nobis fugit maiores harum.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto, officia eaque quasi nisi</p>
                        </div> 
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="minor-section about-section my-1">
                    <div>
                        <h2>About</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex incidunt, asperiores odio quae itaque voluptatibus, eligendi perspiciatis sint unde provident similique nostrum aspernatur ipsum tempora eveniet laudantium! Rerum, perferendis vel!</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="minor-section activity-section my-1">
                    <div>
                        <h2>Activity</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                </Col>
            </Row><Row>
                <Col className="minor-section experience-section my-1">
                    <div>
                        <h2>Experience</h2>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MainSection