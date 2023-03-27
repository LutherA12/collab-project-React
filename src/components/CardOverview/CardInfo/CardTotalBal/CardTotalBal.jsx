import './cardtotalbal.css';
import { useContext } from 'react';
import TransactionsContext from '../../../../context/TransactionsContext';

function CardTotalBal() {
  const { calcTotalAmount } = useContext(TransactionsContext);
  const totalBalance = calcTotalAmount();

  return (
    <div className="card-overview__total">
      <h2>Total Balance</h2>
      <p>
        <span id="total-balance">{totalBalance}</span>€
      </p>
    </div>
  );
}

export default CardTotalBal;
