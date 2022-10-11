import React from "react";

const Form = () => {
  return (
    <div className="p-6">
      <div>
        <h1 className="text-lg font-semibold">Create Contact</h1>
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
        <button className="p-4 bg-blue-500 text-white px-8 rounded-full mt-10">Save Contact</button>
      </div>
    </div>
  );
};

export default Form;
