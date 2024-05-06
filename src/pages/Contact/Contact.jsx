import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.sendForm(
        "service_7pi1xnr",
        "template_x3ca5xf",
        form.current,
        {
          publicKey: "FU7V8NE-8T_m_BhwE",
        }
      );
      console.log("SUCCESS!", response);
      toast.success("Thank you for contacting us. We'll be in touch soon!");
      form.current.reset();
    } catch (error) {
      console.error("FAILED...", error);
      toast.error("Failed to send your message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-5 my-10 py-8 px-4 shadow-lg rounded-lg">
      <ToastContainer />
      <h1 className="title text-center">Contact <span className='text-indigo-400'>Us </span></h1>
        <p className='text-center'>We would love to hear from you. Fill out the form below and we'll get back to you as soon as possible.</p>
      <form ref={form} onSubmit={sendEmail}>
        <div className="mb-4">
          <label
            htmlFor="user_name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="Input your full name"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="user_email"
            className="block text-gray-700 font-semibold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="Input your email"
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 font-semibold mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="type you message..."
            required
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn glass bg-indigo-600 rounded-full text-white px-10 hover:bg-indigo-800"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
