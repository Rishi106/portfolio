import React, { useState } from 'react';
import emailjs from '@emailjs/browser'; // Correct import
import './FormStyle.css';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_9m2ulds'; // Replace with your EmailJS Service ID
    const templateID = 'template_qvkseiy'; // Replace with your EmailJS Template ID
    const publicKey = 'NEa9MqCOb51jDLWW8'; // Replace with your EmailJS Public Key

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Rishikesh', // Your name or recipient's name
      subject: subject,
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey) // Use emailjs.send
      .then(
        (response) => {
          console.log('Email sent successfully!', response);
          alert('Message sent successfully!');
          // Clear the form after successful submission
          setName('');
          setEmail('');
          setSubject('');
          setMessage('');
        },
        (error) => {
          console.log('Failed to send email:', error);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit} className="emailForm">
        <label>Your Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Subject</label>
        <input
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          required
        />
        <label>Message</label>
        <textarea
          rows="6"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
          required
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;