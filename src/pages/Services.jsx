import { Link } from "react-router-dom";
import "../App.css";

export default function Service() {
  return (
    <div className="home-page">
      {/* Header */}
      <header className="header">
        <h1 className="logo">
          <Link to="/">STACKIN_</Link>
        </h1>
        <nav className="nav">
          <Link to="/login">Đăng ký/Đăng nhập</Link>
          <Link to="/tasker" className="highlight">
            TRỞ THÀNH TASKER
          </Link>
        </nav>
      </header>

      {/* Banner */}
      <div className="banner">BANNER QUẢNG CÁO</div>

      {/* Section */}
      <section className="tasker-section">
        <h2>Thuê Tasker đáng tin cậy</h2>
        <div className="tasker-grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="tasker-card"></div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">@2025 STACKIN_</footer>
    </div>
  );
}
