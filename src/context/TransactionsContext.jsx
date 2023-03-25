import { createContext, useState } from 'react';

const TransactionsContext = createContext();

const DUMMY_DATA = [
  {
    amount: 900,
    type: 'Income',
    category: 'Loan',
    note: 'SomeNote',
    date: '2023-03-01',
    id: Math.random().toFixed(6),
  },
  {
    amount: -30,
    type: 'Expense',
    category: 'Food',
    note: 'KFC',
    date: '2023-02-13',
    id: Math.random().toFixed(6),
  },
  {
    amount: -90,
    type: 'Expense',
    category: 'Shopping',
    note: 'Clothes',
    date: '2023-01-15',
    id: Math.random().toFixed(6),
  },
];

function TransactionsProvider({ children }) {
  const [transactions, setTransactions] = useState(DUMMY_DATA);

  //Adds the existing transactions and a new one at the end after every successfull submit
  const onSubmit = (transaction) => {
    setTransactions(() => [...transactions, transaction]);
  };

  //Calc the total amount
  const calcTotalAmount = () => {
    const transactionAmounts = transactions.map(
      (transaction) => transaction.amount
    );
    const totalBalance = transactionAmounts.reduce((acc, cur) => acc + cur);
    return totalBalance;
  };

  //Calc all incomes
  const calcIncome = () => {
    const income = transactions
      .filter((transaction) => transaction.type === 'Income')
      .map((transaction) => transaction.amount)
      .reduce((acc, cur) => acc + cur);
    console.log(income);
  };

  //Calc all expenses
  const calcExpenses = () => {
    const expenses = transactions
      .filter((transaction) => transaction.type === 'Expense')
      .map((transaction) => transaction.amount)
      .reduce((acc, cur) => acc + cur);
    console.log(expenses);
  };

  const data = {
    transactions,
    onSubmit,
    calcTotalAmount,
    calcIncome,
    calcExpenses,
  };

  // console.log(transactions);

  return (
    <TransactionsContext.Provider value={data}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsContext;
export { TransactionsProvider };
