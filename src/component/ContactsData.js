import React, { useState } from 'react';
import './ContactsData.css';

const ContactsData = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>

      <div className="contact-container">
        {/* Contact Details */}
        <div className="contact-details">
          <h3>Let's work together</h3>
          <p>
            I'm currently available for freelance work and exciting opportunities. Feel free to reach out if you have a
            project in mind or just want to connect!
          </p>
          <ul>
            <li>
              <span role="img" aria-label="email">
                📧
              </span>{' '}
              errishi545@gmail.com
            </li>
            <li>
              <span role="img" aria-label="phone">
                📞
              </span>{' '}
              9381888246
            </li>
            <li>
              <span role="img" aria-label="location">
                📍
              </span>{' '}
              Hyderabad, India
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
          <h3>Get in Touch</h3>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactsData;