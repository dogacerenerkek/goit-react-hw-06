import css from "./SearchBox.module.css";
function SearchBox({ value, onFilter }) {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>

      <input
  className={css.input}
  type="text"
  value={value}
  onChange={(e) => onFilter(e.target.value)}
/>
    </div>
  );
}

export default SearchBox;