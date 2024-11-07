const filterByRatings = (hotels, ratings) => {
  return hotels.filter((hotel) => hotel.rating >= ratings);
};

export default filterByRatings;
