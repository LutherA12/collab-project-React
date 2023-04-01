import './transactionFormNote.css';

function TransactionFormNote({ note, setNote }) {
  const handleNoteOnChange = (e) => {
    setNote(e.target.value);
  };

  return (
    <div className="form-field form-field__note">
      <input
        type="text"
        placeholder="Note"
        onChange={handleNoteOnChange}
        value={note}
      ></input>
    </div>
  );
}

export default TransactionFormNote;
