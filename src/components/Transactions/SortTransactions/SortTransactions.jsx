import './sorttransactions.css';
import sortIcon from '../../../assets/sort-icon.svg';
import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function SortTransactions() {
  const [showSortList, setShowSortList] = useState(false);
  const sortListRef = useRef();

  const handleSortBtn = () => {
    setShowSortList(() => !showSortList);
  };

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
      <div className="transaction__filter--btn" onClick={handleSortBtn}>
        <p>Sort by</p>
        <img src={sortIcon} alt="" aria-label="sort transactions" />
      </div>

      <div className="transaction__filter--downdrop" ref={sortListRef}>
        <p>Date</p>
        <p>Income</p>
        <p>Expenses</p>
      </div>
    </div>
  );
}

export default SortTransactions;
