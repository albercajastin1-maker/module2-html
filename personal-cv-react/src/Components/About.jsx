import profile from "../assets/Profile.jpg";

function About() {
  return (
    <section className="card">
      <h2>About Me</h2>

      <div className="profile-photo">
        <img src={profile} alt="Profile photo" />
      </div>

      <p>
        I'm a second year BSIT student from the University of Science and
        Technology of Southern Philippines.
      </p>

      <p>
        Email:{" "}
        <a href="mailto:Jastinalberca77@gmail.com">
          Jastinalberca77@gmail.com
        </a>
      </p>

      <p>
        GitHub:{" "}
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          github.com
        </a>
      </p>
    </section>
  );
}

export default About;