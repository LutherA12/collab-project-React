import { TransactionsListItem } from '../../componentExport';
import './transactionslist.css';
//To use the context
import { useContext } from 'react';
import TransactionsContext from '../../../context/TransactionsContext';

function TransactionsList() {
  const transactions = useContext(TransactionsContext);

  const transactionsEl = transactions.map((transaction) => (
    //Still passing the transaction as a prop to use that specific transaction on the LitstItem
    <TransactionsListItem key={transaction.id} transaction={transaction} />
  ));

  return <ul className="transactions-list card">{transactionsEl}</ul>;
}

export default TransactionsList;
