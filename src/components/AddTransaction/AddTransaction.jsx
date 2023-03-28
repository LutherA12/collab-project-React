import {
  TransactionForm,
  TransactionSuccessMessage,
  Card,
} from '../componentExport';
import './addtransaction.css';
import { useState } from 'react';
import plusIcon from '../../assets/plus-icon.svg';
import minusIcon from '../../assets/minus-icon.svg';

function AddTransaction() {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [icon, setIcon] = useState(plusIcon);

  //Toggle the Form
  const handleTransactionClick = () => {
    setIsFormOpen(!isFormOpen);
    // console.log(isFormOpen); //false in first run
    isFormOpen ? setIcon(plusIcon) : setIcon(minusIcon);
  };

  return (
    <section className="section-transaction-form">
      <Card className="add-transaction-card">
        <h3>Add Transaction</h3>
        <div
          className="add-transaction-card__img"
          onClick={handleTransactionClick}
        >
          <img src={icon} alt="plus icon" aria-label="open form" />
        </div>
      </Card>
      {isFormOpen && (
        <TransactionForm
          setIsFormOpen={setIsFormOpen}
          setIcon={setIcon}
          isMessageVisible={isMessageVisible}
          setIsMessageVisible={setIsMessageVisible}
        />
      )}
      {isMessageVisible && <TransactionSuccessMessage />}
    </section>
  );
}

export default AddTransaction;
