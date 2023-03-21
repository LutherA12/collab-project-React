import './transactionFormCategory.css';

function TransactionFormCategory() {
  const options = [
    'Food',
    'Drink',
    'Education',
    'Entertainment',
    'Gifts',
    'Loan',
    'Housing',
    'Shopping',
    'Groceries',
    'Pet',
    'Subscriptions',
    'Health',
    'Travel',
  ];

  return (
    <div className="form-field form-field__category">
      <select name="category" id="category">
        <option>Category</option>
        {options.map((option, index) => (
          <option value={option} key={`cat-${index}`}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default TransactionFormCategory;
