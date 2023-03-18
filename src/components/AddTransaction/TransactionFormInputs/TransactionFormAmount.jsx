import './transactionFormAmount.css';

function TransactionFormAmount() {
  return (
    <div className="form-field form-field__amount">
      <label htmlFor="amount">Add Transaction</label>
      <input type="number" min={0} step={0.01} placeholder="0"></input>
    </div>
  );
}

export default TransactionFormAmount;
