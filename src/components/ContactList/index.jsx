import React, { useEffect, useRef, useState } from "react";
import Contact from "./Contact";

const ContactList = ({ setCreating, setIsEdit, contacts }) => {
  const [filteredContacts, setFilteredContacts] = useState([]);
  const searchRef = useRef("");

  useEffect(() => {
    let attached = true;
    if (attached) {
      setFilteredContacts(contacts);
    }

    return () => {
      attached = false;
    };
  }, [contacts]);

  const search = (query) => {
    if(!query) {
      setFilteredContacts(contacts);
      return;
    }
    const filtered = filteredContacts.filter(
      (contact) =>
        contact.fullname.includes(query) ||
        contact.email.includes(query) ||
        contact.phone.includes(query)
    );

    setFilteredContacts(filtered)
  };

  return (
    <div className="p-4 flex flex-wrap gap-5 justify-between">
      <div className="w-full flex justify-end">
        <input
          placeholder="Search by name, email, phone number"
          className="w-[35%] px-5 rounded-md border-[1px] border-gray-400 mr-5"
          ref={searchRef}
          onChange={() => search(searchRef.current.value)}
        />
        <button
          className="bg-[#0052CC] px-6 py-3 text-white rounded-md"
          onClick={() => setCreating(true)}
        >
          Create New
        </button>
      </div>
      {filteredContacts.map((contact) => (
        <Contact
          setCreating={setCreating}
          setIsEdit={setIsEdit}
          contact={contact}
        />
      ))}
    </div>
  );
};

export default ContactList;
