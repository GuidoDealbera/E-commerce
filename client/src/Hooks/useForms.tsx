import { useState } from "react";
import {
  IErrorRegisterBody,
  authLoginValidate,
  registerValidate,
} from "../Components/Forms/validate";
import { ILogin } from "../Interfaces/Auth.interfaces";
import { useAuthQuery } from "./ApiHooks/useAuthQuery";
import { toast } from "sonner";
import { IRegisterUser } from "../Interfaces/Users.interfaces";
export const useForms = () => {
  const { login, register: postUser } = useAuthQuery();
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
  const signIn = () => {
    const [input, setInput] = useState<ILogin>({
      email: "",
      password: "",
    });
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInput({
        ...input,
        [name]: value,
      });
    };
    const onSubmit = async (event: React.SyntheticEvent) => {
      event.preventDefault();
      const validate = await authLoginValidate(input);
      if (!Object.keys(validate).length) {
        login(input);
      } else {
        validate.email
          ? toast.error(validate.email)
          : toast.error(validate.password);
      }
    };

    return {
      input,
      onChange,
      onSubmit,
    };
  };
  const register = () => {
    const [input, setInput] = useState<IRegisterUser>({
      email: "",
      password: "",
      confirmPassword: "",
    });
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setInput({
        ...input,
        [name]: value,
      });
    };
    const onSubmit = async (event: React.SyntheticEvent) => {
      event.preventDefault();
      const validate: IErrorRegisterBody = await registerValidate(input);
      if (!Object.keys(validate).length) {
        postUser(input);
      } else {
        if (validate.email) return toast.error(validate.email);
        if (validate.password) return toast.error(validate.password);
        if (validate.confirmPassword)
          return toast.error(validate.confirmPassword);
      }
    };
    return {
      input,
      onChange,
      onSubmit,
    };
  };

  return {
    search,
    signIn,
    register,
  };
};
