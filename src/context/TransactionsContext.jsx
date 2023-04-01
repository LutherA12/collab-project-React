import { createContext, useState } from 'react';
//unique id generator package
import uuid from 'react-uuid';

const TransactionsContext = createContext();

const DUMMY_DATA = [
  {
    amount: 900,
    type: 'Income',
    category: 'Loan',
    note: 'SomeNote',
    date: '2023-03-01',
    id: uuid(),
  },
  {
    amount: 30,
    type: 'Expense',
    category: 'Food',
    note: 'KFC',
    date: '2023-02-13',
    id: uuid(),
  },
  {
    amount: 90,
    type: 'Expense',
    category: 'Shopping',
    note: 'Clothes',
    date: '2023-01-15',
    id: uuid(),
  },
];

function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState(DUMMY_DATA);
  console.log(transactions);

  //Adds the existing transactions and a new one at the end after every successfull submit
  const onSubmit = (transaction) => {
    setTransactions(() => [...transactions, transaction]);
  };

  //Calc all incomes
  const calcIncome = () => {
    const income = transactions
      .filter((transaction) => transaction.type === 'Income')
      .map((transaction) => transaction.amount)
      .reduce((acc, cur) => acc + cur);
    return income;
  };

  //Calc all expenses
  const calcExpenses = () => {
    const expenses = transactions
      .filter((transaction) => transaction.type === 'Expense')
      .map((transaction) => transaction.amount)
      .reduce((acc, cur) => acc + cur);
    return expenses;
  };

  //Calc the total amount
  const calcTotalAmount = () => {
    const totalBalance = calcIncome() - calcExpenses();
    return totalBalance;
  };

  const data = {
    transactions,
    onSubmit,
    calcTotalAmount,
    calcIncome,
    calcExpenses,
  };

  return (
    <TransactionsContext.Provider value={data}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsContext;
export { TransactionsProvider };
