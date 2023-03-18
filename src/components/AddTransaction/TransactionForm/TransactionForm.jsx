import './transactionform.css';
import {
  TransactionFormAmount,
  TransactionFormType,
  TransactionFormCategory,
  TransactionFormNote,
  TransactionFormDate,
  Card,
} from '../../componentExport';

function TransactionInfo() {
  return (
    <Card className="form-card">
      <form className="transactiom-form">
        <TransactionFormAmount />
        <TransactionFormType />
        <TransactionFormCategory />
        <TransactionFormNote />
        <TransactionFormDate />
      </form>
    </Card>
  );
}

export default TransactionInfo;
