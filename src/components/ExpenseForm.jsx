import { useState } from "react";
import { useExpenseContext } from "./context/ExpenseContext";

const ExpenseForm = () => {
  const { dispatch } = useExpenseContext();
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Alimentation");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_EXPENSE", expense: { title, amount, category } });
    setTitle("");
    setAmount("");
    setCategory("Alimentation");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input is-link"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nom"
      />
      <input
        className="input is-link"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Montant"
      />

      <div className="select is-link">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Alimentation">Alimentation</option>
          <option value="Logement">Logement</option>
          <option value="Transport">Transport</option>
          <option value="Divertissement">Divertissement</option>
          <option value="Santé">Santé</option>
          <option value="Éducation">Éducation</option>
          <option value="Autres">Autres</option>
        </select>
      </div>
      <button className="button" type="submit">
        Ajouter une dépense
      </button>
    </form>
  );
};

export default ExpenseForm;
