import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDate } from "../context/DateContext";

const DateSelector = ({ checkinType }) => {
  const { checkin, checkout, dateDispatch } = useDate();
  const onDateChangeHandler = (date) => {
    const type = checkinType === "in" ? "CHECK_IN" : "CHECK_OUT";
    dateDispatch({ type, payload: date });
  };
  const onDateFocus = () => {
    dateDispatch({ type: "OTHER_FOCUS" });
  };
  return (
    <DatePicker
      className="search-dest input"
      selected={checkinType === "in" ? checkin : checkout}
      onChange={(date) => onDateChangeHandler(date)}
      onFocus={onDateFocus}
      closeOnScroll={true}
      dateFormat="dd/MM/yyyy"
      placeholderText="Add Dates"
    ></DatePicker>
  );
};

export default DateSelector;
