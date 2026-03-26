import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost/cv-api/process.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);

          // Optional: clear form after submit
          setName("");
          setEmail("");
          setMessage("");
        } else {
          alert("Unexpected error occurred.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to connect to server.");
      });
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          rows="4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;