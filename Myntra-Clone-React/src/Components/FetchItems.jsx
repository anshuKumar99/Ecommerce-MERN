// Importing useEffect from react
import { useEffect } from "react";

// Importing useSelector and useDispatch from react-redux
import { useDispatch, useSelector } from "react-redux";

// Importing fetchStatusActions and itemsActions from store
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemsActions } from "../store/itemsSlice";

//Headless Component : Used for storing logic
const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) {
      return;
    }
    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("https://ecommerce-mern-q1bp.onrender.com/items", { signal })
      .then((response) => response.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus]);
  return <></>;
};

// exporting FetchItems component
export default FetchItems;
