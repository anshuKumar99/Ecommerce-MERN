// Importing useSelector and useDispatch from react-redux
import { useDispatch, useSelector } from "react-redux";

// Importing bagActions and detailActions from store
import { bagActions } from "../store/bagSlice";
import { detailActions } from "../store/detailSlice";

// Importing Link from react-router-dom
import { Link } from "react-router-dom";

// HomeItem component
const HomeItem = ({ item }) => {
  // Using useSelector for getting bagItemsId from redux store
  const bagItemsId = useSelector((store) => store.bag);

  // Using useDispatch for dispatching actions
  const dispatch = useDispatch();

  // check if item is present in bag or not
  const isItemPresent = () => {
    return bagItemsId.some((id) => id === item.id);
  };

  // function to handle Add button for adding item in bag
  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  // function to handle Remove button for removing item from bag
  const handleRemove = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  // function to handle show item details
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

// exporting HomeItem component
export default HomeItem;
