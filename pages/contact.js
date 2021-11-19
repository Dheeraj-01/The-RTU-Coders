import React, { useEffect, useRef, useState } from 'react'
import { submitContactMessage } from '../services';

const Contact = () => {

  const [error, setError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const messaeEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();


  const handleContactSubmission = () => {
    setError(false);
    const name = nameEl.current.value;
    const message = messaeEl.current.value;
    const email = emailEl.current.value;
    if (!message || !name || !email) {
      setError(true);
      return;
    }

    const messageObj = {
      name,
      email,
      message,
    };

    console.log(messageObj);
    submitContactMessage(messageObj).then((res) => {
      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);

    })


  }

  return (
    <div>
      <div className=" text-gray-100 px-10 mb-52  rounded-lg">
        <div
          className="max-w-screen-xl mt-24 px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-gray-100 text-gray-900 rounded-lg shadow-lg">
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Lets talk about everything!</h2>
              <div className="text-gray-700 mt-8">
                Hate forms? Send us an{' '}
                <a href="mailto:thertucoders@gmail.com" target="_blank">
                  <span className="underline cursor-pointer">email</span></a>
                {' '}instead.
              </div>
              <p><b>Email:</b> thertucoders@gmail.com</p>
              <p><b>Address:</b> Rajasthan Technical University Kota, Rajasthan 324601</p>
              <p><b>PhoneNumber:</b> 9079364447</p>
            </div>
            <div className="mt-8 text-center">

            </div>
          </div>
          <div className="">
            <div>
              <span className="uppercase text-sm text-gray-600 font-bold">Full Name</span>
              <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" placeholder="" ref={nameEl} />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
              <input className="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text" ref={emailEl} />
            </div>
            <div className="mt-8">
              <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
              <textarea
                className="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" ref={messaeEl}></textarea>
            </div>
            <div className="mt-8">
              {error && <div className="text-red-500 mb-4 font-bold" >All fields are required</div>}
              {showSuccessMessage && <div className="text-green-600 mb-4 font-bold" >Your message submitted successfully!</div>}
              <button
                className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline" onClick={handleContactSubmission}>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
