const Search = () => {
  return (
    <form className="d-flex my-2 me-5">
      <input
        className="my-form-control"
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
