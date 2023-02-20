import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RightNavbar from "./components/RightNavbar";
import MainSection from "./components/MainSection";
import TopNavbar from "./components/TopNavbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopNavbar />
        <RightNavbar />
        <Routes>
          <Route path="/" element={<MainSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
