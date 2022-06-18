const Search = () => {
  return (
    <form className="d-flex justify-content-center my-2">
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
