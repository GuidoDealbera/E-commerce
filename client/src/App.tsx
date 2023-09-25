import Cards from "./Components/Cards/Cards";
import LoginForm from "./Components/Forms/LoginForm";
import RegisterForm from "./Components/Forms/RegisterForm";
import NavBar from "./Components/NavBar/NavBar"
import {Routes, Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation()
  const path = location.pathname
  return (
    <>
      {path !== '/auth/login' && path !== '/register' ? <NavBar/> : null}
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/auth/login" element={<LoginForm/>}/>
        <Route path="/register" element={<RegisterForm/>} />
      </Routes>
    </>
  )
}

export default App
