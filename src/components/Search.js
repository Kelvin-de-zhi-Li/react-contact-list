import React from "react";

const Search = ({ onChangeByName, onChangeByNumber }) => {
  return (
    <>
      <div className="form-group">
        <input
          onChange={onChangeByName}
          className="form-control"
          placeholder="Search Contact By Name"
        ></input>
      </div>

      <div className="form-group">
        <input
          onChange={onChangeByNumber}
          className="form-control"
          placeholder="Search Contact By Phonenumber"
        ></input>
      </div>
    </>
  );
};

export default Search;
