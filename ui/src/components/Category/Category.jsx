import { useEffect, useState } from "react";
import axios from "axios";
import "./Category.css";
import { useCategory } from "../../context/CategoryContext";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [numOfCategoriesToShow, setNumOfCategoriesToShow] = useState(0);
  const { setHotelCategory } = useCategory();

  const onleftClickHandler = () => {
    setNumOfCategoriesToShow((prev) => prev - 10);
  };

  const onRightClickHandler = () => {
    setNumOfCategoriesToShow((prev) => prev + 10);
  };  
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

  const onCategoryClickHandler = (category) => {
    console.log(category)
    setHotelCategory(category);
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
    </section>
  );
};

export default Category;
