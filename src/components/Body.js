import { useState } from "react";
// import Dictionary from "./Dictionary";

const Body = ({ onSearch }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <>
      <div className="container-search container">
        <input
          type="text"
          className="search-input form-control"
          value={searchText}
          placeholder="Type Word"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};

export default Body;
