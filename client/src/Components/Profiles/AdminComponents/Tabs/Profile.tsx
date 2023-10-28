import { FiEdit2 } from "react-icons/fi";
import image from "../../../../assets/2a2e7f0f60b750dfb36c15c268d0118d.jpg";
import portada from "../../../../assets/portada.jpg";
import Title from "../Title";
import { BsCamera } from "react-icons/bs";
import { useSelector } from "react-redux";
import { RootState } from "../../../../Store/store";
const Profile = () => {
  const INFO_PROFILE = [
    {
      key: "products",
      quantity: "254", //HACER CONTROLADOR DESDE EL BACK
      label: "Productos",
    },
    {
      key: "followers",
      quantity: "129k", //HACER CONTROLADOR DESDE EL BACK
      label: "Clientes",
    },
    {
      key: "sales",
      quantity: "129k", //HACER CONTROLADOR DESDE EL BACK
      label: "Ventas",
    },
  ];
  const userAuth = useSelector((state: RootState) => state.profile.user);
  const rol = () => {
    if(userAuth?.gender === 'male') return "Administrador";
    if(userAuth?.gender === 'female') return "Administradora";
    if(userAuth?.gender === 'other') return "Admin";
  }
  return (
    <>
      <Title pageName="Perfil" />
      <div className="overflow-hidden rounded-sm border border-gray-700 shadow-sm">
        <div className="relative h-36 md:h-64">
          <img
            src={userAuth?.coverPhoto ? userAuth.coverPhoto : portada}
            alt="portada"
            className="h-full w-full rounded-t-sm object-cover object-center"
          />
          <div className="absolute bottom-1 right-1 z-10 min-[425px]:bottom-4 min-[425px]:right-4">
            <label
              htmlFor="cover"
              className="flex cursor-pointer items-center justify-center gap-2 rounded bg-blue-900 py-1 px-2 font-medium hover:bg-opacity-80 min-[425px]:px-4"
            >
              <input type="file" name="cover" id="cover" className="sr-only" />
              <span>
                <FiEdit2 />
              </span>
              <span className="hidden mg:block">
              Editar
              </span>
            </label>
          </div>
        </div>
        <div className="px-4 pb-6 text-center lg:pb-8 xl:pb-11">
          <div className="relative flex mx-auto -mt-[5.5rem] h-[7.5rem] w-full max-w-[7.5rem] rounded-full bg-white/20 backdrop-blur sm:h-44 sm:max-w-[11rem] sm:p-3">
            <div className="relative drop-shadow-sm">
              <img src={userAuth?.profilePhoto ? userAuth.profilePhoto : image} alt="perfil" className="rounded-full w-full h-full" />
              <label
                htmlFor="perfil"
                className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-blue-900 hover:bg-opacity-90 sm:bottom-2 sm:right-2"
              >
                <BsCamera />
                <input
                  type="file"
                  name="perfil"
                  id="perfil"
                  className="sr-only"
                />
              </label>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-1.5 text-2xl">{userAuth?.name}{" "}{userAuth?.lastName}</h3>
            <p className="text-sm tracking-[2px] text-neutral-500">
              {rol()}
            </p>
            <div className="mx-auto mt-4 mb-5 grid max-w-[23.5rem] grid-cols-1 mg:grid-cols-3 rounded-md border border-neutral-700 bg-neutral-500 text-black py-2.5 shadow-sm">
              {INFO_PROFILE.map((item, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center justify-center gap-1 ${
                    i !== INFO_PROFILE.length - 1 && "mg:border-r"
                  } border-neutral-700 px-4 min-[425px]:flex-row`}
                >
                  <span className="font-semibold">{item.quantity}</span>
                  <span className="text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
