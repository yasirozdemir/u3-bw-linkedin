import "./App.css";

import "./styles/RightNavbar.css";

import RightNavbar from "./components/RightNavbar";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import TopNavbar from "./components/TopNavbar";


function App() {
  return (
    <div className="App">

      <RightNavbar />

      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route path="/" element={<MainSection />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
