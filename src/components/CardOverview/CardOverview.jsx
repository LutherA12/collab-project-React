import {
  CardExpenses,
  CardIncome,
  CardTotalBal,
  Card,
} from '../componentExport.jsx';
import './cardoverview.css';

function CardOverview() {
  return (
    <section className="transactions-overview">
      <Card className="card-overview">
        <CardTotalBal />
        <CardIncome />
        <CardExpenses />
      </Card>
    </section>
  );
}

export default CardOverview;
