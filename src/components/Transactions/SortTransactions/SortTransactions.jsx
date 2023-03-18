import './sorttransactions.css';
import sortIcon from '../../../assets/sort-icon.svg';

function SortTransactions() {
  return (
    <div className="transaction__filter">
      <p>Sort by</p>
      <img src={sortIcon} alt="" aria-label="sort transactions" />
      <div className="transaction__filter--downdrop">
        <p>Date</p>
        <p>Income</p>
        <p>Expenses</p>
      </div>
    </div>
  );
}

export default SortTransactions;
