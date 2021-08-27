import React, { useState } from "react";

const AddContact = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please enter a name");
      return;
    } else {
      onAdd({ name, phonenumber });
    }

    setName("");
    setPhoneNumber("");
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Name</label>
        <input
          type="text"
          placeholder="Add Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>

      <div className="form-control">
        <label>Phone Number</label>
        <input
          type="text"
          placeholder="Add Phone Number"
          value={phonenumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        ></input>
      </div>

      <input
        className="btn btn-block"
        type="submit"
        value="Add to Contact List"
      ></input>
    </form>
  );
};

export default AddContact;
