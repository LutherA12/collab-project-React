import './transactionFormType.css';

function TransactionFormType() {
  const options = ['Income', 'Expense'];
  return (
    <div className="form-field form-field__type">
      <select name="type" id="type">
        {options.map((option, index) => (
          <option value={option} key={`typ-${index}`}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TransactionFormType;
