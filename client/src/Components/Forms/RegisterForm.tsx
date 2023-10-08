import {useState} from 'react';
import {FaRegEyeSlash, FaEye} from 'react-icons/fa6';
import Loader from '../Loader/Loader';
import { useForms } from '../../Hooks/useForms';

const RegisterForm: React.FC = () => {
    const {register} = useForms();
    const {input, onChange, onSubmit} = register()
    const [loading, setLoading] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)
    const [page, setPage] = useState(0);
    const setPages = (event: any) => {
        setLoading(true);
        setTimeout(() => {
            if(event.target.id === 'back') {
                setPage(page - 1)
            } else {
                setPage(page + 1);
            }
            setLoading(false);
        }, event.target.id === 'back' ? 500 : 1000);
    }; 
    const pageOne = (
        <>
        <div className='flex justify-start items-center'>
          <input type="checkbox" name="isSeller" checked={input.isSeller} className='accent-[#7C91DF]' onChange={onChange}/>
          <label className='' style={{color: "white"}}>Registrarme como vendedor</label>
        </div>
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
        <div className="flex justify-end gap-16">
          <button
            type="button"
            className="bg-red-700 py-1 px-2 rounded-lg hover:bg-red-600 duration-150 active:bg-red-700"
          >
            Cancelar
          </button>
          {input.isSeller ? 
          <button onClick={setPages} type="button" className="bg-green-700 px-2 py-1 rounded-lg hover:bg-green-600 duration-150 active:bg-green-700">
            Continuar
          </button> :
          <button type="submit" className="bg-green-700 px-2 py-1 rounded-lg hover:bg-green-600 duration-150 active:bg-green-700">
          Registrarme
        </button>
          }
        </div>
        </>
    );
    const pageTwo = (
        <>
        <div className="inputs">
          <input type="text" name="" required />
          <label>Correo Electrónico*</label>
        </div>
        <div className="flex justify-end gap-16">
          <button
          onClick={setPages}
          id='back'
            type="button"
            className="bg-blue-700 py-1 px-2 rounded-lg hover:bg-blue-600 duration-150 active:bg-blue-700"
          >
            Volver
          </button>
          <button onClick={() => setPage(page + 1)} type="button" className="bg-green-700 px-2 py-1 rounded-lg hover:bg-green-600 duration-150 active:bg-green-700">
            Continuar
          </button>
        </div>
        </>
    );
    return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <form className="flex flex-col gap-8" onSubmit={onSubmit}>
        <h1 className="font-medium text-xl text-center uppercase">
          Registrate
        </h1>
        {page === 0 && pageOne}
        {page === 1 && pageTwo}
      </form>
      <Loader isLoading={loading}/>
    </div>
    )
};

export default RegisterForm;
