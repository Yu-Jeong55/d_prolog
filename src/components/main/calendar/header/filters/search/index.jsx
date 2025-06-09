import './index.scss';

function SearchFilter({ setSearchTerm }) {
  function handleSearchChange(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <input
      type="text"
      className="search-filter"
      placeholder="search ..."
      onChange={handleSearchChange}
    />
  );
}

export default SearchFilter;
