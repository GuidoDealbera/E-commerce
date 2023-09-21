import { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { GoogleProvider, FacebookProvider, auth } from "../Firebase";

export const useForms = () => {
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
      console.log(response.user);
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
