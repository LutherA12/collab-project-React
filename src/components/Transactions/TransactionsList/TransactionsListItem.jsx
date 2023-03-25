import './transactionsListItem.css';

import {
  Food,
  Loan,
  Drink,
  Entertainment,
  Travel,
  Health,
  Shopping,
  Pet,
  Housing,
  Gifts,
  Subscribtion,
  Education,
  Transportation,
} from '../../componentExport';

function TransactionsListItem({ transaction }) {
  //Show image based on the category selected
  let imgSrc = null;
  const imgCategory = transaction.category.toLowerCase();

  //The only way I could think of that works with the images
  if (imgCategory.includes('food')) imgSrc = Food;
  if (imgCategory.includes('loan')) imgSrc = Loan;
  if (imgCategory.includes('drink')) imgSrc = Drink;
  if (imgCategory.includes('entertainment')) imgSrc = Entertainment;
  if (imgCategory.includes('travel')) imgSrc = Travel;
  if (imgCategory.includes('health')) imgSrc = Health;
  if (imgCategory.includes('shopping')) imgSrc = Shopping;
  if (imgCategory.includes('pet')) imgSrc = Pet;
  if (imgCategory.includes('housing')) imgSrc = Housing;
  if (imgCategory.includes('gifts')) imgSrc = Gifts;
  if (imgCategory.includes('subscribtion')) imgSrc = Subscribtion;
  if (imgCategory.includes('education')) imgSrc = Education;
  if (imgCategory.includes('transportation')) imgSrc = Transportation;

  return (
    <li className="transactions-list--item card">
      <div className="transaction-left">
        <div className="transaction-left__img">
          <img src={imgSrc} alt="" aria-hidden="true" />
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
