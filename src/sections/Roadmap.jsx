import "../styles/Roadmap.css";

const roadmap = [
  "Programming Fundamentals",
  "Data Structures & Algorithms",
  "Object Oriented Programming",
  "Operating Systems",
  "DBMS",
  "Computer Networks",
  "System Design",
  "Artificial Intelligence",
];

function Roadmap() {
  return (
    <section className="roadmap">

      <div className="roadmap-header">

        <p>YOUR LEARNING JOURNEY</p>

        <h2>
          Learn Computer Science <br />
          Step By Step
        </h2>

      </div>

      <div className="roadmap-container">

        {roadmap.map((item, index) => (
          <div className="roadmap-step" key={index}>

            <div className="step-number">
              {index + 1}
            </div>

            <div className="step-content">

              <h3>{item}</h3>

              <p>
                Interactive visual explanations,
                simulations and hands-on learning.
              </p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Roadmap;