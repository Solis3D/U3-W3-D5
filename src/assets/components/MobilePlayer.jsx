const MobilePlayer = function () {
  return (
    <div
      className=" d-flex d-lg-none justify-content-between bg-body-tertiary rounded-4 px-3 py-2 position-fixed start-0 end-0 mx-2"
      style={{ bottom: "20px" }}
    >
      <div>
        <i className="bi bi-apple-music text-secondary display-1"></i>
      </div>
      <div className="d-flex gap-3 text-muted">
        <i className="bi bi-play-fill display-1"></i>
        <i class="bi bi-fast-forward-fill display-1"></i>
      </div>
    </div>
  );
};

export default MobilePlayer;
