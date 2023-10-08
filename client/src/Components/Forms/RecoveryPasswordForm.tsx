import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { FaRegEyeSlash, FaEye} from 'react-icons/fa6';
import { recoveryPasswordValidate } from "./validate";
import { updatePassword } from "firebase/auth";
import { currentUser } from "../../Firebase";
import { toast } from "sonner";


const RecoveryPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);
  const [input, setInput] = useState({
    password: "",
    confirmPassword: "",
  });
  const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const onSubmit = async (event:React.SyntheticEvent) => {
    event.preventDefault();
    const validate = await recoveryPasswordValidate(input);
    if(!Object.keys(validate).length){
      currentUser && updatePassword(currentUser, input.password)
      .then(data => console.log(data))
      .catch(error => console.log(error))
      //logica para reestablecer contraseña
      //Supongo que desde FIREBASE
    } else {
      validate.password && toast.error(validate.password) ||
      validate.confirmPassword && toast.error(validate.confirmPassword)
    }
  }
  return (
    <form onSubmit={onSubmit} className="min-h-screen w-screen flex flex-col items-center pt-16 gap-8">
      <div>
      <h1 className="text-center text-lg">Reestablece tu contraseña</h1>
      <p className="text-center text-sm text-gray-500">Que sea lo más segura posible</p>
      </div>
        <div className="inputs">
            <input type={showPassword ? "text" : "password"} name="password" value={input.password} onChange={onChange} required/>
            <label>Contraseña </label>
            <button type="button" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash/> : <FaEye/>}</button>
        </div>
        <div className="inputs">
            <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={input.confirmPassword} onChange={onChange} required/>
            <label>Confirmar contraseña </label>
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <FaRegEyeSlash/> : <FaEye/>}</button>
        </div>
        <div className="flex justify-around mg:justify-end w-[250px] mg:w-[350px] mg:gap-16">
          <button onClick={() => navigate('/auth/login')} className="bg-red-700 rounded-lg py-1 px-2">Cancelar</button>
          <button type="submit" className="bg-green-700 rounded-lg px-2 py-1">Finalizar</button>
        </div>
    </form>
  )
}

export default RecoveryPasswordForm