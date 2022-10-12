import React from 'react'
import Contact from './Contact'

const ContactList = ({setCreating, setIsEdit, contacts}) => {
  return (
    <div className='p-4 flex flex-wrap gap-5 justify-between'>
    <div className='w-full flex justify-end'>
        <button className='bg-[#0052CC] px-6 py-3 text-white rounded-md' onClick={() => setCreating(true)}>
            Create New
        </button>
    </div>
        {
          contacts.map((contact) => <Contact setCreating={setCreating} setIsEdit={setIsEdit} contact={contact} />)
        }
    </div>
  )
}

export default ContactList