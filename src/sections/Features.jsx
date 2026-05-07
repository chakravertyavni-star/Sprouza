import "../styles/Features.css";

import {
  BrainCircuit,
  MonitorPlay,
  Gamepad2,
  Network,
} from "lucide-react";

function Features() {
  return (
    <section className="features">

      <div className="features-header">

        <p>WHY THIS PLATFORM IS DIFFERENT</p>

        <h2>
          Not Just Notes. <br />
          Experience Concepts.
        </h2>

      </div>

      <div className="features-grid">

        {/* Card 1 */}
        <div className="feature-card">

          <div className="feature-icon">
            <BrainCircuit size={34} />
          </div>

          <h3>Visual Learning</h3>

          <p>
            Understand difficult concepts through animations,
            simulations and interactive visuals.
          </p>

        </div>

        {/* Card 2 */}
        <div className="feature-card">

          <div className="feature-icon">
            <MonitorPlay size={34} />
          </div>

          <h3>Interactive Simulations</h3>

          <p>
            Watch Operating Systems, Networks and Algorithms
            work in real-time.
          </p>

        </div>

        {/* Card 3 */}
        <div className="feature-card">

          <div className="feature-icon">
            <Gamepad2 size={34} />
          </div>

          <h3>Gamified Experience</h3>

          <p>
            Learn through challenges, progression,
            streaks and visual rewards.
          </p>

        </div>

        {/* Card 4 */}
        <div className="feature-card">

          <div className="feature-icon">
            <Network size={34} />
          </div>

          <h3>Real Understanding</h3>

          <p>
            Focus on intuition and understanding —
            not memorization.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Features;