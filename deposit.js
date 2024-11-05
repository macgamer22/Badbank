function Deposit() {
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const [balance, setBalance] = React.useState(100);
  
    function handleCreate() {
      const depositAmount = parseFloat(deposit);
      if (isNaN(depositAmount) || depositAmount <= 0) {
        setStatus('Please enter a valid deposit amount');
        return;
      }
      setBalance(balance + depositAmount);
      setShow(false);
    }
  
    function clearForm() {
      setDeposit('');
      setShow(true);
      setStatus('');
    }
  
    return (
      <Card
        bgcolor="danger"
        header="Deposit"
        status={status}
        body={
          show ? (
            <>
              <h3>Balance: {balance}</h3>
              Deposit Amount<br/>
              <input
                type="input"
                className="form-control"
                id="deposit"
                placeholder="Enter amount"
                value={deposit}
                onChange={e => setDeposit(e.currentTarget.value)}
              /><br/>
              <button type="submit" className="btn btn-light" onClick={handleCreate}>Submit</button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <p>Deposit Amount: {deposit}</p>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Make another deposit?</button>
            </>
          )
        }
      />
    );
  }