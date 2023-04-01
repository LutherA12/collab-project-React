import './transactionFormAmount.css';

function TransactionFormAmount({
  amount,
  setAmount,
  amountError,
  setAmountError,
}) {
  const handleAmountOnChange = (e) => {
    setAmount(+e.target.value);
    //remove error message when user types in the field
    if (e.target.value) {
      setAmountError('');
    }
  };

  return (
    <div className="form-field form-field__amount">
      <label htmlFor="amount">Add Transaction</label>
      <input
        type="number"
        min={0}
        step={0.01}
        placeholder="0"
        onChange={handleAmountOnChange}
        value={amount}
      ></input>
      {amountError}
    </div>
  );
}

export default TransactionFormAmount;
