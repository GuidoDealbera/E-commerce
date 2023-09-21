import { ReactNode } from "react";

interface ModalProps {
  open: boolean;
  close: () => void;
  children: ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({children, close, open, className}) => {
  if (!open) return null;
  const handleClose = (event: any) => {
    if (event.target.id === "outside") close();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
      id="outside"
      onClick={handleClose}
    >
      <div className="w-[600px] flex flex-col relative">
        <button
          className="text-slate-900 text-xl place-self-end hidden sm:flex absolute mr-2"
          onClick={close}
        >
          X
        </button>
        <div className={`bg-white text-black p-2 rounded ${className}`}>{children}</div>
      </div>
    </div>
  );
};

export default Modal;
