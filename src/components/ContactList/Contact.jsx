import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {AiOutlineArrowRight} from 'react-icons/ai';

const Contact = ({ setIsEdit, setCreating, contact }) => {

  const saveCurrentContact = () => {
    localStorage.setItem("current-contact", JSON.stringify(contact));
  }

  return (
    <div
      className="p-3 bg-blue-200 rounded-md w-[48%] flex items-center justify-between cursor-pointer"
      onClick={() => {
        setCreating(true);
        setIsEdit(true);
        saveCurrentContact();
      }}
    >
      <div className="flex items-center space-x-5">
        <FaUserCircle size="40px" />
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{contact.fullname}</span>
          <span>{contact.email}</span>
        </div>
      </div>
      <span className="text-blue-900 text-sm font-bold flex items-center space-x-2">
        <p>View Contact</p>
        <AiOutlineArrowRight />
      </span>
    </div>
  );
};

export default Contact;
