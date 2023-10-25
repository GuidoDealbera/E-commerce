import { useEffect } from "react";
import { useUsersQuery } from "./Hooks/ApiHooks/useUsersQuery";
import Loader from "./Components/Loader/Loader";
import { useSelector } from "react-redux";
import { RootState } from "./Store/store";
import AdminProfile from "./Components/Profiles/Admin";
import UserProfile from "./Components/Profiles/User";

const AuthCallback = () => {
  const { getUserProfile } = useUsersQuery();
  useEffect(() => {
    const googleSignIn = async () => {
      const params = new URLSearchParams(window.location.search);
      const token = params.get("token");
      if (token) {
        await getUserProfile(token);
      }
    };
    googleSignIn();
  }, []);
  return (
    <article className="flex justify-center items-center min-h-screen">
      <Loader isLoading />
    </article>
  );
};

export default AuthCallback;

export const Profiles = () => {
  const userAuth = useSelector((state: RootState) => state.profile.user);

  return userAuth?.isAdmin ? <AdminProfile /> : <UserProfile />;
};
