import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { REGISTER, LOGIN } from "../../constant/routes";
import { name } from "../../constant/appname";
import { Logo } from "../../icons";
import { DashbordIcon, LoginIcon, RegisterIcon } from "../../icons";
const navItem = [
  {
    title: "Company",
    link: "/",
  },

  {
    title: "Monnies",
    link: "/",
  },

  {
    title: "Tarif",
    link: "/",
  },
  {
    title: "Apropos",
    link: "/",
  },
];
const Nav = ({ register }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const auth_state = useSelector((state) => state.user);
  const objects = {
    data: auth_state.token ? { title: "Dashbord", path: "/dashbord", svg: <DashbordIcon className="w-5 h-5 mr-1" /> } : register ? { title: "Inscription", path: REGISTER, svg: <RegisterIcon className="w-5 h-5 mr-1" /> } : { title: "Connexion", path: LOGIN, svg: <LoginIcon className="w-5 h-5 mr-1" /> },
  };

  return (
    <div className="px-4 py-5 top-all fixed top-0 h-22 right-0 left-0 bg-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between">
        <a href="/" aria-label="Company" title="Company" className="inline-flex items-center">
          <Logo className="w-8" /> <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase">{name}</span>
        </a>
        <ul className="ml-2 flex items-center hidden space-x-8 lg:flex">
          {navItem.map((item) => {
            return (
              <li key={item.title}>
                <Link to={item.link} aria-label={item.title} title={item.title} className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                  {item.title}
                </Link>{" "}
              </li>
            );
          })}
          <li>
            <Link to={objects.data.path} className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-transparent border border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white focus:shadow-outline focus:outline-none" aria-label="Sign up" title={objects.data.title}>
              {objects.data.svg}
              {objects.data.title}
            </Link>
          </li>
        </ul>
        <div className="lg:hidden">
          <button aria-label="Open Menu" title="Open Menu" className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-purple-50 focus:bg-deep-purple-50" onClick={() => setIsMenuOpen(true)}>
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z" />
              <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z" />
              <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z" />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full top-all">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a href="/" aria-label="Company" title="Company" className="inline-flex items-center">
                      <Logo className="w-8" /> <span className="ml-2 text-lg font-bold tracking-wide text-gray-800 uppercase">{name}</span>
                    </a>
                  </div>
                  <div>
                    <button aria-label="Close Menu" title="Close Menu" className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" onClick={() => setIsMenuOpen(false)}>
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {navItem.map((item) => {
                      return (
                        <li key={item.title}>
                          <Link to={item.link} key={item.title} aria-label={item.title} title={item.title} className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">
                            {item.title}
                          </Link>
                        </li>
                      );
                    })}

                    <li>
                      <Link to={objects.data.path} className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none" aria-label="Sign up" title={objects.data.title}>
                        {objects.data.svg}
                        {objects.data.title}
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
