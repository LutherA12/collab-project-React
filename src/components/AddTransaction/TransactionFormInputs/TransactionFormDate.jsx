import './transactionFormDate.css';

function TransactionFormDate({ date, setDate }) {
  const handleDateOnChange = (e) => {
    setDate(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="form-field form-field__date">
      <input type="date" value={date} onChange={handleDateOnChange}></input>
    </div>
  );
}

export default TransactionFormDate;
