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
  const dateFormat = new Date().toISOString().substring(0, 10);

  const { onSubmit } = useContext(TransactionsContext);
  const [amountError, setAmountError] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Category');
  const [categoryError, setCategoryError] = useState('');
  const [type, setType] = useState('Income');
  const [note, setNote] = useState('');
  const [date, setDate] = useState(dateFormat);
  // const [isValid, setIsValid] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    //Amount validation
    //Validation not working properly TODOS :(
    if (!amount || amount.length === 0) {
      // setIsValid(false);
      console.log('error');
      setAmountError(<p className="error">Field cannot be empty or 0</p>);
    } else {
      // setIsValid(true);
      setAmountError('');
    }

    //Category validation
    if (category === 'Category') {
      setCategoryError(<p className="error">Please choose a category</p>);
    } else {
      setCategoryError('');
    }

    //add newTransaction to the transactions
    onSubmit({
      amount,
      type,
      category,
      note,
      date,
      id: Math.random().toFixed(6),
    });

    //Reset
    setAmount('');
  };

  return (
    <Card className="form-card">
      <form className="transactiom-form" onSubmit={handleFormSubmit}>
        <TransactionFormAmount
          amount={amount}
          setAmount={setAmount}
          amountError={amountError}
          setAmountError={setAmountError}
        />
        <TransactionFormType setType={setType} />
        <TransactionFormCategory
          category={category}
          setCategory={setCategory}
          setCategoryError={setCategoryError}
          categoryError={categoryError}
        />
        <TransactionFormNote setNote={setNote} />
        <TransactionFormDate date={date} setDate={setDate} />
        <Button className="btn-primary">Save</Button>
      </form>
    </Card>
  );
}

export default TransactionInfo;
