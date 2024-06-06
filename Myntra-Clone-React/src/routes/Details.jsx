import { useDispatch, useSelector } from "react-redux";
import { bagActions } from "../store/bagSlice";

const Details = () => {
  const items = useSelector((store) => store.items);
  const bagItemsId = useSelector((store) => store.bag);
  const itemId = useSelector((store) => store.detail.id);

  const dispatch = useDispatch();

  const itemDetails = items.filter((item) => item.id === itemId);
  const item = itemDetails[0];

  const isPresent = () => {
    return bagItemsId.some((id) => id === item.id);
  };

  const handleAddItemToBag = () => {
    dispatch(bagActions.addToBag(item.id));
  };

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

export default Details;
