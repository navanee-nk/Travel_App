const filterByCancellation = (hotels, isCancellable) => {
  return hotels.filter((hotel) => hotel.isCancelable === isCancellable);
};

export default filterByCancellation;
