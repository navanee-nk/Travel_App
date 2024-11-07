import { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import { useCategory } from "../../context/CategoryContext";
import { useFilters } from "../../context/FilterContext";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [numOfCategoriesToShow, setNumOfCategoriesToShow] = useState(0);
  const { setHotelCategory } = useCategory();
  const { dispatchFilter } = useFilters();

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:3500/api/category");
      const categoriesToShow = data.slice(
        numOfCategoriesToShow + 10 > data.length
          ? data.length - 10
          : numOfCategoriesToShow,
        numOfCategoriesToShow > data.length
          ? data.length
          : numOfCategoriesToShow + 10
      );
      setCategories(categoriesToShow);
    })();
  }, [numOfCategoriesToShow]);

  const onleftClickHandler = () => {
    setNumOfCategoriesToShow((prev) => prev - 10);
  };

  const onRightClickHandler = () => {
    setNumOfCategoriesToShow((prev) => prev + 10);
  };

  const onCategoryClickHandler = (category) => {
    console.log(category);
    setHotelCategory(category);
  };

  const onFilterClickHandler = () => {
    dispatchFilter({ type: "FILTER_MODAL_TOGGLE" });
  };

  return (
    <section className="categories d-flex align-center fixed gap-large cursor-pointer">
      {numOfCategoriesToShow >= 10 && (
        <button
          className="button btn-category btn-left cursor-pointer"
          onClick={onleftClickHandler}
        >
          <span className="material-symbols-outlined">chevron_left</span>
        </button>
      )}

      {categories.map(({ category, _id }) => (
        <span onClick={() => onCategoryClickHandler(category)} key={_id}>
          {category}
        </span>
      ))}
      {numOfCategoriesToShow <= categories.length && (
        <button
          className="button btn-category btn-right cursor-pointer"
          onClick={onRightClickHandler}
        >
          <span className="material-symbols-outlined">chevron_right</span>
        </button>
      )}
      <button
        className="button btn-filter d-flex align-center gap-small cursor-pointer fixed"
        onClick={onFilterClickHandler}
      >
        <span className="material-symbols-outlined">filter_alt</span>
        <span>Filter</span>
      </button>
    </section>
  );
};

export default Category;
