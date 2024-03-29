import { useExpenseContext } from "./context/ExpenseContext";

const ExpenseTotal = () => {
  const { state } = useExpenseContext();

  const categoryTotals = state.expenses.reduce((totals, expense) => {
    const { category, amount } = expense;
    totals[category] = (totals[category] || 0) + parseFloat(amount);
    return totals;
  }, {});

  const totalExpenses = state.expenses.reduce(
    (total, expense) => total + parseFloat(expense.amount),
    0
  );

  return (
    <div>
      <h2>Total des dépenses par catégorie</h2>
      <ul>
        {" "}
        <strong>
          {Object.entries(categoryTotals).map(([category, total]) => (
            <li key={category}>
              {category}: €{total.toFixed(2)}
            </li>
          ))}
        </strong>
      </ul>

      <h2>Total global des dépenses</h2>
      <p>
        <strong className="total">Total: €{totalExpenses.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default ExpenseTotal;
