function Contact() {
  return (
    <section className="card">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;