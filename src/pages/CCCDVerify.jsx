import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../App.css";

export default function CCCDVerify() {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [agree, setAgree] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleContinue = () => {
    if (frontImage && backImage && agree) {
      navigate("/CaptchaVerify");
    } else {
      alert("Vui lòng tải cả 2 mặt CCCD và đồng ý điều khoản!");
    }
  };

  return (
    <div className="verify-container">
      {/* Header */}
      <header className="verify-header">
        <Link to="/" className="logo">STACKIN_</Link>
      </header>

      <div className="verify-box">
        <div className="image-upload">
          <div className="upload-section">
            <p>Mặt trước</p>
            <div className="upload-preview">
              {frontImage ? <img src={frontImage} alt="Mặt trước" /> : <div className="placeholder"></div>}
            </div>
            <label className="upload-btn">
              Tải hình ảnh
              <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setFrontImage)} />
            </label>
          </div>

          <div className="upload-section">
            <p>Mặt sau</p>
            <div className="upload-preview">
              {backImage ? <img src={backImage} alt="Mặt sau" /> : <div className="placeholder"></div>}
            </div>
            <label className="upload-btn">
              Tải hình ảnh
              <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, setBackImage)} />
            </label>
          </div>
        </div>

        {/* Checkbox */}
        <div className="terms">
          <input type="checkbox" id="terms" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
          <label htmlFor="terms">Tôi đồng ý với <a href="#">điều khoản sử dụng</a>.</label>
        </div>

        {/* Button */}
        <button className="continue-btn" onClick={handleContinue}>Tiếp tục</button>
      </div>
    </div>
  );
}
