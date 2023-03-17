import './cardexpenses.css';
import expensesArr from '../../../../assets/expenses-arrow.svg';

function CardExpenses() {
  return (
    <div className="card-overview__expenses">
      <div className="card-overview__expenses__img">
        <img src={expensesArr} alt="" aria-hidden="true" />
      </div>
      <div className="card-overview__expenses--content">
        <h2>Expenses</h2>
        <p>
          <span className="expenses">2.500,00</span>€
        </p>
      </div>
    </div>
  );
}

export default CardExpenses;
