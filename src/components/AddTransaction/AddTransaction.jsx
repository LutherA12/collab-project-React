import { TransactionForm, Card } from "../componentExport";
import "./addtransaction.css";
import plusIcon from "../../assets/plus-icon.svg";
// import minusIcon from '../../assets/minus-icon.svg'

function AddTransaction() {
  const addTransaction = [
    {
      id: 1,
      transactionGreeting: "Add Transaction",
      img: <img src={plusIcon} alt="plus icon" aria-label="open form" />,
    },
  ];

  return (
    <section className="section-transaction-form">
      <Card className="add-transaction-card">
        <h3>{addTransaction[0].transactionGreeting}</h3>
        <div className="add-transaction-card__img">{addTransaction[0].img}</div>
      </Card>
      <TransactionForm />
    </section>
  );
}

export default AddTransaction;
