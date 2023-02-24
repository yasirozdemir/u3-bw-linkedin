import "./App.css";
import "./styles/RightNavbar.css";
import "./styles/FeedList.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import TopNavbar from "./components/TopNavbar";
import Messaging from "./components/Messaging";
import CustomFooter from "./components/CustomFooter";
import ProfilePage from "./components/ProfilePage";
import FeedPage from "./components/FeedPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Navigate to="/feed" />} />
          <Route path="/in/:userId" element={<ProfilePage />} />
          <Route path="/feed" element={<FeedPage />} />
        </Routes>
        <Messaging />
        <CustomFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
