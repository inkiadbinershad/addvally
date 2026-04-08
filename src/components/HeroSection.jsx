import "./styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="hero-badge">
          PK Pakistan's first AI ad platform
        </p>

        {/* FIXED: no span / no patch */}
        <h1 className="hero-title">
          Run <br />
          on every platform
        </h1>

        <p className="hero-description">
          AI finds your perfect audience. You approve. Addvally auto-posts to
          Meta, Google & TikTok — in Urdu or English.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Get Started Free →
          </button>
          <button className="btn-secondary">
            Watch Demo
          </button>
        </div>
      </div>

      <div className="hero-right">
        {/* keep your existing dashboard/image code here */}
      </div>
    </section>
  );
};

export default HeroSection;