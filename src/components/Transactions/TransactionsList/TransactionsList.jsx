import { TransactionsListItem } from '../../componentExport';
import './transactionslist.css';
//To use the context
import { useContext } from 'react';
import TransactionsContext from '../../../context/TransactionsContext';

function TransactionsList() {
  const { transactions, isFiltered, updatedTransactions } =
    useContext(TransactionsContext);

  const cuurentTransactions = isFiltered ? updatedTransactions : transactions;

  const transactionsEl = cuurentTransactions.map((transaction) => (
    <TransactionsListItem key={transaction.id} transaction={transaction} />
  ));
  return <ul className="transactions-list card">{transactionsEl}</ul>;
}

export default TransactionsList;
