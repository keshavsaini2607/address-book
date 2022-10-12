import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";

const Form = ({ setCreating, isEdit, setIsEdit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset
  } = useForm();

  const submit = (data) => {
    const contacts = localStorage.getItem("contacts");
    if(contacts) {
      const oldContacts = JSON.parse(contacts);
      oldContacts.push(data);
      localStorage.setItem("contacts", JSON.stringify(oldContacts));
    } else {
      const newContact = JSON.stringify([data]);
      localStorage.setItem("contacts", newContact)
    }
    reset()
    window.location.reload()
  };


  return (
    <div className="p-6">
      <div className="flex items-center">
        <IoCloseSharp
          size="20px"
          className="mr-3 cursor-pointer"
          onClick={() => {
            setCreating(false);
            setIsEdit(false);
          }}
        />
        <h1 className="text-lg font-semibold">
          {isEdit ? "Edit" : "Create"} Contact
        </h1>
      </div>
      <form
        className="flex flex-wrap justify-between"
        onSubmit={handleSubmit(submit)}
      >
        <div className="input-container">
          <label htmlFor="fullname">Full Name*</label>
          <input
            placeholder="Full Name"
            name="fullname"
            id="fullname"
            className="input"
            {...register("fullname", { required: "Name is required" })}
          />
          {errors.fullname && (
            <small className="text-red-500">{errors.fullname.message}</small>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="email">Email*</label>
          <input
            placeholder="Email"
            name="email"
            id="email"
            type="email"
            className="input"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          {errors.email && (
            <small className="text-red-500">{errors.email.message}</small>
          )}
        </div>
        <div className="input-container">
          <label className="col-form-label">Phone:</label>
          <input
            type="text"
            className={`input`} 
            placeholder="Phone number"
            {...register("phone", {
              required: "Phone is Required",
              pattern: {
                value:
                  /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                message: "Invalid phone no",
              },
            })}
            onKeyUp={() => {
              trigger("phone");
            }}
          />
          {errors.phone && (
            <small className="text-red-500">{errors.phone.message}</small>
          )}
        </div>
        <div className="input-container">
          <label htmlFor="birthday">Birthday*</label>
          <input
            placeholder="Birthday"
            name="birthday"
            id="birthday"
            className="input"
            type="date"
            {...register("birthday", { required: "Birthday is required" })}
          />
          {errors.birthday && (
            <small className="text-red-500">{errors.birthday.message}</small>
          )}
        </div>
        <div className="flex justify-end w-full">
          <button
            className="p-4 bg-blue-500 text-white px-8 rounded-full mt-10"
            type="submit"
          >
            {isEdit ? "Update" : "Save"} Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
