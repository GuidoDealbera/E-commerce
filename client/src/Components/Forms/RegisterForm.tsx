import {useState} from 'react';
import {FaRegEyeSlash, FaEye} from 'react-icons/fa6';
import { useForms } from '../../Hooks/useForms';

const RegisterForm: React.FC = () => {
    const {register} = useForms();
    const {input, onChange, onSubmit} = register()
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
   
    return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <h1 className="font-medium text-xl text-center uppercase">
          Regístrate
        </h1>
        <div className="inputs">
          <input type="email" name="email" value={input.email} onChange={onChange} required />
          <label>Correo Electrónico*</label>
        </div>
        <div className="inputs">
          <input type={showPassword ? "text" : "password"} name="password" value={input.password} onChange={onChange} required />
          <label>Contraseña*</label>
          <button type='button' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash/> : <FaEye/>}</button>
        </div>
        <div className="inputs">
          <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={input.confirmPassword} onChange={onChange} required />
          <label>Confirmar contraseña*</label>
          <button type='button' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? <FaRegEyeSlash/> : <FaEye/>}</button>
        </div>
        <div className='checkbox'>
          <input type="checkbox" name="tyc"/>
          <label>Acepto los terminos y condiciones de registro a E-commerce</label>
        </div>
        <div className="flex justify-between items-center">
          <button
            type="button"
            className="bg-red-700 py-1 px-2 rounded-lg hover:bg-red-600 duration-150 active:bg-red-700"
          >
            Cancelar
          </button>
          <button type="submit" className="bg-green-700 px-2 py-1 rounded-lg hover:bg-green-600 duration-150 active:bg-green-700">
          Registrarme
        </button>
        </div>
      </form>
    </div>
    )
};

export default RegisterForm;
