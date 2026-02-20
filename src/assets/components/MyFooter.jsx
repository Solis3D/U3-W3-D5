const MyFooter = function () {
  return (
    <div className=" bg-body-tertiary mt-5 px-3 pb-2" style={{ fontSize: "0.7rem" }}>
      <div className=" py-3">
        <p className="mb-0">
          Italia <span className="mx-2">|</span> <span className=" text-muted">English (UK) </span>
        </p>
      </div>

      <div>
        <p className="mb-0 text-muted">
          Copyright &copy; 2024 <span className=" text-light"> Apple inc.</span> Tutti i diritti riservati.
        </p>
      </div>

      <div className=" mt-3 d-flex flex-wrap gap-2">
        <p className="mb-0">Condizioni dei servizi Internet</p>
        <p className="mb-0 mx-1">|</p>
        <p className="mb-0">Apple Music e privacy</p>
        <p className="mb-0 mx-1">|</p>
        <p className="mb-0">Avviso sui cookie</p>
        <p className="mb-0 mx-1">|</p>
        <p className="mb-0">Supporto</p>
        <p className="mb-0 mx-1">|</p>
        <p className="mb-0">Feedback</p>
      </div>
    </div>
  );
};

export default MyFooter;
