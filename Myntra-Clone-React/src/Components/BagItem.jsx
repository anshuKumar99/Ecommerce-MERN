import { useDispatch } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { Link } from "react-router-dom";
import { detailActions } from "../store/detailSlice";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleItemRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

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

export default BagItem;
