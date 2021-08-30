import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Contacts from "./components/Contacts";
import AddContact from "./components/AddContact";
import Search from "./components/Search";
import "./App.css";

const App = () => {
  const [showAddContact, setshowAddContact] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      const taskFromServer = await fetchContacts();
      setContacts(taskFromServer);
    };
    getContacts();
  }, []);

  const fetchContacts = async () => {
    const res = await fetch("http://localhost:5000/contacts");
    const data = await res.json();
    console.log(data);
    return data;
  };

  const addContact = async (contact) => {
    console.log(contact);
    const res = await fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    const data = await res.json();
    setContacts([...contacts, data]);

    //const id=Math.floor(Math.random()*1000)+1
    //const newContact={id,...contact}
    //setContacts([...contacts,newContact])
  };

  const deleteContact = async (id) => {
    await fetch(`http://localhost:5000/contacts/${id}`, {
      method: "DELETE",
    });
    setContacts(
      contacts.filter((contact) => {
        return contact.id !== id;
      })
    );
  };

  const filterbyname = (e) => {
    const searchtermByName = e.target.value;
    const filtercontactsname = document.querySelectorAll("h3");
    filtercontactsname.forEach((contact) => {
      if (
        contact.innerText.toLowerCase().includes(searchtermByName.toLowerCase())
      ) {
        contact.parentElement.style.display = "block";
      } else {
        contact.parentElement.style.display = "none";
      }
    });
  };

  const filterbynumber = (e) => {
    const searchtermByNumber = e.target.value;
    const filtercontactsnumber = document.querySelectorAll("p");
    filtercontactsnumber.forEach((contact) => {
      if (
        contact.innerText
          .toLowerCase()
          .includes(searchtermByNumber.toLowerCase())
      ) {
        contact.parentElement.style.display = "block";
      } else {
        contact.parentElement.style.display = "none";
      }
    });
  };

  return (
    <div className="container">
      <Header
        title="Contact List"
        onAdd={() => setshowAddContact(!showAddContact)}
        showAdd={showAddContact}
      />
      <Search onChange={filterbyname} />
      <Search onChange={filterbynumber} />

      {showAddContact && <AddContact onAdd={addContact} />}
      {contacts.length > 0 ? (
        <Contacts contacts={contacts} onDelete={deleteContact} />
      ) : (
        "No Contact to show"
      )}
    </div>
  );
};

export default App;
