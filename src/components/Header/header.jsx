import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/constants/router";
import siteLogo from "../../assets/Logo.svg"

const Header = () => {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-9">
                <div className="flex items-center space-x-10">
                    <img src={siteLogo} alt="logo" />
                    <span>
                        <Link to={ROUTES.PROFILE} className="text-gray-800 hover:text-blue-500">
                            Профиль
                        </Link>
                    </span>
                    <span>
                        <Link to={ROUTES.HISTORY} className="text-gray-800 hover:text-blue-500">
                            История
                        </Link>
                    </span>
                </div>
                <span>
                    <Link to={ROUTES.LOGIN} className="text-gray-800 hover:text-blue-500">
                        Войти
                    </Link>
                </span>
            </nav>
        </header>
    );
};

export default Header;
