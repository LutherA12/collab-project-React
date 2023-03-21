import { SortTransactions, TransactionsList } from '../componentExport';
import './transactions.css';

function Transactions() {
  return (
    <section className="transactions">
      <div className="transactions__header">
        <h4>Transactions</h4>
        <SortTransactions />
      </div>
      <TransactionsList />
    </section>
  );
}

export default Transactions;
