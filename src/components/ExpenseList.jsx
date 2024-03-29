import { useExpenseContext } from "./context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {
  const { state } = useExpenseContext();

  return (
    <div>
      <h2>Liste des dépenses</h2>
      <ul>
        {state.expenses.map((expense, index) => (
          <li key={index}>
            <ExpenseItem expense={expense} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
