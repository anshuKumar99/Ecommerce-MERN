import HomeItem from "../Components/HomeItem";
import { useSelector } from "react-redux";
import Sort from "../Components/Sort";

const Home = () => {
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
export default Home;
