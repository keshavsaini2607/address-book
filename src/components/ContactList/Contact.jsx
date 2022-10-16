import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useWindowSize } from "../../hooks/WindowSize";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

const Contact = ({ setIsEdit, setCreating, contact }) => {
   const windowSize = useWindowSize();
   const [isFavourite, setIsFavourite] = useState(false);

   const saveCurrentContact = () => {
      localStorage.setItem("current-contact", JSON.stringify(contact));
   };

   const checkFavourite = () => {
      const allContacts = localStorage.getItem("contacts");
      const contacts = JSON.parse(allContacts);
      const index = contacts.findIndex((person) => person.id === contact.id);
      setIsFavourite(contacts[index].isFavourite);
   };

   useEffect(() => {
      let attached = true;

      if (attached) {
         checkFavourite();
      }

      return () => {
         attached = false;
      };
   }, []);

   const editFavourite = () => {
      const allContacts = localStorage.getItem("contacts");
      const contacts = JSON.parse(allContacts);

      const index = contacts.findIndex((person) => person.id === contact.id);
      contacts[index].isFavourite = !contacts[index].isFavourite;
      localStorage.setItem("contacts", JSON.stringify(contacts));
      checkFavourite();
      window.location.reload()
   };

   return (
      <div className="p-3 bg-blue-200 rounded-md w-full md:w-full lg:w-[48%] flex items-center justify-between">
         <div className="flex items-center space-x-5">
            <div className="cursor-pointer" onClick={editFavourite}>
               {isFavourite ? (
                  <AiFillStar color="orange" size="20px" />
               ) : (
                  <AiOutlineStar color="orange" size="20px" />
               )}
            </div>
            <FaUserCircle size="40px" />
            <div className="flex flex-col">
               <span className="font-semibold sm:text-md">
                  {contact.fullname}
               </span>
               <span>{contact.email}</span>
            </div>
         </div>
         <span
            className="text-blue-900 text-sm font-bold flex items-center space-x-2 cursor-pointer"
            onClick={() => {
               setCreating(true);
               setIsEdit(true);
               saveCurrentContact();
            }}
         >
            {windowSize.width > 768 && <p>View</p>}
            <AiOutlineArrowRight />
         </span>
      </div>
   );
};

export default Contact;
