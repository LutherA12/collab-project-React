import {
  TransactionForm,
  TransactionSuccessMessage,
  Card,
} from '../componentExport';
import './addtransaction.css';
import { useEffect, useState, useRef } from 'react';
import plusIcon from '../../assets/plus-icon.svg';
import minusIcon from '../../assets/minus-icon.svg';
//gsap animation
import gsap from 'gsap';

function AddTransaction() {
  const [isMessageVisible, setIsMessageVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [icon, setIcon] = useState(plusIcon);
  //useRef
  const formRef = useRef();

  //animation on showing-hiding form
  useEffect(() => {
    if (isFormOpen) {
      gsap.to(formRef.current, {
        scaleY: 1,
        height: 'auto',
        transformOrigin: 'top',
        opacity: 1,
        autoAlpha: 1,
      });
    } else {
      gsap.to(formRef.current, {
        scaleY: 0,
        height: 0,
        opacity: 0,
        autoAlpha: 0,
      });
    }
  }, [isFormOpen]);

  //Toggle the Form
  const handleTransactionClick = () => {
    setIsFormOpen(!isFormOpen); //false in first run
    isFormOpen ? setIcon(plusIcon) : setIcon(minusIcon);
    console.log(formRef);
  };

  //Show the successful message
  useEffect(() => {
    if (!isMessageVisible) return;

    const timer = setTimeout(() => {
      setIsMessageVisible(false);
    }, 2500);

    //clear timer
    return () => {
      clearTimeout(timer);
    };
  }, [isMessageVisible]);

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
      {/* {isFormOpen && (
        <TransactionForm
          setIsFormOpen={setIsFormOpen}
          setIcon={setIcon}
          setIsMessageVisible={setIsMessageVisible}
        />
      )} */}
      <TransactionForm
        ref={formRef}
        isFormOpen={isFormOpen}
        setIsFormOpen={setIsFormOpen}
        setIcon={setIcon}
        setIsMessageVisible={setIsMessageVisible}
      />
      {isMessageVisible && <TransactionSuccessMessage />}
    </section>
  );
}

export default AddTransaction;
