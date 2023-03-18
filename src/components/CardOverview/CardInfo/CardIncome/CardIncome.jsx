import './cardincome.css';
import incomeArr from '../../../../assets/income-arrow.svg';

function CardIncome() {
  return (
    <div className="card-overview__income">
      <div className="card-overview__income__img">
        <img src={incomeArr} alt="" aria-hidden="true" />
      </div>
      <div className="card-overview__income--content">
        <h2>Income</h2>
        <p>
          <span id="income">5.000,00</span>€
        </p>
      </div>
    </div>
  );
}

export default CardIncome;
