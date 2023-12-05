import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import LoginForm from "./Components/Forms/LoginForm";
import RegisterForm from "./Components/Forms/RegisterForm";
import PostProductForm from "./Components/Forms/PostProductForm";
import NavBar from "./Components/NavBar/NavBar";
import ForgotPasswordForm from "./Components/Forms/ForgotPasswordForm";
import RecoveryPasswordForm from "./Components/Forms/RecoveryPasswordForm";
import AuthCallback, { Profiles } from "./AuthCallback";
import AdminProfile from "./Components/Profiles/Admin";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profiles />} />
        </Route>
        <Route path="/auth/callback" element={<AuthCallback />} />
        <Route path="/auth/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/create-product" element={<PostProductForm />} />
        <Route path="/forgot-password" element={<ForgotPasswordForm />} />
        <Route path="/recovery-password" element={<RecoveryPasswordForm />} />
        {/* Ruta de prueba */}
        <Route path="/prueba" element={<AdminProfile />}>
          {/* Hijos de esta ruta! */}
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  );
}

export default App;
