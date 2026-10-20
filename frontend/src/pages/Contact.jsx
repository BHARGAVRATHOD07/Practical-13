function Contact() {
  return (
    <div className="container">
      <h1>Contact</h1>

      <p className="subtitle">
        Get in touch with us for any questions or feedback.
      </p>

      <form className="task-form">
        <input
          type="text"
          placeholder="Enter your name"
        />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <textarea
          placeholder="Enter your message"
        />

        <button type="button">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;