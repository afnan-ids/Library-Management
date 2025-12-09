import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route , Routes } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import UserLogin from './Pages/Login/UserLogin'
import CreateAccountForm from './Pages/Login/CreateAccount/page'
import Dashboard from './Pages/Dashboard/page'
import Sidebar from './components/Sidebar'
import Calendar from './components/Calendar'
import DashboardCards from './components/DashboardCards'
import LabNavbar from './Components/Navbar'
import Footer from './Components/Footer'
import MessageModal from './components/MessageModal'


function App() {
 
  return (
    <> 
     <Routes>
      <Route path='/' element={<UserLogin/>} />
      <Route path='/CreateAccount' element={<CreateAccountForm/>} />
      <Route path='/Dashboard' element={<Dashboard/>} />
      <Route path='/Sidebar' element={<Sidebar/>} />
      <Route path='/Calendar' element={<Calendar/>} />
      <Route path='/DashboardCards' element={<DashboardCards/>} />
      <Route path='/Message' element={<MessageModal/>} />
      <Route path='/Navbar' element={<LabNavbar/>} />
      <Route path='/Footer' element={<Footer/>} />
       </Routes>
    </>
  )
}

export default App
