import React from "react";

const Edit = () => {
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input type="text" placeholder="Add Name"></input>
      </div>

      <div className="form-control">
        <label>Phone Number</label>
        <input type="text" placeholder="Add Phone Number"></input>
      </div>

      <input className="btn btn-block" type="submit" value="Update"></input>
    </form>
  );
};

export default Edit;
