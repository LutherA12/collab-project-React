import './sorttransactions.css';
import sortIcon from '../../../assets/sort-icon.svg';
import { useState, useRef, useEffect, useContext } from 'react';
import TransactionsContext from '../../../context/TransactionsContext';
import { gsap } from 'gsap';

function SortTransactions() {
  const sortListRef = useRef();
  const {
    sortTransactionsByDate,
    sortTransactionsByIncome,
    sortTransactionsByExpense,
    toggleSortBtn,
    showSortList,
  } = useContext(TransactionsContext);

  useEffect(() => {
    if (showSortList) {
      gsap.to(sortListRef.current, { opacity: 1, translateY: 0, autoAlpha: 1 });
    } else {
      gsap.to(sortListRef.current, {
        opacity: 0,
        translateY: -14,
        autoAlpha: 0,
      });
    }
  }, [showSortList]);

  return (
    <div className="transaction__filter">
      <div className="transaction__filter--btn" onClick={toggleSortBtn}>
        <p>Sort by</p>
        <img src={sortIcon} alt="" aria-label="sort transactions" />
      </div>

      <div className="transaction__filter--downdrop" ref={sortListRef}>
        <p onClick={sortTransactionsByDate}>Latest</p>
        <p onClick={sortTransactionsByIncome}>Income</p>
        <p onClick={sortTransactionsByExpense}>Expenses</p>
      </div>
    </div>
  );
}

export default SortTransactions;
