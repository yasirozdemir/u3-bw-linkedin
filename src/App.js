import "./App.css";
import "./styles/RightNavbar.css";
import "./styles/FeedList.css";
import RightNavbar from "./components/RightNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import TopNavbar from "./components/TopNavbar";
import { Container, Row, Col } from "react-bootstrap";
import Messaging from "./components/Messaging";
import CustomFooter from "./components/CustomFooter";
import FeedList from "./components/FeedList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavbar />
        <Container>
          <Row>
            <Col md={8}>
              <Routes>
                <Route path="/in/:userId" element={<MainSection />} />
                <Route path="/feed" element={<FeedList />} />
              </Routes>
            </Col>
            <Col md={4} className="sidebar">
              <RightNavbar />
            </Col>
          </Row>
        </Container>
        <Messaging />
        <CustomFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
