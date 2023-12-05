import { BsArrowLeftCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="py-10 flex flex-col gap-10 justify-center items-center min-h-screen">
      <h1 className="text-6xl font-Jost">Página no encontrada</h1>
      <p className="text-2xl">
        Error: <span className="text-red-600">404</span>
      </p>
      <button
        className="flex gap-2 justify-center items-center bg-green-400 text-gray-900 py-1 px-2 rounded-lg hover:bg-green-500 active:bg-opacity-80 transition-colors duration-150"
        onClick={() => navigate(-1)}
      >
       <span><BsArrowLeftCircleFill/></span> Volver
      </button>
    </div>
  );
};

export default NotFound;
