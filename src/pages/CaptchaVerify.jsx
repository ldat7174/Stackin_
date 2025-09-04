import { Link } from "react-router-dom";
import "../App.css";

export default function CaptchaVerify() {
  return (
    <div className="captcha-container">
      <div className="captcha-header">
        <Link to="/" className="logo">
          STACKIN_
        </Link>
      </div>

      <div className="captcha-box">
        <h2 className="captcha-title">Xác thực bằng Captcha</h2>
        <p className="captcha-subtitle">Kéo thu mảnh ghép để hoàn thành bức ảnh</p>

        <div className="captcha-image">Hình xác thực</div>

        <div className="captcha-slider">
          <div className="slider-btn">➜</div>
        </div>
      </div>
    </div>
  );
}
