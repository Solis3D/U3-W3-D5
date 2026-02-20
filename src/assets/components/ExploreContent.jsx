const ExploreContent = function ({ text }) {
  return (
    <div className=" bg-body-tertiary rounded-3 p-3 d-flex justify-content-between align-items-center text-danger h-100">
      <h4>{text}</h4>
      <i className="bi bi-chevron-right"></i>
    </div>
  );
};

export default ExploreContent;
