import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "../store/itemsSlice";

const Sort = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.items);
  const handleSortClick = (event) => {
    const value = event.target.value;
    if (value === "recommended") {
      fetch("https://ecommerce-mern-q1bp.onrender.com/items")
        .then((response) => response.json())
        .then(({ items }) => {
          dispatch(itemsActions.addInitialItems(items[0]));
        });
    } else if (value === "new") {
      const newSorted = [...items].sort(
        (a, b) => a.rating.count - b.rating.count
      );
      dispatch(itemsActions.addInitialItems(newSorted));
    } else if (value === "customerRating") {
      const ratingSorted = [...items].sort(
        (a, b) => b.rating.stars - a.rating.stars
      );
      dispatch(itemsActions.addInitialItems(ratingSorted));
    } else if (value === "discount") {
      const discountSorted = [...items].sort(
        (a, b) => b.discount_percentage - a.discount_percentage
      );
      dispatch(itemsActions.addInitialItems(discountSorted));
    } else if (value === "high") {
      const highSorted = [...items].sort(
        (a, b) => b.current_price - a.current_price
      );
      dispatch(itemsActions.addInitialItems(highSorted));
    } else if (value === "low") {
      console.log("low");
      const sorted = [...items].sort(
        (a, b) => a.current_price - b.current_price
      );
      dispatch(itemsActions.addInitialItems(sorted));
    }
  };
  return (
    <div class="sort_options">
      <div class="sort_left">Sort by:</div>
      <select
        class="sort_options_select"
        fdprocessedid="oxo1p"
        onChange={handleSortClick}
      >
        <option value="recommended" selected>
          Recommended
        </option>
        <option value="new">What's New</option>
        <option value="customerRating">Customer Rating</option>
        <option value="discount">Better Discount</option>
        <option value="high">Price: High to Low</option>
        <option value="low">Price: Low to High</option>
      </select>
    </div>
  );
};

export default Sort;
