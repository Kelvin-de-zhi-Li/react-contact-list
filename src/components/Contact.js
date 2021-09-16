import React from "react";

const Contact = ({ contact, onDelete }) => {
  return (
    <div className="contact">
      <h3>
        {contact.name}
        <i
          className="fas fa-trash-alt"
          onClick={() => onDelete(contact.id)}
        ></i>
        <i class="fas fa-edit"></i>
      </h3>
      <p>{contact.phonenumber}</p>
    </div>
  );
};

export default Contact;
