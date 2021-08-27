import React from "react";

const Search = ({ onChange }) => {
  return (
    <div className="form-group row">
      <div className="col-xs-4">
        <input
          onChange={onChange}
          className="form-control"
          placeholder="Search Contact"
        ></input>
      </div>
    </div>
  );
};

export default Search;
