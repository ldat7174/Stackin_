import React, { useState } from "react";
import "../App.css";

const steps = [
  "Thông tin",
  "Địa điểm & Thời gian",
  "Ngân sách & Mô tả",
  "Xác nhận",
];

const PostTask = () => {
  const [step, setStep] = useState(1);

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <label>Tiêu đề Task</label>
            <input type="text" placeholder="Nhập tiêu đề..." />
            <label>Danh mục</label>
            <input type="text" placeholder="Chọn danh mục..." />
            <label>Mức độ khẩn cấp</label>
            <input type="text" placeholder="Chọn mức độ..." />
          </div>
        );
      case 2:
        return (
          <div>
            <label>Địa điểm</label>
            <input type="text" placeholder="Nhập địa điểm..." />
            <label>Thời gian</label>
            <input type="datetime-local" />
          </div>
        );
      case 3:
        return (
          <div>
            <label>Ngân sách</label>
            <input type="number" placeholder="Nhập ngân sách..." />
            <label>Mô tả Task</label>
            <textarea placeholder="Nhập mô tả..." rows="4"></textarea>
          </div>
        );
      case 4:
        return (
          <div>
            <p><b>Xác nhận thông tin task trước khi đăng 🚀</b></p>
            <button className="btn">Đăng Task</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="post-task-wrapper">
      <h2>📝 Đăng task mới</h2>

      {/* Stepper */}
      <div className="stepper">
        {steps.map((s, i) => (
          <div
            key={i}
            className={`step ${step === i + 1 ? "active" : ""}`}
            onClick={() => setStep(i + 1)}
          >
            {i + 1}. {s}
          </div>
        ))}
      </div>

      {/* Nội dung từng bước */}
      <div className="step-content">{renderStepContent()}</div>

      {/* Nút điều hướng */}
      <div className="step-actions">
        {step > 1 && (
          <button className="btn-outline" onClick={() => setStep(step - 1)}>
            Quay lại
          </button>
        )}
        {step < steps.length && (
          <button className="btn" onClick={() => setStep(step + 1)}>
            Tiếp tục
          </button>
        )}
      </div>
    </div>
  );
};

export default PostTask;
