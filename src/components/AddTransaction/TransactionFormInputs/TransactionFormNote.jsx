import './transactionFormNote.css';

function TransactionFormNote({ setNote }) {
  const handleNoteOnChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="form-field form-field__note">
      <input
        type="text"
        placeholder="Note"
        onChange={handleNoteOnChange}
      ></input>
    </div>
  );
}

export default TransactionFormNote;
