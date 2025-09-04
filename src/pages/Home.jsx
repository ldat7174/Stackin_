import { useNavigate } from "react-router-dom"
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <Header />

      {/* Banner */}
      <section className="hero">
        <h1>Việc làm tức thì</h1>
        <h2>Kiếm tiền linh hoạt</h2>
        <div className="search-bar">
          <input type="text" placeholder="Tìm công việc nhanh..." />
          <button>Tìm kiếm</button>
        </div>
      </section>

      {/* Giới thiệu nền tảng */}
      <section className="platform-intro">
        <h3>Giới thiệu nền tảng</h3>
        <div className="intro-cards">
          <a href="/profile">Trang cá nhân</a>
          <a href="/findtask">Tìm công việc</a>
          <a href="/tasks">Danh sách công việc</a>
          <a href="/post-task">Đăng task</a>
        </div>
      </section>

      {/* Phân loại người dùng */}
      <section className="user-type">
  <h3>BẠN LÀ?</h3>
  <div className="user-grid">
    <div className="user-card" onClick={() => navigate("/post-task")}>
      Người đăng task
    </div>
    <div className="user-card" onClick={() => navigate("/tasker")}>
      Tasker
    </div>
  </div>
</section>
      <Footer />
    </div>
  )
}
