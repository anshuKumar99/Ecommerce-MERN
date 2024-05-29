import { useSelector } from "react-redux";
import BagItem from "../Components/BagItem";
import BagSummary from "../Components/BagSummary";

const Bag = () => {
  const bag = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);

  const bagItems = items.filter((item) => {
    const isPresent = bag.some((id) => id === item.id);
    return isPresent;
  });

  return (
    <main>
      {bag.length === 0 ? (
        <h5 className="d-flex justify-content-center align-items-center m-5">
          There is nothing in your bag, Let's add some items.
        </h5>
      ) : (
        <div className="bag-page">
          <div className="bag-items-container">
            {bagItems.map((item) => (
              <BagItem item={item} />
            ))}
          </div>
          <BagSummary />
        </div>
      )}
    </main>
  );
};

export default Bag;
