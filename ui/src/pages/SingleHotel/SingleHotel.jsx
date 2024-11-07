import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import HotelImage from "../../components/HotelImages/HotelImage";
import "./SingleHotel.css";
import HotelDetail from "../../components/HotelDetails/HotelDetail";
import FinalPrice from "../../components/FinalPrice/FinalPrice";

const SingleHotel = () => {
  const params = useParams();
  const { hotelId } = params;
  const [hotel, setHotel] = useState({});
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3500/api/hotels/${hotelId}`
        );
        console.log(data);
        setHotel(data);
      } catch (err) {
      } finally {
        setIsloading(false);
      }
    })();
  }, [hotelId]);

  if (isLoading) {
    return <h1 className="loading">Loading .....</h1>;
  }

  const { name, country } = hotel;
  return (
    <>
      <Navbar />
      <main className="single-hotel-page">
        <p className="hotel-name-add">
          {name} , {country}
        </p>
        <HotelImage hotel={hotel} />
        <div className="d-flex">
          <HotelDetail singleHotel={hotel} />
          <FinalPrice singleHotel={hotel} />
        </div>
      </main>
    </>
  );
};

export default SingleHotel;
