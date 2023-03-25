import './transactionsListItem.css';

// import TransactionsContext from '../../../context/TransactionsContext';
// import Food from '../../../assets/categories/food.svg';
// import Drink from '../../../assets/categories/drink.svg';
// import Entertainmet from '../../../assets/categories/entertainment.svg';
// import Travel from '../../../assets/categories/travel.svg';
// import Health from '../../../assets/categories/health.svg';
// import Shopping from '../../../assets/categories/shopping.svg';
// import Pet from '../../../assets/categories/pet.svg';
// import Housing from '../../../assets/categories/house.svg';
// import Gifts from '../../../assets/categories/gifts.svg';
// import Subscribtions from '../../../assets/categories/subscribtion.svg';
// import Transportation from '../../../assets/categories/transportation.svg';
// import Education from '../../../assets/categories/education.svg';

function TransactionsListItem({ transaction }) {
  //Show image based on the category selected
  // let imgSrc = null;
  // const imgCategory = transaction.category.toLowerCase();

  //The only way I could think of that works with the images
  // if (imgCategory.includes('food')) imgSrc = Food;
  // if (imgCategory.includes('loan')) imgSrc = Loan;
  // if (imgCategory.includes('shopping')) imgSrc = Shopping;

  return (
    <li className="transactions-list--item card">
      {/* <div className="transaction-left">
        <div className="transaction-left__img">
          <img src={imgSrc} alt="" aria-hidden="true" />
        </div>
        <p className="transaction-left__category">{transaction.category}</p>
        <p className="transaction-left__note">{transaction.note}</p>
      </div>
      <div className="transaction-right">
        <p className="transaction-right__amount">{transaction.amount}€</p>
        <p className="transaction-right__date">{transaction.date}</p>
      </div> */}
    </li>
  );
}

export default TransactionsListItem;
