import { Link } from "react-router-dom";

interface TitleProps {
    pageName: string;
};

const Title: React.FC<TitleProps> = ({pageName}) => {
    return (
        <div className="mb-6 flex flex-col gap-3 mg:flex-row mg:items-center mg:justify-between">
            <h2 className="text-lg font-semibold">
                {pageName}
            </h2>
            <nav>
                <ol className="flex items-center gap-2">
                    <li>
                        <Link to="#">E-Commerce /</Link>
                    </li>
                    <li className="text-blue-800">{pageName}</li>
                </ol>
            </nav>
        </div>
    )
};

export default Title;