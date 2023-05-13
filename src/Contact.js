import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoUrl = `mailto:paulynpen@gmail.com?subject=Inquiry&body=${encodeURIComponent(message)}`;

    // Send email using the provided data (name, email, message)
    // You can use a library like Nodemailer or an API to handle the email sending process

    // Reset form fields after submission
    window.location.href = mailtoUrl;
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <form onSubmit={handleSubmit} className="mx-auto max-w-sm">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-left font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-left font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-left font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
