import "../styles/Subjects.css";

const subjects = [
  "Data Structures & Algorithms",
  "Operating Systems",
  "DBMS",
  "Computer Networks",
  "Object Oriented Programming",
  "Computer Architecture",
  "Compiler Design",
  "Artificial Intelligence",
];

function Subjects() {
  return (
    <section className="subjects">

      <div className="subjects-header">

        <p className="subjects-tag">
          Explore Core Subjects
        </p>

        <h2>
          Master The Entire <br />
          BTech CSE Journey
        </h2>

      </div>

      <div className="subjects-grid">

        {subjects.map((subject, index) => (
          <div className="subject-card" key={index}>

            <div className="card-glow"></div>

            <h3>{subject}</h3>

            <p>
              Interactive visual learning experiences,
              simulations and intuitive explanations.
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Subjects;