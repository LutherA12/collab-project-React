import { TransactionForm } from "../componentExport";
import "./addtransaction.css";

function AddTransaction() {
  return (
    <div className="addTransaction">
      Add Transaction
      <TransactionForm />
    </div>
  );
}

export default AddTransaction;
