import React, { useEffect, useState } from "react";
import emptyImage from "../../assets/add.svg";
import ContactList from "../ContactList";
import Form from "../Form";

const Canvas = ({}) => {
   const [creating, setCreating] = useState(false);
   const [isEdit, setIsEdit] = useState(false);
   const [contacts, setContacts] = useState([]);

   useEffect(() => {
      const contact = localStorage.getItem("contacts");

      if (contact) {
         console.log(JSON.parse(contact));
         setContacts(JSON.parse(contact));
      }
   }, []);

   return (
      <div className="bg-white shadow-lg rounded-md w-full md:w-[70%] md:left-[15%] h-screen md:h-[60vh] md:overflow-y-scroll absolute mt-20">
         {creating ? (
            <Form
               setCreating={setCreating}
               isEdit={isEdit}
               setIsEdit={setIsEdit}
            />
         ) : (
            <React.Fragment>
               {contacts.length > 0 ? (
                  <React.Fragment>
                     <ContactList
                        setCreating={setCreating}
                        setIsEdit={setIsEdit}
                        contacts={contacts}
                     />
                  </React.Fragment>
               ) : (
                  <div className="flex flex-col items-center justify-center p-8">
                     <img
                        src={emptyImage}
                        alt="no contacts"
                        className="w-[20%] h-auto"
                     />
                     <p className="text-xl font-bold mt-5 text-gray-600">
                        You don't have any contacts saved!
                     </p>
                     <button
                        className="bg-blue-600 p-4 rounded-full text-white mt-10 px-8"
                        onClick={() => setCreating((p) => !p)}
                     >
                        Create New Contact
                     </button>
                  </div>
               )}
            </React.Fragment>
         )}
      </div>
   );
};

export default Canvas;
