import "./cardexpenses.css";
import expensesArr from "../../../../assets/expenses-arrow.svg";

function CardExpenses() {
  const expensesInfo = [
    {
      id: 1,
      expensesGreeting: "Expenses",
      expenses: <>2.500,00€</>,
      img: <img src={expensesArr} alt="" aria-hidden="true" />,
    },
  ];

  return (
    <div className="card-overview__expenses">
      <div className="card-overview__expenses__img">{expensesInfo[0].img}</div>
      <div className="card-overview__expenses--content">
        <h2>{expensesInfo[0].expensesGreeting}</h2>
        <p>
          <span id="expenses">{expensesInfo[0].expenses}</span>
        </p>
      </div>
    </div>
  );
}

export default CardExpenses;
