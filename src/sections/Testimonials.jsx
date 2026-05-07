import "../styles/Testimonials.css";

const testimonials = [
  {
    name: "Arjun",
    role: "2nd Year CSE",
    text: "Finally understood recursion after struggling for months.",
  },

  {
    name: "Kritika",
    role: "3rd Year CSE",
    text: "Operating Systems finally feels visual instead of theoretical.",
  },

  {
    name: "Rohan",
    role: "1st Year CSE",
    text: "This makes learning Computer Science genuinely addictive.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">

      <div className="testimonials-header">

        <p>LOVED BY STUDENTS</p>

        <h2>
          Finally, CSE <br />
          Makes Sense.
        </h2>

      </div>

      <div className="testimonials-grid">

        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>

            <div className="quote">
              “
            </div>

            <p className="testimonial-text">
              {item.text}
            </p>

            <div className="testimonial-user">

              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;