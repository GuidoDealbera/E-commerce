import { useNavigate } from "react-router-dom";

const ForgotPasswordForm: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-screen flex justify-center">
      <form className="flex flex-col gap-4 pt-10 w-[250px] mg:w-[350px]">
        <div>
          <h1 className="text-center text-lg mg:text-2xl">
            Cambio de contraseña
          </h1>
          <p className="text-center text-gray-400 text-sm">
            Recupera tu cuenta
          </p>
        </div>
        <div className="inputs">
          <input type="email" name="" id="" required />
          <label>Correo Electrónico: </label>
        </div>
        <div className="flex justify-around mg:justify-end gap-16">
          <button className='bg-red-700 rounded-lg px-2 py-1' onClick={() => navigate("/auth/login")}>Cancelar</button>
          <button type="submit" className="bg-green-700 rounded-lg px-2 py-1">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
