import { useEffect, useState } from "react";
import HotelCard from "../../components/HotelCard/HotelCard";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Category from "../../components/Category/Category";
import { useCategory } from "../../context/CategoryContext";
import { useDate } from "../../context/DateContext";
import SearchStayWithDate from "../../components/SearchStayWithDate/SearchStayWithDate";
import { useFilters } from "../../context/FilterContext";
import Filter from "../../components/Filters/Filter";
import filterByPrice from "../../utils/filterByPrice";
import filterByBedsAndRooms from "../../utils/filterByBedsAndRooms";
import filterByProperty from "../../utils/filterByProperty";
import filterByRatings from "../../utils/filterByRatings";
import filterByCancellation from "../../utils/filterByCancellation";

import AuthModal from "../../components/Auth/AuthModal";
import { useAuth } from "../../context/AuthContext";
import { useAlert } from "../../context/AlertContext";
import Alert from "../../components/Alert/Alert";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [testData, setTestData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(16);
  const [hasMore, setHasMore] = useState(true);
  const { hotelCategory } = useCategory();
  const { isSearchModal } = useDate();
  const { isFilerModalOpen } = useFilters();
  const {
    priceRange,
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds,
    propertyType,
    ratings,
    isCancellable,
    apply,
  } = useFilters();

  const { isAuthModalOpen } = useAuth();
  const { alert } = useAlert();
  console.log(alert);

  useEffect(() => {
    (async () => {
      try {
        let URI = "http://localhost:3500/api/hotels";
        if (hotelCategory) {
          URI = `http://localhost:3500/api/hotels?category=${hotelCategory}`;
        }
        const res = await axios.get(URI);
        setTestData(res.data);
        setHotels(res.data.slice(0, 16));
      } catch (err) {
        console.log(err);
        setTestData([]);
        setHotels([]);
      }
    })();
  }, [hotelCategory]);

  let filteredhotels = hotels;

  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(
          hotels.concat(testData.slice(currentIndex, currentIndex + 16))
        );
        setCurrentIndex((prev) => prev + 16);
      } else {
        setHotels([]);
      }
    }, 1000);
  };

  const filteredHotelsByPrice = filterByPrice(hotels, priceRange);

  const filteredHotelsByBedsandRooms = filterByBedsAndRooms(
    filteredHotelsByPrice,
    noOfBedrooms,
    noOfBeds,
    noOfBathrooms
  );

  const filteredHotelsByProperty = filterByProperty(
    filteredHotelsByBedsandRooms,
    propertyType
  );

  const filteredHotelsByRatings = filterByRatings(
    filteredHotelsByProperty,
    ratings
  );

  const filteredHotelsByCancellation = filterByCancellation(
    filteredHotelsByRatings,
    isCancellable
  );

  if (apply) {
    filteredhotels = filteredHotelsByCancellation;
  }

  return (
    <div className="relative">
      <Navbar></Navbar>
      <Category />
      {filteredhotels.length > 0 && !apply ? (
        <InfiniteScroll
          dataLength={filteredhotels.length}
          hasMore={hasMore}
          next={fetchMoreData}
          loader={
            filteredhotels.length > 0 && (
              <h3 className="alert-text">loading ...</h3>
            )
          }
          endMessage={<p className="alert-text">You have seen it all...</p>}
        >
          <main className="main d-flex align-center wrap large-gap">
            {filteredhotels.map((hotel) => (
              <HotelCard hotel={hotel} key={hotel._id} />
            ))}
          </main>
        </InfiniteScroll>
      ) : (
        <main className="main d-flex align-center wrap large-gap">
          {filteredhotels.map((hotel) => (
            <HotelCard hotel={hotel} key={hotel._id} />
          ))}
        </main>
      )}
      {isSearchModal && <SearchStayWithDate />}
      {isFilerModalOpen && <Filter />}
      {isAuthModalOpen && <AuthModal />}
      {alert.open && <Alert />}
    </div>
  );
};

export default Home;
