import HotelCard from "../../components/HotelCard/HotelCard";
import Navbar from "../../components/Navbar/Navbar";
import { useWishlist } from "../../context/WishListContext";

const WishList = () => {
  const { wishlist } = useWishlist();
  return (
    <>
      <Navbar />
      <h2 className="heading-2">Your Wishlist ...</h2>
      <section className="wishlist-page d-flex align-center wrap large-gap">
        {wishlist.length > 0 &&
          wishlist.map((hotel) => <HotelCard hotel={hotel} key={hotel._id} />)}
      </section>
    </>
  );
};

export default WishList;
