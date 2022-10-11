import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Form = ({ setCreating, isEdit, setIsEdit }) => {
  return (
    <div className="p-6">
      <div className="flex items-center">
        <IoCloseSharp
          size="20px"
          className="mr-3 cursor-pointer"
          onClick={() => {
            setCreating(false)
            setIsEdit(false)
          }}
        />
        <h1 className="text-lg font-semibold">
          {isEdit ? "Edit" : "Create"} Contact
        </h1>
      </div>
      <form className="flex flex-wrap justify-between">
        <div className="input-container">
          <label>Full Name*</label>
          <input placeholder="Full Name" className="input" />
        </div>
        <div className="input-container">
          <label>Email*</label>
          <input placeholder="Email" className="input" />
        </div>
        <div className="input-container">
          <label>Mobile*</label>
          <input placeholder="Mobile" className="input" />
        </div>
        <div className="input-container">
          <label>Birthday*</label>
          <input placeholder="Birthday" className="input" type="date" />
        </div>
      </form>
      <div className="flex justify-end">
        <button className="p-4 bg-blue-500 text-white px-8 rounded-full mt-10">
          {isEdit ? "Update" : "Save"} Contact
        </button>
      </div>
    </div>
  );
};

export default Form;
