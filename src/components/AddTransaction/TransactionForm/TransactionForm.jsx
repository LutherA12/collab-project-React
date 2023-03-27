import './transactionform.css';
import {
  TransactionFormAmount,
  TransactionFormType,
  TransactionFormCategory,
  TransactionFormNote,
  TransactionFormDate,
  Card,
  Button,
} from '../../componentExport';
import { useState } from 'react';
import { useContext } from 'react';
import TransactionsContext from '../../../context/TransactionsContext';

function TransactionInfo() {
  //Format date, to pass as a value on the new Date() obj.
  const today = new Date().toISOString().substring(0, 10);

  //Needed function from the Context
  const { onSubmit } = useContext(TransactionsContext);
  //States
  const [amountError, setAmountError] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Category');
  const [categoryError, setCategoryError] = useState('');
  const [type, setType] = useState('Income');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(today);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //Amount validation
    if (!amount) {
      setAmountError(<p className="error">Field cannot be empty or 0</p>);
    } else {
      setAmountError('');
    }

    //Category validation
    if (category === 'Category') {
      setCategoryError(<p className="error">Please choose a category</p>);
    } else {
      setCategoryError('');
    }

    //add newTransaction to the transactions array
    if (amount && category !== 'Category') {
      onSubmit({
        amount,
        type,
        category,
        note,
        date,
        id: Math.random(),
      });
    }

    //Reset inputs
    setAmount('');
    setType('Income');
    setCategory('Category');
    setNote('');
    setDate(today);
  };

  return (
    <Card className="form-card">
      <form className="transactiom-form" onSubmit={handleFormSubmit}>
        <TransactionFormAmount
          amount={amount}
          setAmount={setAmount}
          amountError={amountError}
          setAmountError={setAmountError}
          type={type}
        />
        <TransactionFormType setType={setType} type={type} />
        <TransactionFormCategory
          category={category}
          setCategory={setCategory}
          setCategoryError={setCategoryError}
          categoryError={categoryError}
        />
        <TransactionFormNote setNote={setNote} note={note} />
        <TransactionFormDate date={date} setDate={setDate} />
        <Button className="btn-primary">Save</Button>
      </form>
    </Card>
  );
}

export default TransactionInfo;
