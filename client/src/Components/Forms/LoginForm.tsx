import {FcGoogle} from 'react-icons/fc'
import {FaSquareFacebook, FaRegEyeSlash, FaEye} from 'react-icons/fa6';
import { useForms } from '../../Hooks/useForms';
import { useState } from 'react';

const LoginForm: React.FC = () => {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const {googleSession, facebookSession} = useForms();
    return (
    <div className='flex py-10 justify-center items-center'>
        <form className='flex flex-col justify-center items-center gap-2'>
            <h1 className='text-2xl uppercase mb-5'>Ingresa tu cuenta</h1>
            <div className='inputs mb-5'>
                <input type="email" name="email" className='' required/>
                <label>Correo Electrónico</label>
            </div>
            <div className='inputs mb-5'>
                <input type={showPassword ? "text" : "password"} name="password" required/>
                <label>Contraseña</label>
                <button type='button' onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaRegEyeSlash/> : <FaEye/>}</button>
            </div>
            <button type="submit" className='bg-blue-700 w-full p-2 rounded-lg hover:bg-blue-800 duration-200'>Iniciar Sesión</button>
        <h1>Ó</h1>
      <div className='w-full flex flex-col gap-2'>
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
        </form>
    </div>
  );
};

export default LoginForm;
