import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function BankLink() {
  return (
    <div className="banklink-page">
      {/* Header */}
      <header className="bk-header">
        <Link to="/" className="bk-logo">STACKIN_</Link>
        <div className="bk-right">
          <div className="bk-avatar" aria-label="Tài khoản" />
        </div>
      </header>

      {/* Card */}
      <main className="bk-card">
        <h2 className="bk-title">Liên kết tài khoản ngân hàng</h2>

        <div className="bk-body">
          {/* Cột trái màu xanh */}
          <div className="bk-left">
            <span className="bk-left-text">
              Chạy<br />các<br />ngân<br />hàng<br />đã<br />liên<br />kết
            </span>
          </div>

          {/* Form bên phải */}
          <form className="bk-form" onSubmit={(e) => e.preventDefault()}>
            <label className="bk-label">
              Hệ thống ngân hàng
              <input className="bk-input" placeholder="Hệ thống ngân hàng" />
            </label>

            <label className="bk-label">
              STK ngân hàng
              <input className="bk-input" placeholder="STK ngân hàng" />
            </label>

            <label className="bk-label">
              Tên chủ thẻ (in hoa, không dấu)
              <input className="bk-input" placeholder="TÊN CHỦ THẺ" />
            </label>

            <button className="bk-btn" type="submit">Tiếp tục</button>
          </form>
        </div>
      </main>
    </div>
  );
}
