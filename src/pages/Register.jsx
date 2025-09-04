import { Link } from "react-router-dom";
import "../App.css";

const Register = () => {
  return (
    <>
      {/* Header trên cùng */}
      <div className="header">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "#004080" }}>
            STACKIN_
          </Link>
        </div>
        <div className="title">Đăng Ký</div>
      </div>

      {/* Nội dung */}
      <div className="auth-container">
        {/* Banner bên trái */}
        <div className="auth-banner">
          <h2>BANNER QUẢNG CÁO</h2>
        </div>

        {/* Form bên phải */}
        <div className="auth-form">
          <div className="form-box">
            <h3>Đăng Ký</h3>
            <input type="text" placeholder="Tên đăng nhập" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Mật khẩu" />
            <input type="password" placeholder="Nhập lại mật khẩu" />
            <button className="btn-submit">ĐĂNG KÝ</button>
            <div className="extra-links">
              <p>
                Bạn đã có tài khoản? <a href="/login">Đăng nhập</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
