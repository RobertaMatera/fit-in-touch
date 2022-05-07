const Search = () => {
  return (
    <form className="d-flex my-2 me-4">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn my-search-btn" type="submit">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default Search;
