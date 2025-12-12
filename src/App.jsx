import './App.css'
import { Route , Routes } from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Login from './Pages/Login/UserLogin';
import RegisterPage from './Pages/Login/Registerpage';
import Dashboard from './Pages/Dashboard/Dashboard';



function App() {
 
  return (
    <> 
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path='/Pages/Login/Registerpage' element={<RegisterPage/>} /> 
      <Route path='/Pages/Dashboard/Dashboard' element={<Dashboard/>} /> 

      </Routes>
    </>
  )
}

export default App
