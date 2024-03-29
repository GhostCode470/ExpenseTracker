import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseTotal from "./components/ExpenseTotal";
import { ExpenseProvider } from "./components/context/ExpenseContext";
import "./App.css";

const App = () => {
  return (
    <ExpenseProvider>
      <div>
        <h1 className="title">Gestionnaire de dépense</h1>
        <ExpenseForm />
        <ExpenseList />
        <ExpenseTotal />
      </div>
    </ExpenseProvider>
  );
};

export default App;
