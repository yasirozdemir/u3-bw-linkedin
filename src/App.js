import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import TopNavbar from "./components/TopNavbar";

function App() {
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
