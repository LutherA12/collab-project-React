import './transactionFormCategory.css';

function TransactionFormCategory({
  category,
  setCategory,
  setCategoryError,
  categoryError,
}) {
  const options = [
    'Category',
    'Food',
    'Drink',
    'Education',
    'Entertainment',
    'Gifts',
    'Loan',
    'Housing',
    'Shopping',
    'Pet',
    'Subscriptions',
    'Health',
    'Travel',
  ];

  const handleCategoryOnChange = (e) => {
    setCategory(e.target.value);
    //Remove error if any other option than category is selected
    if (e.target.value !== 'Category') {
      setCategoryError('');
    }
    // console.log(e.target.value);
  };

  return (
    <div className="form-field form-field__category">
      <select
        value={category}
        name="category"
        id="category"
        onChange={handleCategoryOnChange}
      >
        {options.map((option, index) => (
          <option value={option} key={`cat-${index}`}>
            {option}
          </option>
        ))}
      </select>
      {categoryError}
    </div>
  );
}

export default TransactionFormCategory;
