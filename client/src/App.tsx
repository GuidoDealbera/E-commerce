import Cards from "./Components/Cards/Cards";
import LoginForm from "./Components/Forms/LoginForm";
import NavBar from "./Components/NavBar/NavBar"
import {Routes, Route, useLocation} from 'react-router-dom';

function App() {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/auth/login' ? <NavBar/> : null}
      <Routes>
        <Route path="/" element={<Cards/>}/>
        <Route path="/auth/login" element={<LoginForm/>}/>
      </Routes>
    </>
  )
}

export default App
