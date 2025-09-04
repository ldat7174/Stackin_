import { Outlet } from 'react-router-dom'
import './Layout.css'

export default function Layout() {
  return (
    <div>
      {/* Thanh header giữ nguyên */}
      <header className="header-bar">
        <div className="logo">STACKIN</div>
        <nav className="nav-links">
          <a href="/services">Dịch vụ</a>
          <a href="/register">Đăng ký/Đăng nhập</a>
          <a href="/tasker" className="highlight">TRỞ THÀNH TASKER</a>
        </nav>
      </header>

      {/* Nội dung từng trang */}
      <main className="page-content">
        <Outlet />
      </main>
    </div>
  )
}
