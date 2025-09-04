import { Link } from "react-router-dom";
import "../App.css";

const Login = () => {
  return (
    <>
      {/* Header trên cùng */}
      <div className="header">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "#004080" }}>
            STACKIN_
          </Link>
        </div>
        <div className="title">Đăng Nhập</div>
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
            <h3>Đăng Nhập</h3>
            <input type="text" placeholder="Email hoặc tên đăng nhập" />
            <input type="password" placeholder="Mật khẩu" />
            <button className="btn-submit">ĐĂNG NHẬP</button>
            <div className="extra-links">
              <p>
                Bạn chưa có tài khoản? <a href="/register">Đăng ký</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
