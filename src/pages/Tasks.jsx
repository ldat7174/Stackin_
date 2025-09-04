import React from "react";
import "../App.css";

const tasks = [
  { id: 1, title: "Giao hàng nội thành HCM", category: "Giao hàng" },
  { id: 2, title: "Dọn dẹp văn phòng Hà Nội", category: "Dọn dẹp" },
  { id: 3, title: "Hỗ trợ sự kiện Đà Nẵng", category: "Sự kiện" },
  { id: 4, title: "Thiết kế logo công ty", category: "Thiết kế" },
  { id: 5, title: "Chạy quảng cáo Facebook", category: "Marketing" },
  { id: 6, title: "Sửa chữa máy tính", category: "Kỹ thuật" },
  { id: 7, title: "Gia sư Toán lớp 10", category: "Gia sư" },
  { id: 8, title: "Chụp ảnh sản phẩm", category: "Nhiếp ảnh" },
];

const Task = () => {
  return (
    <div className="task-list-wrapper">
      <h3>Danh sách Task</h3>
      <div className="task-grid">
        {tasks.map((task) => (
          <div key={task.id} className="task-card">
            <h4>{task.title}</h4>
            <p>{task.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
