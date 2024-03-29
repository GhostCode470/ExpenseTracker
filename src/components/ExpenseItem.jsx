const ExpenseItem = ({ expense }) => {
  return (
    <div className="expense-item">
      <h3>{expense.title}</h3>
      <p>
        <strong>Montant:</strong> €{expense.amount}
      </p>
      <p>
        <strong>Catégorie:</strong> {expense.category}
      </p>
    </div>
  );
};

export default ExpenseItem;
