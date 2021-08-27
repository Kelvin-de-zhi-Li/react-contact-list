import React from "react";

const Search = ({ onChange }) => {
  return (
    <div className="form-group row">
      <input
        onChange={onChange}
        className="form-control"
        placeholder="Search Contact"
      ></input>
    </div>
  );
};

export default Search;
