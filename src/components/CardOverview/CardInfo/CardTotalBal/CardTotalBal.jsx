import "./cardtotalbal.css";

function CardTotalBal() {
  const balanceInfo = [
    {
      id: 1,
      balanceGreeting: "Total Balance",
      balance: <>2.500,00€</>,
    },
  ];

  return (
    <div className="card-overview__total">
      <h2>{balanceInfo[0].balanceGreeting}</h2>
      <p>
        <span id="total-balance">{balanceInfo[0].balance}</span>
      </p>
    </div>
  );
}

export default CardTotalBal;
