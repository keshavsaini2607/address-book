import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "../../hooks/WindowSize";
import Contact from "./Contact";

const ContactList = ({ setCreating, setIsEdit, contacts }) => {
   const [filteredContacts, setFilteredContacts] = useState([]);
   const searchRef = useRef("");
   const { width } = useWindowSize();

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
      const filtered = contacts.filter(
         (contact) =>
            contact.fullname.toLocaleLowerCase().includes(query) ||
            contact.email.toLocaleLowerCase().includes(query) ||
            contact.phone.toLocaleLowerCase().includes(query)
      );
      setFilteredContacts(filtered);
   };

   return (
      <div className="p-4 flex flex-wrap gap-5 justify-between">
         <div className="w-full flex justify-end">
            <input
               placeholder="Search by name, email, phone number"
               className="w-[80%] px-5 rounded-md border-[1px] border-gray-400 mr-2 md:w-[35%]"
               ref={searchRef}
               onChange={() => search(searchRef.current.value)}
            />
            <button
               className="bg-[#0052CC] px-4 py-2 text-white rounded-md"
               onClick={() => setCreating(true)}
            >
               {width > 768 ? (
                  "Create New"
               ) : (
                  <span className="text-3xl">+</span>
               )}
            </button>
         </div>
         <div className="w-full">
            <h1 className="text-2xl">Favourites</h1>
         </div>
         <div className="w-full flex justify-between flex-wrap gap-5">
            {filteredContacts.map((contact) => (
               <React.Fragment key={contact.id}>
                  {contact.isFavourite ? (
                     <Contact
                        setCreating={setCreating}
                        setIsEdit={setIsEdit}
                        contact={contact}
                     />
                  ) : null}
               </React.Fragment>
            ))}
         </div>
         <div className="w-full">
            <hr />
         </div>
         {filteredContacts.map((contact) => (
            <React.Fragment key={contact.id}>
               {!contact.isFavourite ? (
                  <Contact
                     setCreating={setCreating}
                     setIsEdit={setIsEdit}
                     contact={contact}
                  />
               ) : null}
            </React.Fragment>
         ))}
      </div>
   );
};

export default ContactList;
