import { NavLink, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import Tasks from './pages/Tasks'
import Profile from './pages/Profile'
import CaptchaVerify from './pages/CaptchaVerify'
import CCCDVerify from './pages/CCCDVerify'
import BankLink from './pages/BankLink'
import PostTask from "./pages/PostTask";
import Tasker from './pages/Tasker'
import Login from './pages/Login'
import Register from './pages/Register'
import FindTask from './pages/FindTask'

export default function App() {
  return (
    <div>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/captchaverify" element={<CaptchaVerify />} />
          <Route path="/cccdverify" element={<CCCDVerify />} />
          <Route path="/banklink" element={<BankLink />} />
          <Route path="/post-task" element={<PostTask />} />
          <Route path="/tasker" element={<Tasker />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/findtask" element={<FindTask />} />
        </Routes>
      </main>
    </div>
  )
}
