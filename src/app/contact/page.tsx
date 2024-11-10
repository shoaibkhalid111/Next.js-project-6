import React from 'react'
import { MdEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const contact = () => {
  return (
    <>
      <div id='contact'>
        <div className='grid'>
          <div className='space-y-8'>
            <h2>
              Contact Me
            </h2>
            <p>
              We are always here to help you. Please feel free to contact us by submitting the form.
            </p>
            <div className='flex'>
              <MdEmail size={30} /> xyz@gmail.com
            </div>
            <div className='flex'>
              <BsTelephone size={30} /> (021) 000-0000
            </div>
          </div>

         
          <div className='space-y-8'>
            <div className='flex flex-col gap-1'>
              <label htmlFor='name'><b>Name :</b></label>
              <input type="text" id='name' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='email'><b>Email :</b></label>
              <input type="email" id='email' />
            </div>
            <div className='flex flex-col gap-1'>
              <label htmlFor='msg'><b>Message :</b></label>
              <textarea id='msg' rows={8}></textarea>
            </div>
            <button>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
