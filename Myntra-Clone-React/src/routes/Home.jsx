// Importing Elements from Components
import HomeItem from "../Components/HomeItem";
import Sort from "../Components/Sort";

// Importing useSelector from react-redux
import { useSelector } from "react-redux";

const Home = () => {
  // Using useSelector for getting items from redux store
  const items = useSelector((store) => store.items);
  return (
    <main>
      <Sort />
      <div className="items-container">
        {items.map((item) => (
          <HomeItem key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};

// exporting Home component
export default Home;
