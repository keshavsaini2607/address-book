import React, { useEffect, useState } from "react";
import { CSVLink } from "react-csv";
import { getContacts } from "../../helpers";
import { parse } from "papaparse";

const Navbar = () => {
   const [contacts, setContacts] = useState([]);
   const [importedContacts, setImportedContacts] = useState([]);

   useEffect(() => {
      if (importedContacts) {
         const c = contacts;
         for (var i = 0, len = c.length; i < len; i++) {
            for (var j = 0, len2 = importedContacts.length; j < len2; j++) {
               if (c[i].id === importedContacts[j].id) {
                  importedContacts.splice(j, 1);
                  len2 = importedContacts.length;
               }
            }
         }
         console.log({ importedContacts });
         importedContacts.map((person) => {
            if (person.isFavourite === "false") person.isFavourite = false;
            else person.isFavourite = true;
         });
         const newContacts = [...contacts, ...importedContacts];
         if (newContacts.length > 0) {
            localStorage.setItem("contacts", JSON.stringify(newContacts));
            window.location.reload();
         }
      }
   }, [importedContacts]);

   const headers = [
      {
         label: "id",
         key: "id",
      },
      {
         label: "email",
         key: "email",
      },
      {
         label: "fullname",
         key: "fullname",
      },
      {
         label: "birthday",
         key: "birthday",
      },
      {
         label: "phone",
         key: "phone",
      },
      {
         label: "isFavourite",
         key: "isFavourite",
      },
   ];

   const csvLink = {
      filename: "contacts.csv",
      headers: headers,
      data: contacts,
   };

   useEffect(() => {
      const localContacts = getContacts();
      if (localContacts) {
         setContacts(localContacts);
      }
   }, []);

   return (
      <nav className="w-full md:w-[70%] mx-auto p-4 flex justify-between items-center">
         <span className="text-lg md:text-2xl font-bold text-white heading">
            Contact Book
         </span>
         <div className="flex space-x-5 items-center">
            <span>
               <label
                  htmlFor="import"
                  className="border-[1px] border-white px-6 py-3 rounded-md text-white cursor-pointer"
               >
                  Import Contacts
               </label>
               <input
                  type="file"
                  className="hidden"
                  id="import"
                  onChange={(e) =>
                     Array.from(e.target.files)
                        .filter((file) => file.type === "text/csv")
                        .forEach(async (file) => {
                           const text = await file.text();
                           const result = parse(text, { header: true });
                           setImportedContacts(result.data);
                        })
                  }
               />
            </span>
            <CSVLink {...csvLink}>
               <button className="bg-blue-500 px-6 py-3 rounded-md text-white">
                  Export Contacts
               </button>
            </CSVLink>
         </div>
      </nav>
   );
};

export default Navbar;
