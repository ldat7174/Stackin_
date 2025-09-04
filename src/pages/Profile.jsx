import React, { useState } from "react";
import "../App.css";

export default function Profile() {
  const [avatar, setAvatar] = useState("https://via.placeholder.com/120");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setAvatar(imgURL);
    }
  };

  return (
    <div className="profile-page">
      {/* Header */}
      <header className="header">
        <h1 className="logo">STACKIN_</h1>
      </header>

      <div className="profile-container">
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="avatar">
            <img src={avatar} alt="Avatar" className="avatar-img" />
            <label className="upload-btn">
              Chọn ảnh
              <input type="file" accept="image/*" onChange={handleImageChange} />
            </label>
          </div>
          <button className="sidebar-btn">Hồ sơ người dùng</button>
          <button className="sidebar-btn">
            <a href="/CCCDVerify">Xác thực người dùng</a>
          </button>
          <button className="sidebar-btn">Email</button>
          <button className="sidebar-btn">Bảo mật</button>
          <button className="sidebar-btn">
            <a href="/BankLink">Liên kết ngân hàng</a>
          </button>
        </aside>

        {/* Main content */}
        <main className="profile-content">
          <h2>Hồ sơ</h2>
          <form className="profile-form">
            <label>
              First name
              <input type="text" placeholder="Nhập tên" />
            </label>
            <label>
              Họ và tên
              <input type="text" placeholder="Nhập họ tên" />
            </label>
            <label>
              Last name
              <input type="text" placeholder="Nhập last name" />
            </label>
            <label>
              Số điện thoại
              <input type="text" placeholder="Nhập số điện thoại" />
            </label>
          </form>
        </main>
      </div>
    </div>
  );
}
