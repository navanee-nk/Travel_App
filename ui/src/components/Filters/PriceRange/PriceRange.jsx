import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useFilters } from "../../../context/FilterContext";

function valuetext(value) {
  return `${value}°C`;
}
const minDifference = 500;

export default function PriceRange() {
  const { priceRange, dispatchFilter } = useFilters();
  
  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) return;
    
    if (activeThumb === 0) {
      dispatchFilter({
        type: "MINIMUM_PRICE",
        payload: { newValue, priceRange, minDifference },
      });
    } else {
      dispatchFilter({
        type: "MAXIMUM_PRICE",
        payload: { newValue, priceRange, minDifference },
      });
    }
  };

  return (
    <div className="filter-container">
      <span className="filter-label">Price Range</span>
      <Box sx={{ width: "90%" }}>
        <Slider
          sx={{ color: "#ff6525" }}
          getAriaLabel={() => "Minimum Difference"}
          value={priceRange}
          onChange={handleChange}
          valueLabelDisplay="on"
          getAriaValueText={valuetext}
          min={300}
          max={25000}
          disableSwap
        />
      </Box>
    </div>
  );
}
