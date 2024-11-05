function AllData() {
  const ctx = React.useContext(UserContext);

  return (
    <Card
      bgcolor="secondary"
      header="All Data"
      body={
        <div style={{ overflowX: 'auto' }}>
          <h5>All Data in Bank</h5>
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Password</th>
                <th scope="col">Balance</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    />
  );
}