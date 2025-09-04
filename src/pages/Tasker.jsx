import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Tasker = () => {
  return (
    <div className="dashboard">
      {/* Header */}
      <div className="header">
        {/* Logo quay về trang chủ */}
        <div className="logo">
          <Link to="/">STACKIN_</Link>
        </div>
        <div className="right-menu">
          {/* Hỗ trợ sang trang hỗ trợ */}
          <Link to="/support" className="support">
            Hỗ trợ
          </Link>
          {/* Icon thông báo */}
          <Link to="/notifications" className="icon">
            🔔
          </Link>
          {/* Icon profile */}
          <Link to="/profile" className="icon">
            👤
          </Link>
        </div>
      </div>

      {/* Welcome */}
      <div className="welcome">
        <h3>Chào mừng, Tasker!</h3>
        <p>Trang quản lý cho người làm task</p>
      </div>

      {/* Bộ lọc */}
      <div className="filters">
        <button className="filter-btn">Những công việc gần bạn</button>
        <button className="filter-btn">Tự động sắp xếp theo khoảng cách</button>
        <button className="filter-btn">Lọc</button>
      </div>

      {/* Bản đồ */}
      <div className="map-box">
        <p>Bản đồ (placeholder)</p>
      </div>

      {/* Thống kê */}
      <div className="stats">
        <div className="stat-item">
          <p>Tổng số task / ngày</p>
          <h4>0</h4>
        </div>
        <div className="stat-item">
          <p>Tổng số task / tuần</p>
          <h4>0</h4>
        </div>
        <div className="stat-item">
          <p>Tổng số task / tháng</p>
          <h4>0</h4>
        </div>
      </div>

      {/* Nút hành động */}
      <div className="actions">
        <Link to="/tasks" className="btn-primary">
          Nhận task mới
        </Link>
        <Link to="/history" className="btn-secondary">
          Lịch sử chi tiết
        </Link>
      </div>

      {/* Task lists */}
      <div className="task-section">
        <h4>Task đang hoạt động</h4>
        <div className="task-box"></div>
      </div>

      <div className="task-section">
        <h4>Task hoàn thành</h4>
        <div className="task-box"></div>
      </div>
    </div>
  );
};

export default Tasker;
