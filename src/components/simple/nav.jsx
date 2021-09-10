import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon , UserGroupIcon} from '@heroicons/react/outline'
import {Link} from "react-router-dom"
import {logo , name, definition } from "../../constant/appname";
const navigation = [
  { name: 'A Propos', href: '/' },
  { name: 'Aide', href: '/' },
  { name: 'Nous-Contacter', href: '/' },
  { name: 'Compagnie', href: '/' },
]
export default function Navbar({login,childen}) {
  const _l = {text:login?"Connexion":"S'inscrite", link:login?"/auth":"/auth/accounts/new-client"}
 
  return (
    <>
       <Popover>
            <div className="relative pt-2 px-4 sm:px-6 lg:px-8  pb-2">
              <nav className="relative flex  items-center justify-between sm:h-10 lg:justify-between" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/">
                      <span className="sr-only">{name}</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src={logo}
                        alt={definition+ "logo"}
                      />
                    </Link>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                        <span className="sr-only">ouvrir le menu principale</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8 ">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.href} className="uppercase font-thin text-gray-500 hover:font-semibold hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))}
                 <Link  to={_l.link} className="uppercase font-semibold font-md text-teal-400 hover:text-teal-500">
                    <UserGroupIcon className="align-bottom inline h-6 w-6" /> <span className="font-thin align-bottom inline">{_l.text}</span>  
                  </Link>
                </div>
              </nav>
            </div>

            <Transition
              as={Fragment}
              enter="duration-150 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
              >
                <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto"
                        src={logo}
                        alt={definition+" logo"}
                      />
                    </div>
                    <div className="-mr-2">
                      <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
                        <span className="sr-only">fermé le menu principale</span>
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to="/"
                        className="uppercase font-thin  block px-3 py-2 rounded-md text-base text-gray-700 hover:text-white hover:bg-teal-300"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  {childen}
                  <Link
                    to={_l.link}
                    className="uppercase font-thin block w-full px-5 py-3 text-center  text-teal-600 bg-gray-50 hover:bg-gray-100"
                  >
                   <UserGroupIcon className="align-bottom inline h-6 w-6" /> {_l.text}
                  </Link>
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
    </>
  );
}
