function NavBar() {
  React.useEffect(() => {
    // Initialize tooltips
    $('[data-toggle="tooltip"]').tooltip();

    // Hide tooltip on click
    $('.nav-link').on('click', function () {
      $(this).tooltip('hide');
    });

    // Clean up event listeners on component unmount
    return () => {
      $('.nav-link').off('click');
    };
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <a className="navbar-brand" href="#">BadBank</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Create a new account">
              <a className="nav-link" href="#/CreateAccount/">Create Account</a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Deposit money">
              <a className="nav-link" href="#/deposit/">Deposit</a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="Withdraw money">
              <a className="nav-link" href="#/withdraw/">Withdraw</a>
            </li>
            <li className="nav-item" data-toggle="tooltip" data-placement="bottom" title="View all data">
              <a className="nav-link" href="#/alldata/">All Data</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}