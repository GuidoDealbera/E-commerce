import { useState, useEffect, createContext, useContext } from "react";
import {
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, GoogleProvider, FacebookProvider } from "../Firebase";
import { toast } from "sonner";
export interface Context {
  register: (...arg: any) => void;
  signIn: (...arg: any) => void;
  googleSignIn: () => void;
  facebookSignIn: () => void;
  logOut: () => void;
  user: User | null;
}
const AuthContext = createContext<Context | undefined>(undefined);
interface Props {
  children: React.ReactNode;
}
export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const register = async (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(() => toast.success('Registro exitoso!'))
    .catch(() => toast.error('Usuario existente'))
  };
  const signIn = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((data) => toast.success(`Bienvenido ${data.user.displayName}!`))
      .catch(() => {
        toast.error("Credenciales incorrectas");
      });
  };
  const googleSignIn = async () => {
    signInWithRedirect(auth, GoogleProvider);
  };
  const facebookSignIn = async () => {
    signInWithRedirect(auth, FacebookProvider);
  };
  const logOut = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSuscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        register,
        signIn,
        googleSignIn,
        facebookSignIn,
        logOut,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
