import { TransactionDiagramList } from "../componentExport";
import "./transactiondiagram.css";

function TransactionDiagram() {
  return (
    <div className="transactionDiagram">
      Transaction Diagram
      <TransactionDiagramList />
    </div>
  );
}

export default TransactionDiagram;
