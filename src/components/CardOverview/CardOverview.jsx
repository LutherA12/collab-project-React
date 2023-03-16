import { CardExpenses, CardIncome, CardTotalBal } from "../componentExport.jsx";
import "./cardoverview.css";

function CardOverview() {
  return (
    <div className="card">
      Card Overview
      <CardTotalBal />
      <CardIncome />
      <CardExpenses />
    </div>
  );
}

export default CardOverview;
