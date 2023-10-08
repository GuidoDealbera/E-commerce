import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/Forms/LoginForm";
import RegisterForm from "./Components/Forms/RegisterForm";
import PostProductForm from "./Components/Forms/PostProductForm";
import { UserAuth } from "./Context/AuthContext";
import NavBar from "./Components/NavBar/NavBar";
import ForgotPasswordForm from "./Components/Forms/ForgotPasswordForm";
import RecoveryPasswordForm from "./Components/Forms/RecoveryPasswordForm";

const AppRoutes = () => {
  const authContext = UserAuth();
  if (authContext) {
    const { googleSignIn, facebookSignIn } = authContext;
    return (
      <>
        <BrowserRouter>
          <NavBar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<LoginForm googleSession={googleSignIn} facebookSession={facebookSignIn}/>} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/create-product" element={<PostProductForm />} />
            <Route path="/forgot-password" element={<ForgotPasswordForm />} />
            <Route path="/recovery-password" element={<RecoveryPasswordForm />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
};

export default AppRoutes;
