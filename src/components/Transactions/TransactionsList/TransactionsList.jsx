import { TransactionsListItem } from '../../componentExport';
import './transactionslist.css';

import Food from '../../../assets/categories/food.svg';
import Drink from '../../../assets/categories/drink.svg';
import Entertainmet from '../../../assets/categories/entertainment.svg';
import Travel from '../../../assets/categories/travel.svg';
import Health from '../../../assets/categories/health.svg';
import Shopping from '../../../assets/categories/shopping.svg';
import Pet from '../../../assets/categories/pet.svg';
import Housing from '../../../assets/categories/house.svg';
import Loan from '../../../assets/categories/loan.svg';
import Gifts from '../../../assets/categories/gifts.svg';
import Subscribtions from '../../../assets/categories/subscribtion.svg';
import Transportation from '../../../assets/categories/transportation.svg';
import Education from '../../../assets/categories/education.svg';

function TransactionsList() {
  //example of the given data
  const transactions = [
    {
      amount: '900',
      type: 'Income',
      category: 'Loan',
      note: 'Some',
      date: '2023-03-01',
      id: Math.random().toFixed(4),
      imgSrc: Loan,
    },
    {
      amount: '-30',
      type: 'Expense',
      category: 'Food',
      note: 'KFC',
      date: '2023-02-13',
      id: Math.random().toFixed(4),
      imgSrc: Food,
    },
    {
      amount: '-90',
      type: 'Expense',
      category: 'Shoppping',
      note: 'Clothes',
      date: '2023-01-15',
      id: Math.random().toFixed(4),
      imgSrc: Shopping,
    },
  ];

  const transactionsEl = transactions.map((transaction) => (
    <TransactionsListItem key={transaction.id} transaction={transaction} />
  ));

  return <ul className="transactions-list card">{transactionsEl}</ul>;
}

export default TransactionsList;
