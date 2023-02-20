import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import "../styles/main-section.css"

const MainSection = () => {

    // const URL = "https://striveschool-api.herokuapp.com/api/profile/";
    // const authorization = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmQ0MjgzODFmYzAwMTNmZmZhY2QiLCJpYXQiOjE2NzY4ODEyMTksImV4cCI6MTY3ODA5MDgxOX0.073k02BTB54KTV-Eiu1nUwQeX5SRIcl7r-Oo9NrEiXs";

    const [profiles, setProfiles] = useState()

    const fetchProfiles = async () => {
        try {
            let res = await fetch('https://striveschool-api.herokuapp.com/api/profile/',
            {headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2YzMmQ0MjgzODFmYzAwMTNmZmZhY2QiLCJpYXQiOjE2NzY4ODEyMTksImV4cCI6MTY3ODA5MDgxOX0.073k02BTB54KTV-Eiu1nUwQeX5SRIcl7r-Oo9NrEiXs'
            } })
            if (res.ok) {
                let profilesFromApi = await res.json()
                console.log(profilesFromApi)
                setProfiles(profilesFromApi)
            } else {
                console.log("Error! :(")
            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        fetchProfiles()
    }, [])

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