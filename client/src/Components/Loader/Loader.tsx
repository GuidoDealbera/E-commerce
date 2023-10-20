interface Props {
  isLoading: boolean;
}
const Loader: React.FC<Props> = ({ isLoading }) => {
  const path = location.pathname;
  return (
    <div
      className={`${
        !isLoading && "hidden"
      } absolute flex flex-col gap-4 justify-center items-center min-h-screen w-screen bg-gray-900/80 backdrop-blur-sm`}
    >
      <h1 className="text-3xl">
        {path === "/auth/callback" ? "CARGANDO DATOS DE USUARIO" : "CARGANDO"}
      </h1>
      <span className="loader"></span>
    </div>
  );
};

export default Loader;
