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

function TransactionInfo() {
  return (
    <Card className="form-card">
      <form className="transactiom-form">
        <TransactionFormAmount />
        <TransactionFormType />
        <TransactionFormCategory />
        <TransactionFormNote />
        <TransactionFormDate />
        <Button className="btn-primary">Save</Button>
      </form>
    </Card>
  );
}

export default TransactionInfo;
