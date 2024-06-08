// LoadingSpinner component
const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "5rem", height: "5rem", margin: "10% 0" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

// exporting LoadingSpinner component
export default LoadingSpinner;
