import { Link } from "react-router-dom";
import { DASHBORD, LOGIN, EXCHANGE, SETTINGS } from "../../constant/routes";
import { Menu } from "@headlessui/react";
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
export default ({ data }) => {
  return (
    <header id="header" className="z-50 top-0 fixed w-full border-b-2 h-14 bg-white justify-between flex items-center px-4 md:pl-64">
      <div className="flex items-center justify-end relative w-full space-x-3">
        {/* notification */}
        <Menu>
          <span className="sr-only">Notification</span>
          <Menu.Button className="relative bg-gray-200 p-2 hover:bg-gray-200 rounded-full">
            <span className="absolute top-0 right-0 bg-red-600 block w-2 h-2 rounded-full ring-1 ring-red-400 ring-inset" />
            <svg className="w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
              <path className="fill-current text-gray-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
              <path className="fill-current text-gray-400" d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
            </svg>
          </Menu.Button>
          <Menu.Items className="p-2 absolute top-12  right-0 w-56 bg-white divide-y rounded-md max-h-56 overflow-x-hidden overflow-y-auto ">
            {UserNotification.map((data, index) => (
              <Message data={data} key={index} />
            ))}
          </Menu.Items>
        </Menu>

        {/* avatar */}
        <Menu>
          <Menu.Button>
            <svg className="inline w-8 h-8 bg-gray-200 rounded-full text-indigo-800" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM12 7C12 8.10457 11.1046 9 10 9C8.89543 9 8 8.10457 8 7C8 5.89543 8.89543 5 10 5C11.1046 5 12 5.89543 12 7ZM9.99993 11C7.98239 11 6.24394 12.195 5.45374 13.9157C6.55403 15.192 8.18265 16 9.99998 16C11.8173 16 13.4459 15.1921 14.5462 13.9158C13.756 12.195 12.0175 11 9.99993 11Z" fill="currentColor" />
            </svg>
            <span className="inline font-medium text-sm truncate">{data?.info?.username}</span>
            <svg className="w-3 h-3 inline ml-1 fill-current text-gray-400" viewBox="0 0 12 12">
              <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
            </svg>
          </Menu.Button>
          <Menu.Items className="bg-white shadow-lg rounded-md absolute top-12 right-0">
            <ul className="flex justify-center items-center flex-col block">
              <Menu.Item as="li">
                <a href="#" className="mt-1 flex space-x-3 items-center px-2 py-2 w-32 text-center hover:bg-sky-100">
                  <svg className="inline w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-current text-gray-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
                    <path className="fill-current text-gray-400" d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
                  </svg>
                  <span>Settings</span>
                </a>
              </Menu.Item>
              <Menu.Item as="li">
                <a href="#" className="flex transition-all duration-200 space-x-3 items-center px-2 py-2 w-32 text-center hover:bg-sky-100">
                  <svg className="inline w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-current text-gray-500" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
                    <path className="fill-current text-gray-400" d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
                  </svg>
                  <span>Profile</span>
                </a>
              </Menu.Item>
              <Menu.Item as="li">
                <a href="#" className="mb-1 text-red-400 flex space-x-3 items-center px-2 py-2 w-32 text-center hover:bg-sky-100">
                  <svg className="inline w-4 h-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-current text-red-400" d="M6.5 0C2.91 0 0 2.462 0 5.5c0 1.075.37 2.074 1 2.922V12l2.699-1.542A7.454 7.454 0 006.5 11c3.59 0 6.5-2.462 6.5-5.5S10.09 0 6.5 0z" />
                    <path className="fill-current text-red-300" d="M16 9.5c0-.987-.429-1.897-1.147-2.639C14.124 10.348 10.66 13 6.5 13c-.103 0-.202-.018-.305-.021C7.231 13.617 8.556 14 10 14c.449 0 .886-.04 1.307-.11L15 16v-4h-.012C15.627 11.285 16 10.425 16 9.5z" />
                  </svg>
                  <span className="text-red-400">Logout</span>
                </a>
              </Menu.Item>
            </ul>
          </Menu.Items>
        </Menu>
      </div>
      <nav>
        <div id="mobile" className="w-full md:hidden bottom-0 left-0 bg-purple-700 fixed h-14 px-10">
          <div id="items" className="flex justify-between align-center h-14 rel">
            <Link to={DASHBORD} className="flex text-gray-200 transition-all duration-500 flex-col justify-center items-center hover:bg-gray-100 px-2 border-top-2 hover:text-purple-700">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>
              <span className="block text-sm font-semibold">Dashbord</span>
            </Link>
            <Link to={EXCHANGE} className="flex flex-col transition-all duration-500 justify-center items-center hover:bg-gray-100 px-2 text-gray-200 hover:text-purple-700 border-top-2">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5C7.44772 5 7 5.44771 7 6C7 6.55228 7.44772 7 8 7L13.5858 7L12.2929 8.29289C11.9024 8.68342 11.9024 9.31658 12.2929 9.70711C12.6834 10.0976 13.3166 10.0976 13.7071 9.70711L16.7071 6.70711C16.8946 6.51957 17 6.26522 17 6C17 5.73478 16.8946 5.48043 16.7071 5.29289L13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289C11.9024 2.68342 11.9024 3.31658 12.2929 3.70711L13.5858 5L8 5Z" fill="currentColor" />
                <path d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13L6.41421 13L7.70711 11.7071C8.09763 11.3166 8.09763 10.6834 7.70711 10.2929C7.31658 9.90237 6.68342 9.90237 6.29289 10.2929L3.29289 13.2929C3.10536 13.4804 3 13.7348 3 14C3 14.2652 3.10536 14.5196 3.29289 14.7071L6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071C8.09763 17.3166 8.09763 16.6834 7.70711 16.2929L6.41421 15L12 15Z" fill="currentColor" />
              </svg>
              <span className="block text-sm font-semibold">Exchange</span>
            </Link>
            <Link to="/" className="flex flex-col transition-all duration-500 text-gray-200 hover:text-purple-700 justify-center items-center hover:bg-gray-100 px-2 border-top-2">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6C13 7.65685 11.6569 9 10 9C8.34315 9 7 7.65685 7 6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6Z" fill="currentColor" />
                <path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z" fill="currentColor" />
                <path d="M14 15C14 12.7909 12.2091 11 10 11C7.79086 11 6 12.7909 6 15V18H14V15Z" fill="currentColor" />
                <path d="M6 8C6 9.10457 5.10457 10 4 10C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6C5.10457 6 6 6.89543 6 8Z" fill="currentColor" />
                <path d="M16 18V15C16 13.9459 15.7282 12.9552 15.2507 12.0943C15.4902 12.0327 15.7413 12 16 12C17.6569 12 19 13.3431 19 15V18H16Z" fill="currentColor" />
                <path d="M4.74926 12.0943C4.27185 12.9552 4 13.9459 4 15V18H1V15C1 13.3431 2.34315 12 4 12C4.25871 12 4.50977 12.0327 4.74926 12.0943Z" fill="currentColor" />
              </svg>
              <span className="block text-sm font-semibold">Affiliation</span>
            </Link>
            <Link to={SETTINGS} className="flex flex-col transition-all duration-500 text-gray-200 hover:text-purple-700 justify-center items-center hover:bg-gray-100 px-2 border-top-2">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4892 3.17094C11.1102 1.60969 8.8898 1.60969 8.51078 3.17094C8.26594 4.17949 7.11045 4.65811 6.22416 4.11809C4.85218 3.28212 3.28212 4.85218 4.11809 6.22416C4.65811 7.11045 4.17949 8.26593 3.17094 8.51078C1.60969 8.8898 1.60969 11.1102 3.17094 11.4892C4.17949 11.7341 4.65811 12.8896 4.11809 13.7758C3.28212 15.1478 4.85218 16.7179 6.22417 15.8819C7.11045 15.3419 8.26594 15.8205 8.51078 16.8291C8.8898 18.3903 11.1102 18.3903 11.4892 16.8291C11.7341 15.8205 12.8896 15.3419 13.7758 15.8819C15.1478 16.7179 16.7179 15.1478 15.8819 13.7758C15.3419 12.8896 15.8205 11.7341 16.8291 11.4892C18.3903 11.1102 18.3903 8.8898 16.8291 8.51078C15.8205 8.26593 15.3419 7.11045 15.8819 6.22416C16.7179 4.85218 15.1478 3.28212 13.7758 4.11809C12.8896 4.65811 11.7341 4.17949 11.4892 3.17094ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="currentColor" />
              </svg>
              <span className="block text-sm font-semibold">Settings</span>
            </Link>
            <a href="#" className="flex flex-col transition-all duration-500 text-gray-200 hover:text-purple-700 justify-center items-center hover:bg-gray-100 px-2 border-top-2">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10 7C9.63113 7 9.3076 7.19922 9.13318 7.50073C8.85664 7.97879 8.24491 8.14215 7.76685 7.86561C7.28879 7.58906 7.12543 6.97733 7.40197 6.49927C7.91918 5.60518 8.88833 5 10 5C11.6569 5 13 6.34315 13 8C13 9.30622 12.1652 10.4175 11 10.8293V11C11 11.5523 10.5523 12 10 12C9.44773 12 9.00001 11.5523 9.00001 11V10C9.00001 9.44772 9.44773 9 10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z" fill="currentColor" />
              </svg>
              <span className="block text-sm font-semibold">Help</span>
            </a>
          </div>
        </div>
        {/* desktop */}
        <div id="desktop" className="w-56 h-screen bg-purple-800 fixed top-0 bottom-0 left-0 hidden md:flex flex-col items-center py-4">
          <div className="logo w-20 h-20 rounded-full bg-white" />
          <div id="nav-items " className="mt-10 w-full pl-4">
            <Link to={DASHBORD} className="rounded-l-lg border-transparent transition-all duration-500 border-r-2 hover:border-red-500 text-gray-200 hover:text-indigo-900 flex items-center space-x-3 hover:bg-gray-100 py-4 pl-3">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C2 5.58172 5.58172 2 10 2V10H18C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="currentColor" />
                <path d="M12 2.25195C14.8113 2.97552 17.0245 5.18877 17.748 8.00004H12V2.25195Z" fill="currentColor" />
              </svg>
              <span className="block text-md font-semibold">Dashbord</span>
            </Link>
            <Link to={EXCHANGE} className="rounded-l-lg border-transparent border-r-2 transition-all duration-500 hover:border-red-500 text-gray-200 hover:text-indigo-900 flex items-center space-x-3 hover:bg-gray-100 py-4 pl-3">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 5C7.44772 5 7 5.44771 7 6C7 6.55228 7.44772 7 8 7L13.5858 7L12.2929 8.29289C11.9024 8.68342 11.9024 9.31658 12.2929 9.70711C12.6834 10.0976 13.3166 10.0976 13.7071 9.70711L16.7071 6.70711C16.8946 6.51957 17 6.26522 17 6C17 5.73478 16.8946 5.48043 16.7071 5.29289L13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289C11.9024 2.68342 11.9024 3.31658 12.2929 3.70711L13.5858 5L8 5Z" fill="currentColor" />
                <path d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13L6.41421 13L7.70711 11.7071C8.09763 11.3166 8.09763 10.6834 7.70711 10.2929C7.31658 9.90237 6.68342 9.90237 6.29289 10.2929L3.29289 13.2929C3.10536 13.4804 3 13.7348 3 14C3 14.2652 3.10536 14.5196 3.29289 14.7071L6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071C8.09763 17.3166 8.09763 16.6834 7.70711 16.2929L6.41421 15L12 15Z" fill="currentColor" />
              </svg>
              <span className="block text-md font-semibold">Exchange</span>
            </Link>
            <a href="#" className="rounded-l-lg border-transparent border-r-2 transition-all duration-500 hover:border-red-500 text-gray-200 hover:text-indigo-900 flex items-center space-x-3 hover:bg-gray-100 py-4 pl-3">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 6C13 7.65685 11.6569 9 10 9C8.34315 9 7 7.65685 7 6C7 4.34315 8.34315 3 10 3C11.6569 3 13 4.34315 13 6Z" fill="currentColor" />
                <path d="M18 8C18 9.10457 17.1046 10 16 10C14.8954 10 14 9.10457 14 8C14 6.89543 14.8954 6 16 6C17.1046 6 18 6.89543 18 8Z" fill="currentColor" />
                <path d="M14 15C14 12.7909 12.2091 11 10 11C7.79086 11 6 12.7909 6 15V18H14V15Z" fill="currentColor" />
                <path d="M6 8C6 9.10457 5.10457 10 4 10C2.89543 10 2 9.10457 2 8C2 6.89543 2.89543 6 4 6C5.10457 6 6 6.89543 6 8Z" fill="currentColor" />
                <path d="M16 18V15C16 13.9459 15.7282 12.9552 15.2507 12.0943C15.4902 12.0327 15.7413 12 16 12C17.6569 12 19 13.3431 19 15V18H16Z" fill="currentColor" />
                <path d="M4.74926 12.0943C4.27185 12.9552 4 13.9459 4 15V18H1V15C1 13.3431 2.34315 12 4 12C4.25871 12 4.50977 12.0327 4.74926 12.0943Z" fill="currentColor" />
              </svg>
              <span className="block text-md font-semibold">Affiliation</span>
            </a>
            <a href="#" className="rounded-l-lg border-transparent border-r-2 transition-all duration-500 hover:border-red-500 text-gray-200 hover:text-indigo-900 flex items-center space-x-3 hover:bg-gray-100 py-4 pl-3">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M11.4892 3.17094C11.1102 1.60969 8.8898 1.60969 8.51078 3.17094C8.26594 4.17949 7.11045 4.65811 6.22416 4.11809C4.85218 3.28212 3.28212 4.85218 4.11809 6.22416C4.65811 7.11045 4.17949 8.26593 3.17094 8.51078C1.60969 8.8898 1.60969 11.1102 3.17094 11.4892C4.17949 11.7341 4.65811 12.8896 4.11809 13.7758C3.28212 15.1478 4.85218 16.7179 6.22417 15.8819C7.11045 15.3419 8.26594 15.8205 8.51078 16.8291C8.8898 18.3903 11.1102 18.3903 11.4892 16.8291C11.7341 15.8205 12.8896 15.3419 13.7758 15.8819C15.1478 16.7179 16.7179 15.1478 15.8819 13.7758C15.3419 12.8896 15.8205 11.7341 16.8291 11.4892C18.3903 11.1102 18.3903 8.8898 16.8291 8.51078C15.8205 8.26593 15.3419 7.11045 15.8819 6.22416C16.7179 4.85218 15.1478 3.28212 13.7758 4.11809C12.8896 4.65811 11.7341 4.17949 11.4892 3.17094ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="currentColor" />
              </svg>
              <span className="block text-md font-semibold">Settings</span>
            </a>
            <a href="#" className="rounded-l-lg border-transparent border-r-2 transition-all duration-500 hover:border-red-500 text-gray-200 hover:text-indigo-900 flex items-center space-x-3 hover:bg-gray-100 py-4 pl-3">
              <svg className="w-8 h-8" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM10 7C9.63113 7 9.3076 7.19922 9.13318 7.50073C8.85664 7.97879 8.24491 8.14215 7.76685 7.86561C7.28879 7.58906 7.12543 6.97733 7.40197 6.49927C7.91918 5.60518 8.88833 5 10 5C11.6569 5 13 6.34315 13 8C13 9.30622 12.1652 10.4175 11 10.8293V11C11 11.5523 10.5523 12 10 12C9.44773 12 9.00001 11.5523 9.00001 11V10C9.00001 9.44772 9.44773 9 10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z" fill="currentColor" />
              </svg>
              <span className="block text-md font-semibold">Help</span>
            </a>
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
            <p className="text-xs text-gray-400">
              <a href="#">{data.message.slice(0, 100)}</a>
            </p>
          </div>
        </div>
      </Menu.Item>
    </>
  );
}
