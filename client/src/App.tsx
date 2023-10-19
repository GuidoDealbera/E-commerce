import {useEffect} from 'react';
import { useProductQuery } from "./Hooks/ApiHooks/useProductsQuery";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/Forms/LoginForm";
import RegisterForm from "./Components/Forms/RegisterForm";
import PostProductForm from "./Components/Forms/PostProductForm";
import NavBar from "./Components/NavBar/NavBar";
import ForgotPasswordForm from "./Components/Forms/ForgotPasswordForm";
import RecoveryPasswordForm from "./Components/Forms/RecoveryPasswordForm";
import AuthCallback from './authCallback';

function App() {
  const {getAllProducts} = useProductQuery();
  useEffect(() => {
    getAllProducts();
  }, [])
  return (
    <>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/callback" element={<AuthCallback />} />
            <Route path="/auth/login" element={<LoginForm/>} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/create-product" element={<PostProductForm />} />
            <Route path="/forgot-password" element={<ForgotPasswordForm />} />
            <Route path="/recovery-password" element={<RecoveryPasswordForm />} />
          </Routes>
      </>
  )
}

export default App
