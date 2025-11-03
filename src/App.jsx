import './App.css'
import { Routes,Route } from 'react-router-dom'
import BoostServices from './pages/BoostServices'
import Profile from './pages/Profile'
import ServiceCompleted from './pages/ServiceCompleted'
import UserMenuPage from './pages/UserMenuPage'
import About from './pages/About'
import TermsConditions from './pages/TermsConditions'
import Notifications from './pages/Notifications'
import HelpCenter from './pages/HelpCenter'
import NotificationSettings from './pages/NotificationSettings'
import LeadGen from './pages/LeadGen'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LeadGen/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/service-completed" element={<ServiceCompleted/>} />
        <Route path="/userprofile-menu" element={<UserMenuPage/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/terms" element={<TermsConditions/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/helpcenter" element={<HelpCenter/>} />
        <Route path="/notific-settings" element={<NotificationSettings/>} />
      </Routes>
    </>
  )
}

export default App
