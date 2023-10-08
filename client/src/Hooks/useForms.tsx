import { useState } from "react";
//import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { registerValidate } from "../Components/Forms/validate";
import { IRegisterUser } from "../Interfaces/Users.interfaces";
import { UserAuth } from "../Context/AuthContext";

export const useForms = () => {
  const authContext = UserAuth();
  const createUser = authContext?.register;
  const login = authContext?.signIn;
  //const navigate = useNavigate();
  // const dispatch = useDispatch();
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
    const [input, setInput] = useState({
      email: "",
      password: "",
    });
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
      setInput({
        ...input,
        [name]: value,
      });
    };
    const onSubmit = async (event: React.SyntheticEvent) => {
      event.preventDefault();
      const response = login && await login(input.email, input.password);
      console.log(response);
    };

    return {
      input,
      onChange,
      onSubmit
    }
  };
  const register = () => {
    const [input, setInput] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      isSeller: false
    });
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value, checked, type} = event.target;
      setInput((prevInput) => ({
        ...prevInput,
        [name]: type === "checkbox" ? checked : value
      }));
    };
    const body: IRegisterUser = {
      email: input.email,
      password: input.password
    }
    const onSubmit = async (event: React.SyntheticEvent) => {
      event.preventDefault();
      const validate = await registerValidate(body);
      if(!Object.keys(validate).length){
        if(input.password === input.confirmPassword) {
          createUser && await createUser(input.email, input.password);
          //HABLAR CON HERNAN PARA VER SI CREAMOS USUARIOS EN NUESTRA DB O NO!
      } else {
        toast.error('Las contraseñas no coinciden')
      }
      } else {
        validate.email && toast.error(validate.email) || validate.password && toast.error(validate.password)
      }
    };
    return {
      input,
      onChange, 
      onSubmit
    }
  };
  
  return {
    search,
    signIn,
    register
  };
};
