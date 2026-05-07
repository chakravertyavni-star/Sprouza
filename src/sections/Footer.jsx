import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        <h2>
          Spro<span>uza</span>
        </h2>

        <p>
          The interactive way to master Computer Science.
        </p>

      </div>

      <div className="footer-bottom">

        <span>
          © 2026 CSE.Visualized
        </span>

        <div className="footer-links">

          <a href="/">Home</a>
          <a href="/">Subjects</a>
          <a href="/">Roadmap</a>
          <a href="/">Visualizer</a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;