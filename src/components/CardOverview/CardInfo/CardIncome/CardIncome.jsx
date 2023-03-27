import './cardincome.css';
import incomeArr from '../../../../assets/income-arrow.svg';
import { useContext } from 'react';
import TransactionsContext from '../../../../context/TransactionsContext';

function CardIncome() {
  const { calcIncome } = useContext(TransactionsContext);
  const totalIncome = calcIncome();

  return (
    <div className="card-overview__income">
      <div className="card-overview__income__img">
        {' '}
        <img src={incomeArr} alt="" aria-hidden="true" />
      </div>
      <div className="card-overview__income--content">
        <h2>Income</h2>
        <p>
          <span id="income">{totalIncome}</span>€
        </p>
      </div>
    </div>
  );
}

export default CardIncome;
