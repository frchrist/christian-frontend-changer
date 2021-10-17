import { Link } from "react-router-dom";
import { Fragment } from "react";
import { DASHBORD, EXCHANGE, SETTINGS } from "../../constant/routes";
import { Menu, Transition } from "@headlessui/react";
import { ProfileIcon, MessageIcon, DownIcon, AffiliationIcon, Logo, DashbordIcon, SettingsIcon, HelpIcon, ExchangeIcon } from "../../icons";
const UserNotification = [
  {
    title: "Admin",
    message: "renforcer votre security en cliquant sur le lien suivant",
  },
  {
    title: "Admin",
    message: "renforcer votre security en cliquant sur le lien suivant",
  },
  {
    title: "Admin",
    message: "renforcer votre security en cliquant sur le lien suivant",
  },
];
const navItem = [
  {
    title: "Dashbord",
    path: DASHBORD,
    svg: <DashbordIcon className="w-8 h-8" />,
  },
  {
    title: "Exchange",
    path: EXCHANGE,
    svg: <ExchangeIcon className="w-8 h-8" />,
  },

  {
    title: "Affiliation",
    path: "/",
    svg: <AffiliationIcon className="w-8 h-8" />,
  },

  {
    title: "Settings",
    path: SETTINGS,
    svg: <SettingsIcon className="w-8 h-8" />,
  },
  {
    title: "Aides",
    path: "/",
    svg: <HelpIcon className="w-8 h-8" />,
  },
];

const Head = ({ data }) => {
  return (
    <header id="header" className="z-50 top-0 fixed w-full border-b-2 h-14 bg-white justify-between flex items-center px-4 md:pl-64">
      <div className="logo w-8 h-8 rounded-full md:hidden">
        <Logo className="w-8 h-8" />
      </div>

      <div className="flex items-center justify-end relative w-full space-x-3">
        {/* notification */}
        <Menu>
          <span className="sr-only">Notification</span>
          <Menu.Button className="relative bg-gray-200 p-2 hover:bg-gray-200 rounded-full">
            <span className="absolute top-0 right-0 bg-red-600 block w-2 h-2 rounded-full ring-1 ring-red-400 ring-inset" />
            <MessageIcon className="w-4 h-4" />
          </Menu.Button>
          <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="p-2 absolute top-12  right-0 w-56 bg-white divide-y rounded-md max-h-56 overflow-x-hidden overflow-y-auto ">
              {UserNotification.map((data, index) => (
                <Message data={data} key={index} />
              ))}
            </Menu.Items>
          </Transition>
        </Menu>

        {/* avatar */}
        <Menu>
          <Menu.Button>
            <ProfileIcon className="inline w-8 h-8 bg-gray-200 rounded-full text-indigo-800" />
            <span className="inline font-medium text-sm truncate">{data?.info?.username}</span>
            <DownIcon className="w-3 h-3 inline ml-1 fill-current text-gray-400" />
          </Menu.Button>
          <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95" enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75" leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
            <Menu.Items className="bg-white shadow-lg rounded-md absolute top-12 right-0 w-44">
              <ul className="flex justify-center items-center flex-col">
                {MenuItem.map((item, index) => (
                  <Menu.Item as="li" key={index}>
                    <MenuLink name={item.name} path={item.path}>
                      {" "}
                      {item.svg}{" "}
                    </MenuLink>
                  </Menu.Item>
                ))}
              </ul>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
      <nav>
        <div id="mobile" className="w-full md:hidden bottom-0 left-0 bg-purple-700 fixed h-14 px-10">
          <div id="items" className="flex justify-between align-center h-14 rel">
            {navItem.map((item, index) => (
              <MobileNavItem key={index} title={item.title} icon={item.svg} path={item.path} />
            ))}
          </div>
        </div>
        {/* desktop */}
        <div id="desktop" className="w-56 h-screen bg-purple-900 bg-opacity-90 fixed top-0 bottom-0 left-0 hidden md:flex flex-col items-center py-4">
          <div className="logo w-20 h-20 rounded-full ">
            <Logo className="w-12 h-12" />
          </div>
          <div id="nav-items " className="mt-10 w-full pl-4">
            {navItem.map((item, index) => (
              <DesktopNavItem key={index} title={item.title} icon={item.svg} path={item.path} />
            ))}
          </div>
          <div className="footer absolute bottom-10">
            <div className="media flex justify-center items-center space-x-4">
              <div className="flex flex-col justify-center items-center">
                <div className="icon w-6 h-6 bg-gray-400 text-center rounded-full" />
                <span className="block text-xs font-semibold">facebook</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="icon w-6 h-6 bg-gray-400 text-center rounded-full" />
                <span className="block text-xs font-semibold">twitter</span>
              </div>
              <div className="flex flex-col justify-center items-center">
                <div className="icon w-6 h-6 bg-gray-400 text-center rounded-full" />
                <span className="block text-xs font-semibold">telegram</span>
              </div>
            </div>
            <p className="text-md text-gray-200 my-2">Copyright @olichange 2021</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Head;
function Message({ data }) {
  return (
    <>
      <Menu.Item as="div" className="flex justify-between space-x-3 items-start py-1">
        <svg className="w-14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current text-gray-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
          <path className="fill-current text-gray-400" d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
        </svg>
        <div>
          <div id="title">
            <h4 className="text-sm font-medium">{data.title}</h4>
          </div>
          <div id="sms">
            <p className="text-xs text-sky-800">
              <a href="/">{data.message.slice(0, 100)}</a>
            </p>
          </div>
        </div>
      </Menu.Item>
    </>
  );
}
function DesktopNavItem({ title, path, icon }) {
  return (
    <Link to={path} className="rounded-l-lg border-transparent transition-all duration-200 border-r-2 hover:border-red-500 text-gray-200 hover:text-indigo-900 flex items-center space-x-3 hover:bg-gray-100 py-4 pl-3">
      {icon} <span className="block text-md font-semibold">{title}</span>
    </Link>
  );
}
function MobileNavItem({ title, path, icon }) {
  return (
    <Link
      to={path}
      className="flex text-gray-200 transition-all duration-500 flex-col justify-center items-center
              hover:bg-gray-100 px-2 border-top-2 hover:text-purple-700"
    >
      {icon} <span className="block text-sm font-semibold">{title}</span>
    </Link>
  );
}
function MenuLink({ name, path, children }) {
  return (
    <Link to={path} className="mb-1 text-gray-400 flex space-x-3 items-center px-2 py-2 w-44 text-center hover:bg-sky-100">
      {children} <span className="text-gray-800">{name}</span>
    </Link>
  );
}

const MenuItem = [
  {
    name: "Profile",
    path: "/",
    svg: <MessageIcon className="w-8 h-8" />,
  },
  {
    name: "Settings",
    path: SETTINGS,

    svg: <MessageIcon className="w-8 h-8" />,
  },
  {
    name: "Logout",
    path: "/",

    svg: <MessageIcon className="w-8 h-8" />,
  },
];
