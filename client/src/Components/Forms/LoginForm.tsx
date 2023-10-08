import {FcGoogle} from 'react-icons/fc'
import {FaSquareFacebook, FaRegEyeSlash, FaEye} from 'react-icons/fa6';
import { useState } from 'react';
import { useForms } from '../../Hooks/useForms';

interface LoginProps {
  googleSession: () => void;
  facebookSession: () => void;
};
const LoginForm: React.FC<LoginProps> = ({googleSession, facebookSession}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const {signIn} = useForms();
    const {input, onChange, onSubmit} = signIn();
    return (
    <div className='flex h-screen sm:h-max sm:py-10 flex-col justify-center items-center gap-4'>
        <form onSubmit={onSubmit} className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-2xl uppercase mb-5'>Ingresa tu cuenta</h1>
            <div className='inputs mb-5'>
                <input type="email" name="email" value={input.email} onChange={onChange} required/>
                <label>Correo Electrónico</label>
            </div>
            <div className='inputs'>
                <input type={showPassword ? "text" : "password"} name="password" value={input.password} onChange={onChange} required/>
                <label>Contraseña</label>
                <button type='button' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash/> : <FaEye/>}</button>
            </div>
            <div className='w-[250px] mg:w-[350px] flex justify-end -translate-y-[6px] mb-4'>
            <a href="/forgot-password" className='text-xs text-blue-600 hover:underline hover:text-blue-500'>¿Olvidaste tú contraseña?</a>
            </div>
            <button type="submit" className='bg-blue-700 w-[250px] mg:w-full p-2 rounded-lg hover:bg-blue-800 duration-200'>Iniciar Sesión</button>
        </form>
        <span className='flex justify-center gap-1 text-xs text-center mt-4 w-[250px] mg:w-[350px]'>¿Aún no tienes una cuenta? <a href="/register" className='flex gap-1 text-blue-600 hover:underline hover:text-blue-500'>Regístrate <span className='hidden sm:block'>aquí</span></a></span>
        <h1>Ó</h1>
      <div className='w-[250px] mg:w-[350px] flex flex-col gap-2'>
        <button className='flex flex-row items-center relative gap-2 w-full py-2 bg-red-800 hover:bg-red-700 text-white duration-300 rounded-lg font-medium justify-center' onClick={googleSession}>
            <span className='bg-white text-3xl absolute left-2 rounded-lg'>
            <FcGoogle/>
            </span>
            <span className=''>Inicia con Google</span>
        </button>
        <button className='flex flex-row items-center relative gap-2 w-full py-2 bg-blue-950 hover:bg-blue-900 text-white duration-300 rounded-lg font-medium justify-center' onClick={facebookSession}>
        <span className='text-3xl text-white absolute left-2 rounded-lg'>
            <FaSquareFacebook/>
            </span>
            <span>Inicia con Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
