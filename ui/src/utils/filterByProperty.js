const filterByProperty = (hotels, property) => {
  return hotels.filter(({ propertyType }) => propertyType === property);
};

export default filterByProperty;
