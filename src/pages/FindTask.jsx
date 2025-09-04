import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const FindTask = () => {
  const tasks = [
    "Giao hàng",
    "Dọn dẹp",
    "Thiết kế",
    "Gia sư",
    "Nhiếp ảnh",
    "Sự kiện",
  ];

  return (
    <div className="find-task">
      {/* Header */}
      <div className="header">
        <Link to="/" className="logo">STACKIN_</Link>
        <div className="user-icon">👤</div>
      </div>

      {/* Banner + Search */}
      <div className="top-section">
        <div className="banner">BANNER QUẢNG CÁO</div>
        <div className="search-box">
          <h3>Kiếm tiền theo cách của bạn</h3>
          <div className="form-group">
            <label>Chọn khu vực</label>
            <input type="text" placeholder="TP Hồ Chí Minh" />
          </div>
          <div className="form-group">
            <label>Danh sách task</label>
            <input type="text" placeholder="Chọn task" />
          </div>
          <p>........ VND/ giờ</p>
        </div>
      </div>

      {/* Task List */}
      <h3 className="task-title">Danh sách Task</h3>
      <div className="task-list">
        {tasks.map((task, index) => (
          <div className="task-item" key={index}>
            {task}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindTask;
