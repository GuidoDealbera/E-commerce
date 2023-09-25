import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { GoogleProvider, FacebookProvider, auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import { setUser } from "../Store/Features/userSlice";
import { useDispatch } from "react-redux";
import { User } from "../Interfaces/Users.interfaces";

export const useForms = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const search = () => {
    const [input, setInput] = useState("");
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setInput(value);
    };
    const onSubmit = (event: React.SyntheticEvent) => {
      //utilizar el estado input para llamar al back y buscar lo que requerimos
      event.preventDefault();
    };
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onSubmit(event);
      }
    };
    return {
      input,
      onChange,
      onSubmit,
      handleKeyPress,
    };
  };

  const googleSession = async () => {
    try {
      const response = await signInWithPopup(auth, GoogleProvider);
      const user = response.user;
      const userLogin: User = {
        id: user.uid,
        name: user?.displayName?.split(' ')[0],
        lastName: user?.displayName?.split(' ')[1],
        email: user?.email,
        phone: user?.phoneNumber,
        profilePhoto: user?.photoURL ,
        address: '',
        postalCode: '',
      }
      console.log(response.user);
      
      // dispatch(setUser(userLogin))
      // navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const facebookSession = async () => {
    try {
      const response = await signInWithPopup(auth, FacebookProvider);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    search,
    googleSession,
    facebookSession,
  };
};
