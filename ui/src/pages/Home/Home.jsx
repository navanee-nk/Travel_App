import HotelCard from "../../components/HotelCard/HotelCard";
import Navbar from "../../components/Navbar/Navbar";
import './Home.css'

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <main className="main">
        <HotelCard />
      </main>
    </>
  );
};

export default Home;
