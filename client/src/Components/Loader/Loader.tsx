interface Props {
    isLoading: boolean;
}
const Loader: React.FC<Props> = ({isLoading}) => {
    return (
        <div className={`${!isLoading && "hidden"} absolute flex justify-center items-center min-h-screen w-screen bg-gray-900/80 backdrop-blur-sm`}>
            <span className="loader">
                
            </span>
        </div>
    )
};

export default Loader;