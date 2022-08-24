// import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./pages/Home/Banner/Banner";
import Home from "./pages/Home/Home/Home";
import Navbar from "./shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
