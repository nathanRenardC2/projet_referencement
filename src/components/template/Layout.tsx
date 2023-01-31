import { useState } from "react";
import { Outlet, Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.webp";

interface ILayoutProps{
    children: React.ReactNode;
}
const Layout = ({children} : ILayoutProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
        <nav className="bg-white shadow-md border-gray-200 px-2 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <NavLink to="/" className="flex items-center ml-10 md:ml-0 text-gray-800 dark:text-gray-200">
                    <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:hover:text-gray-700 ">VéloEco +</span>
                </NavLink>
                <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle="navbar-default" type="button" className="mr-10 md:mr-0 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className={`${isOpen ? "" : "hidden"} w-full md:block md:w-auto`} id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <NavLink to="/" className={(isActive) => `block py-2 pl-3 pr-4 text-gray-500 hover:text-gray-700 rounded md:bg-transparent md:p-0`}>
                            Accueil
                        </NavLink>
                        <NavLink to="/vente_velo" className={(isActive) => `block py-2 pl-3 pr-4 text-gray-500 hover:text-gray-700 rounded md:bg-transparent md:p-0`}>
                            Vente vélo
                        </NavLink>
                        <NavLink to="/location_velo" className={(isActive) => `block py-2 pl-3 pr-4 hover:text-gray-700 rounded md:bg-transparent text-gray-500 md:p-0`}>
                            Location vélo
                        </NavLink>
                        <NavLink to="/vente_piece" className={(isActive) => `block py-2 pl-3 pr-4 hover:text-gray-700 rounded md:bg-transparent text-gray-500 md:p-0`}>
                            Vente pièces détachés
                        </NavLink>
                        <NavLink to="/entretient_velo" className={(isActive) => `block py-2 pl-3 pr-4 hover:text-gray-700 rounded md:bg-transparent text-gray-500 md:p-0`}>
                            Entretien vélo
                        </NavLink>
                        <NavLink to="/informations" className={(isActive) => `block py-2 pl-3 pr-4 hover:text-gray-700 rounded md:bg-transparent text-gray-500 md:p-0`}>
                            Informations
                        </NavLink>

                    </ul>
                </div>
            </div>
        </nav>

      <div className="bg-gray-50">
        {children}
      </div>
    </>
  )
};

export default Layout;