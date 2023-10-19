import { useEffect } from "react";
import { useUsersQuery } from "./Hooks/ApiHooks/useUsersQuery";
import Loader from "./Components/Loader/Loader";

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
      <Loader isLoading/>
    </article>
  );
};

export default AuthCallback;
