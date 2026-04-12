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
        <div className="phone">
          <div className="phone-screen">
            <div className="ad-header">
              <div className="ad-avatar">AK</div>
              <div>
                <div className="ad-name">Ahmed's Restaurant</div>
                <div className="ad-sub">Sponsored · Karachi</div>
              </div>
            </div>
            <div className="ad-image">🌙</div>
            <div className="ad-content">
              <div className="ad-title">Eid Special Offer</div>
              <div className="ad-desc">30% off your entire order this Eid. Limited time offer.</div>
              <button className="ad-btn">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;