import './cardexpenses.css';
import expensesArr from '../../../../assets/expenses-arrow.svg';
import { useContext } from 'react';
import TransactionsContext from '../../../../context/TransactionsContext';

function CardExpenses() {
  const { calcExpenses } = useContext(TransactionsContext);
  const totalExpenses = calcExpenses();

  return (
    <div className="card-overview__expenses">
      <div className="card-overview__expenses__img">
        <img src={expensesArr} alt="" aria-hidden="true" />
      </div>
      <div className="card-overview__expenses--content">
        <h2>Expenses</h2>
        <p>
          -<span id="expenses">{totalExpenses}</span>€
        </p>
      </div>
    </div>
  );
}

export default CardExpenses;
