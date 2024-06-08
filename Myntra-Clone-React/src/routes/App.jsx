// Importing App.css
import "./App.css";

// Importing Elements from Components
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import LoadingSpinner from "../Components/LoadingSpinner";
import FetchItems from "../Components/FetchItems";

// Importing Outlet from react-router-dom
import { Outlet } from "react-router-dom";

// Importing useSelector from react-redux
import { useSelector } from "react-redux";

function App() {
  // Using useSelector for getting fetchStatus from redux store
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
      <Footer />
    </>
  );
}

// exporting App component
export default App;
