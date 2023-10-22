import "./search-box.style.css"

function SearchBox({ value, handleChange }) {
  return (
    <input
      value={value}
      placeholder="Search robots"
      className="search-box"
      type="search"
      onChange={(e) => handleChange(e)}
    />
  );
}

export default SearchBox;
