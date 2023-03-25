import { createContext } from 'react';

const TransactionsContext = createContext();

function TransactionsProvider({ children }) {
  const transactions = [
    {
      amount: 900,
      type: 'Income',
      category: 'Loan',
      note: 'SomeNote',
      date: '2023-03-01',
      id: Math.random().toFixed(4),
    },
    {
      amount: -30,
      type: 'Expense',
      category: 'Food',
      note: 'KFC',
      date: '2023-02-13',
      id: Math.random().toFixed(4),
    },
    {
      amount: -90,
      type: 'Expense',
      category: 'Shopping',
      note: 'Clothes',
      date: '2023-01-15',
      id: Math.random().toFixed(4),
    },
  ];

  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  );
}

export default TransactionsContext;
export { TransactionsProvider };
