import { useEffect, useState } from "react";
import { useCategory } from "../../context/CategoryContext";
import { useDate } from "../../context/DateContext";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import HotelCard from "../../components/HotelCard/HotelCard";

const SearchResult = () => {
  const { destination } = useDate();
  const [hotels, setHotels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { hotelCategory } = useCategory();

  useEffect(() => {
    (async () => {
      try {
        let URI = "http://localhost:3500/api/hotels";
        if (hotelCategory) {
          URI = `http://localhost:3500/api/hotels?category=${hotelCategory}`;
        }
        const res = await axios.get(URI);
        setHotels(res.data);
      } catch (err) {
        console.log(err);

        setHotels([]);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [hotelCategory, destination]);

  if (isLoading) {
    return <h3 className="loading">Loading Data ...</h3>;
  }

  const filteredResults = hotels.filter(
    ({ address, city, state }) =>
      destination.toLowerCase() === address.toLowerCase() ||
      destination.toLowerCase() === state.toLowerCase() ||
      destination.toLowerCase() === city.toLowerCase()
  );

  return (
    <>
      <Navbar />
      <section className="main d-flex align-center gap-large">
        {filteredResults.length > 0 ? (
          filteredResults.map((hotel) => (
            <HotelCard hotel={hotel} key={hotel._id} />
          ))
        ) : (
          <h3>Nothing found ...</h3>
        )}
      </section>
    </>
  );
};

export default SearchResult;
