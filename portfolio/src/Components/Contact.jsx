import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_9qb5nfc',
        'template_ouhebxi',
        form.current,
        'v3dn1ay0mxVqWChIp'
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success('Message sent successfully!', {
            position: "top-right", 
            autoClose: 3000,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error('Failed to send the message. Please try again.', {
            position: "top-right", // استخدم النص هنا
            autoClose: 3000,
          });
        }
      );

    e.target.reset();
  };

  return (
    <>
      <section id="contact" className="contact">
        <h2>Contact Us</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="user_name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="user_email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
