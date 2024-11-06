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

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [testData, setTestData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(16);
  const [hasMore, setHasMore] = useState(true);
  const { hotelCategory } = useCategory();
  const { isSearchModal } = useDate();

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

  return (
    <div className="relative">
      <Navbar></Navbar>
      <Category />
      {hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          hasMore={hasMore}
          next={fetchMoreData}
          loader={
            hotels.length > 0 && <h3 className="alert-text">loading ...</h3>
          }
          endMessage={<p className="alert-text">You have seen it all...</p>}
        >
          <main className="main d-flex align-center wrap large-gap">
            {hotels.map((hotel) => (
              <HotelCard hotel={hotel} key={hotel._id} />
            ))}
          </main>
        </InfiniteScroll>
      ) : (
        <></>
      )}
      {isSearchModal && <SearchStayWithDate />}
    </div>
  );
};

export default Home;
