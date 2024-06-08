// Importing useDispatch from react-redux
import { useDispatch } from "react-redux";

// Importing bagActions and detailActions from store
import { bagActions } from "../store/bagSlice";
import { detailActions } from "../store/detailSlice";

// Importing Link from react-router-dom
import { Link } from "react-router-dom";

// BagItem component
const BagItem = ({ item }) => {
  // Using useDispatch for dispatching actions
  const dispatch = useDispatch();

  // function to handle Remove button for removing item from bag
  const handleItemRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  // function to handle show item details
  const handleShowItemDetails = () => {
    dispatch(detailActions.showDetails(item.id));
  };

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <Link
          to="/details"
          onClick={handleShowItemDetails}
          className="detailLink"
        >
          <div className="company">{item.company}</div>
          <div className="item-name">{item.item_name}</div>
        </Link>
        <div className="price-container">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount-percentage">
            (${item.discount_percentage}% OFF)
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">{item.return_period} days</span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleItemRemove}>
        X
      </div>
    </div>
  );
};

// exporting BagItem component
export default BagItem;
