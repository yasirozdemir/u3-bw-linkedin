import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSection />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
  return (
    <BrowserRouter>
      <div className="App">
        <TopNavbar />
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
