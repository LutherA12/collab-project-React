import './TransactionSuccessMessage.css';
import checkIcon from '../../../assets/check.svg';

function TransactionSuccessMessage() {
  return (
    <div className="successful-message">
      <img src={checkIcon} alt="" aria-hidden="true" />
      <p className="successful-message__para">
        Transaction was successfully added to the list
      </p>
    </div>
  );
}

export default TransactionSuccessMessage;
