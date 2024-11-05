function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState('');
  const [withdraw, setWithdraw] = React.useState('');
  const [balance, setBalance] = React.useState(100); // Initial balance set to 100

  function handleWithdraw() {
    const withdrawAmount = parseFloat(withdraw);
    if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
      setStatus('Please enter a valid withdrawal amount');
      setTimeout(() => setStatus(''), 3000);
      return;
    }
    if (withdrawAmount > balance) {
      setStatus('Insufficient balance');
      setTimeout(() => setStatus(''), 3000);
      return;
    }
    setBalance(balance - withdrawAmount);
    setShow(false);
  }

  function clearForm() {
    setWithdraw('');
    setShow(true);
    setStatus('');
  }

  return (
    <Card
      bgcolor="danger"
      header="Withdraw"
      status={status}
      body={
        show ? (
          <>
            <h2>Balance: {balance}</h2>
            Withdraw Amount<br />
            <input
              type="input"
              className="form-control"
              id="withdraw"
              placeholder="Enter amount"
              value={withdraw}
              onChange={e => setWithdraw(e.currentTarget.value)}
            /><br />
            <button type="submit" className="btn btn-light" onClick={handleWithdraw}>Submit</button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <p>Withdrawn Amount: {withdraw}</p>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Make another withdrawal?</button>
          </>
        )
      }
    />
  );
}