import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SingleHotel from "./pages/SingleHotel/SingleHotel";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels/:hotelId" element={<SingleHotel />} />
    </Routes>
  );
}

export default App;
