import "./App.css";
import "./styles/RightNavbar.css";
import RightNavbar from "./components/RightNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import TopNavbar from "./components/TopNavbar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Container>
          <TopNavbar />
          <Row>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<MainSection />} />
              </Routes>
            </Col>
            <Col md={4} className="sidebar">
              <RightNavbar />
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
