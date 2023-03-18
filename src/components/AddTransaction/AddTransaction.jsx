import { TransactionForm, Card } from '../componentExport';
import './addtransaction.css';
import plusIcon from '../../assets/plus-icon.svg';
// import minusIcon from '../../assets/minus-icon.svg'

function AddTransaction() {
  return (
    <section className="section-transaction-form">
      <Card className="add-transaction-card">
        <h3>Add Transaction</h3>
        <div className="add-transaction-card__img">
          <img src={plusIcon} alt="plus icon" aria-label="open form" />
        </div>
      </Card>
      <TransactionForm />
    </section>
  );
}

export default AddTransaction;
