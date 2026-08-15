import { Link } from 'react-router-dom';

const SCHEDULE = [
  {
    day: 'DAY 01 — MATLAB',
    icon: '💻',
    tagline: 'Build the foundation with MATLAB.',
    text: 'Participants will explore the fundamentals of MATLAB through practical, hands-on activities covering computational techniques, data analysis, visualization, and problem-solving. The session is designed to help participants understand how MATLAB can be used to approach technical problems, analyze data, and turn concepts into practical solutions.',
  },
  {
    day: 'DAY 02 — SIMULINK',
    icon: '⚙️',
    tagline: 'Bring systems to life with Simulink.',
    text: 'Participants will be introduced to the fundamentals of Simulink and learn how to model, simulate, and analyze dynamic systems using its intuitive block-diagram-based environment. Through guided activities, participants will gain an understanding of how system behavior can be represented, tested, and analyzed through simulation.',
  },
];

const EXPECTATIONS = [
  { icon: '💻', title: 'Hands-on MATLAB & Simulink', text: 'Practical experience with computational & simulation tools.' },
  { icon: '⚙️', title: 'Explore Real-World Applications', text: 'Discover MATLAB & Simulink across engineering and research.' },
  { icon: '🧠', title: 'Develop Industry-Relevant Skills', text: 'Build analytical, modeling & problem-solving skills.' },
  { icon: '🤝', title: 'Network & Collaborate', text: 'Connect with peers, enthusiasts, and professionals.' },
  { icon: '🔧', title: 'Learn Through Guided Activities', text: 'Participate in structured activities designed to turn concepts into practical, applicable knowledge.' },
  { icon: '🎁', title: 'Exclusive MATLAB Swags', text: 'Exciting goodies and merchandise for participants.' },
  { icon: '🍪', title: 'Snacks & Refreshments', text: 'Enjoy light refreshments throughout the event.' },
];

export default function EventDetails() {
  return (
    <div className="details-page">
      <section className="hero">
        <h1 className="hero-title">
          MATLAB
          <br />
          WORKSHOP
        </h1>
        <p className="tagline">[INITIALISED!!!!]</p>
        <p className="status">
          REGISTRATION <span className="status-open">OPEN!</span> NOW
        </p>

        <div className="info-bar">
          <div>
            <span className="info-label">VENUE</span>
            <span className="info-value">Campus 12, LT 1 &amp; 2</span>
          </div>
          <div>
            <span className="info-label">TIME</span>
            <span className="info-value">10 A.M. to 1 P.M.</span>
          </div>
          <div>
            <span className="info-label">DATE</span>
            <span className="info-value">22nd &amp; 23rd August, 2026</span>
          </div>
        </div>
      </section>

      <section className="schedule">
        {SCHEDULE.map((d) => (
          <div className="schedule-card" key={d.day}>
            <h3>{d.icon} {d.day}</h3>
            <p className="schedule-tagline">{d.tagline}</p>
            <p className="schedule-text">{d.text}</p>
          </div>
        ))}
      </section>

      <section className="expect">
        <h2>What to Expect</h2>
        <div className="expect-grid">
          {EXPECTATIONS.map((item) => (
            <div className="expect-item" key={item.title}>
              <span className="expect-icon">{item.icon}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <Link to="/register" className="register-btn">REGISTER NOW →</Link>
      </section>
    </div>
  );
}
