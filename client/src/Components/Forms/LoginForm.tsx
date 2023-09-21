import {FcGoogle} from 'react-icons/fc'
import {FaSquareFacebook} from 'react-icons/fa6'
import { useForms } from '../../Hooks/useForms';

const LoginForm: React.FC = () => {
    const {googleSession, facebookSession} = useForms();
    return (
    <div className='flex py-10 justify-center items-center'>
        <form className='flex flex-col justify-center items-center gap-2'>
            <h1>Ingresa tu cuenta</h1>
            <div>
                <input type="email" name="email"/>
                <label>Correo Electrónico</label>
            </div>
            <div>
                <input type="password" name="password" />
                <label>Contraseña</label>
            </div>
            <button type="submit">Iniciar Sesión</button>
        <h1>Ó</h1>
      <div className='w-full flex flex-col gap-2'>
        <button className='flex flex-row items-center relative gap-2 w-full py-1 hover:bg-red-700 hover:text-white duration-300 rounded-lg bg-white text-black font-medium justify-center' onClick={googleSession}>
            <span className='bg-white text-3xl absolute left-2 rounded-lg'>
            <FcGoogle/>
            </span>
            <span className=''>Iniciar con Google</span>
        </button>
        <button className='flex flex-row items-center relative gap-2 w-full py-1 hover:bg-red-700 hover:text-white duration-300 rounded-lg bg-white text-black font-medium justify-center' onClick={facebookSession}>
        <span className='bg-white text-3xl absolute left-2 rounded-lg'>
            <FaSquareFacebook/>
            </span>
            <span>Iniciar con Facebook</span>
        </button>
      </div>
        </form>
    </div>
  );
};

export default LoginForm;
