import "./App.css";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import SingleHotel from "./pages/SingleHotel/SingleHotel";
import SearchResult from "./pages/SearchResult/SearchResult";
import WishList from "./pages/WishList/Wishlist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hotels/:hotelId" element={<SingleHotel />} />
      <Route path="/hotel/:destination" element={<SearchResult />} />
      <Route path="/wishlist" element={<WishList />} />
    </Routes>
  );
}

export default App;
