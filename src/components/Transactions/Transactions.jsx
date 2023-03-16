import {
  SortTransactions,
  TransactionDiagram,
  TransactionsList,
} from "../componentExport";
import "./transactions.css";

function Transactions() {
  return (
    <div className="transactions">
      <div>
        <TransactionDiagram />
      </div>
      <div>
        Transactions
        <SortTransactions />
      </div>
      <div>
        <TransactionsList />
      </div>
    </div>
  );
}

export default Transactions;
