const filterByBedsAndRooms = (hotels, Bedrooms, Beds, Bathrooms) => {
  if (Bathrooms === "Any" || Beds === "Any" || Bedrooms === "Any") {
    return hotels;
  }
  return hotels.filter(
    ({ numberOfBathrooms, numberOfBedrooms, numberOfBeds }) =>
      numberOfBathrooms >= Bathrooms &&
      numberOfBedrooms >= Bedrooms &&
      numberOfBeds >= Beds
  );
};

export default filterByBedsAndRooms;
