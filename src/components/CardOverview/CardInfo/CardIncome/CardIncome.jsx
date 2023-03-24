import "./cardincome.css";
import incomeArr from "../../../../assets/income-arrow.svg";

function CardIncome() {
  const incomeInfo = [
    {
      id: 1,
      incomeGreeting: "Income",
      income: <>5.000,00€</>,
      img: <img src={incomeArr} alt="" aria-hidden="true" />,
    },
  ];

  return (
    <div className="card-overview__income">
      <div className="card-overview__income__img">{incomeInfo[0].img}</div>
      <div className="card-overview__income--content">
        <h2>{incomeInfo[0].incomeGreeting}</h2>
        <p>
          <span id="income">{incomeInfo[0].income}</span>
        </p>
      </div>
    </div>
  );
}

export default CardIncome;
