import { Col, Container, Row } from "react-bootstrap"
import "../styles/main-section.css"

const MainSection = () => {
    return(
        <Container>
            <Row>
                <Col className="main-section my-3">
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
                                            <li>current company</li>
                                            <li>education</li>
                                        </ul>
                                    </div>
                                </div>
                                <p>500+ connections</p>
                                <p>mutual connections</p>
                            </div>
                            <div className="icons-container display-flex">
                                <div>Icon 1
                                    <button>Send invitation</button>
                                </div>
                                <div>Icon 2
                                    <button>Message</button>
                                </div>
                                <div>Icon 3
                                    <button>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default MainSection