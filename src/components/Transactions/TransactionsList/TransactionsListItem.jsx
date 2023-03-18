import './transactionsListItem.css';

function TransactionsListItem({ transaction }) {
  return (
    <li className="transactions-list--item card">
      <div className="transaction-left">
        <div className="transaction-left__img">
          <img src={transaction.imgSrc} alt="" aria-hidden="true" />
        </div>
        <p className="transaction-left__category">{transaction.category}</p>
        <p className="transaction-left__note">{transaction.note}</p>
      </div>
      <div className="transaction-right">
        <p className="transaction-right__amount">{transaction.amount}€</p>
        <p className="transaction-right__date">{transaction.date}</p>
      </div>
    </li>
  );
}

export default TransactionsListItem;
