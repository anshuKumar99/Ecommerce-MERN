import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";
import { Link } from "react-router-dom";
import { detailActions } from "../store/detailSlice";

const HomeItem = ({ item }) => {
  const bagItemsId = useSelector((store) => store.bag);
  const dispatch = useDispatch();

  const isItemPresent = () => {
    return bagItemsId.some((id) => id === item.id);
  };

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  const handleShowDetails = () => {
    dispatch(detailActions.showDetails(item.id));
  };

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <Link to="/details" onClick={handleShowDetails} className="detailLink">
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
      </Link>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {isItemPresent() ? (
        <button className="btn btn-add-bag btn-danger" onClick={handleRemove}>
          Remove
        </button>
      ) : (
        <button
          className=" btn btn-add-bag btn-success"
          onClick={handleAddToBag}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};

export default HomeItem;
