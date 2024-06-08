// Importing useSelector and useDispatch from react-redux
import { useDispatch, useSelector } from "react-redux";

// Importing bagActions from redux store
import { bagActions } from "../store/bagSlice";

const Details = () => {
  // Using useSelector for getting items, bagItemsId and itemId from redux store
  const items = useSelector((store) => store.items);
  const bagItemsId = useSelector((store) => store.bag);
  const itemId = useSelector((store) => store.detail.id);

  // Using useDispatch for dispatching actions
  const dispatch = useDispatch();

  // Getting item details from items
  const itemDetails = items.filter((item) => item.id === itemId);
  const item = itemDetails[0];

  // check if item is present in bag or not
  const isPresent = () => {
    return bagItemsId.some((id) => id === item.id);
  };

  // function to handle Add button for adding item in bag
  const handleAddItemToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

  // function to handle Remove button for removing item from bag
  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id));
  };

  return (
    <main className="d-flex justify-content-center align-items-center my-5">
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>

        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {isPresent() ? (
          <button
            className="btn btn-add-bag btn-danger"
            onClick={handleRemoveFromBag}
          >
            Remove
          </button>
        ) : (
          <button
            className=" btn btn-add-bag btn-success"
            onClick={handleAddItemToBag}
          >
            Add to Bag
          </button>
        )}
      </div>
    </main>
  );
};

// exporting Bag component
export default Details;
