import './transactionFormType.css';

function TransactionFormType({ type, setType }) {
  const handleTypeOnChange = (e) => {
    setType(e.target.value);
  };

  const options = ['Income', 'Expense'];
  return (
    <div className="form-field form-field__type">
      <select name="type" id="type" onChange={handleTypeOnChange} value={type}>
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
