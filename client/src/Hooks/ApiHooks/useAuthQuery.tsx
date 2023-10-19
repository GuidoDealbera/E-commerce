import { useDispatch } from "react-redux";
import { useAuthLocalMutation } from "../../Store/Services/api";
import { useNavigate } from "react-router-dom";
import { ILogin } from "../../Interfaces/Auth.interfaces";
import { toast } from "sonner";
import { clearProfile, setProfile } from "../../Store/Features/profileSlice";

export const useAuthQuery = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [authLogin] = useAuthLocalMutation();

  const login = async (body: ILogin) => {
    try {
      const response: any = await authLogin(body);
      console.log(response);
      if (response.error) {
        toast.error(response.error.data.error);
      }
      if (response.data) {
        await localStorage.setItem(
          "accessToken",
          response.data.credentials.accessToken
        );
        dispatch(setProfile(response.data.profile));
        navigate("/");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error("ERROR DE AUTENTICACIÓN: ", error);
      return error;
    }
  };

  const logOut = () => {
    localStorage.removeItem("accessToken");
    dispatch(clearProfile());
    navigate("/auth/login");
  };

  const signInWithGoogle = () => {
    window.location.href = "http://localhost:3001/auth/google";
  };
  return {
    login,
    logOut,
    signInWithGoogle,
  };
};
