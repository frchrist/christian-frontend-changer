import { useEffect } from "react";
import React from "react";
import FlashMessage from "../../components/messages/message";
import Head from "../../components/head";
import { name } from "../../constant/appname";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { Litecoin, Bitcoin, Etheurium, Triangle, SwitchHIcon, TableIcon } from "../../icons";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import ApexChart from "../../components/chart";
const Dashboard = () => {
  useEffect(() => {
    document.title = " Bienvenue sur " + name;
  }, []);
  const currentUser = {
    info: { username: "user" },
  };
  return (
    <>
      <Head data={currentUser} />
      <FlashMessage />
      <Main data={currentUser} />
    </>
  );
};

const Main = ({ data }) => {
  return (
    <>
      <main id="main-section" className="antialiased bg-sky-200 min-h-screen bg-opacity-10 px-8 space-y-3 pt-4 md:pl-64 pb-14 mt-14">
        <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
          <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
            <Triangle />
            {" triangle icon"}
          </div>
          <div className="relative">
            <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Bienvenue {data.info.username} sur, Olichange. 👋</h1>
            <p>Faites vos echanges de cryptomonnaie ici</p>
          </div>
        </div>
        <div id="balance" className="w-56  shadow-lg p-4 rounded-xl bg-gradient-to-tr from-indigo-900 to-sky-300">
          <div className="text-2xl text-gray-800 font-medium">
            <span className="block text-white "> Balance </span>
            <span className="text-3xl text-white">1000 €</span>
          </div>
        </div>
        <section id="currencies-evolution" className="space-y-2 lg:flex lg:space-x-3 lg:space-y-0">
          {CurrencyData?.map((data, index) => (
            <CurrencyPresentation data={data} key={index} classes={CurrencyClasses[index]} />
          ))}
        </section>
        <section>
          <h3 className="text-2xl text-gray-800 my-1">Currencies Chart</h3>
          <ApexChart />
        </section>
        {/* transaction tables */}
        <section>
          <div>
            <h3 className="text-2xl text-gray-800 my-1">
              Transation recents <TableIcon className="w-8 inline text-gray-800" />
            </h3>
            <div>
              <div className="text-xs font-bold flex space-x-2 items-center my-2">
                <span> Pour </span> <Listing datas={t_filter_time} /> <span> Status </span>
                <Listing datas={t_filter_status} />
              </div>
            </div>
          </div>
          <table className="w-full select-none overflow-auto">
            <Th />
            <tbody>
              {recentTransaction?.map((data, index) => (
                <RecentTransactionRow data={data} key={index} k={index} />
              ))}
            </tbody>
          </table>
          <TablePagination />
        </section>
      </main>
      <ExchangeShortcut />{" "}
    </>
  );
};

function ExchangeShortcut() {
  return (
    <a title="start exchange" href="/" className="block fixed bottom-16 right-4 bg-white rounded-full p-3 shadow-lg">
      <SwitchHIcon className="w-8 h-8 text-sky-700 bg-transparent drop-shadow-2xl" />
    </a>
  );
}
function TablePagination() {
  return (
    <p className="flex justify-end space-x-2 text-gray-500">
      <button className="flex items-center space-x-1">
        <svg className="w-4 h-4" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current" fillRule="evenodd" clipRule="evenodd" d="M12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L9.41421 10L12.7071 13.2929C13.0976 13.6834 13.0976 14.3166 12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z" />
        </svg>
        <span>prev</span>{" "}
      </button>
      <button className="font-bold"> 1 </button>
      <button> 2 </button>
      <button> 3 </button>
      <button className="flex items-center space-x-1">
        <span>next</span>
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current" fillRule="evenodd" clipRule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" />
        </svg>
      </button>
    </p>
  );
}

function CurrencyPresentation({ classes, data }) {
  return (
    <>
      <div className={"w-full  to-red-500 border rounded-lg border-white p-3 flex justify-between flex-col  " + classes}>
        <div className="flex space-x-2">
          {data.svg}
          <div className="currencie-info ">
            <div>
              <span className="text-xl font-semibold">{data.name}</span> <span className="px-1 ml-1 rounded bg-gray-200 font-bold text-sky-800">{data.value}</span>
            </div>
            <div className="space-x-1">
              <span className="bg-gray-200 text-red-500 text-xs rounded px-1">
                <span>{data.down}</span>
                <svg className="w-2 h-2 -mb-1 inline" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071L10.7071 17.7071C10.3166 18.0976 9.68342 18.0976 9.29289 17.7071L3.29289 11.7071C2.90237 11.3166 2.90237 10.6834 3.29289 10.2929C3.68342 9.90237 4.31658 9.90237 4.70711 10.2929L9 14.5858L9 3C9 2.44772 9.44772 2 10 2C10.5523 2 11 2.44772 11 3L11 14.5858L15.2929 10.2929C15.6834 9.90237 16.3166 9.90237 16.7071 10.2929Z" fill="currentColor" />
                </svg>
              </span>
              <span className="bg-gray-200 text-teal-500 text-xs rounded px-1">
                {data.up}{" "}
                <svg className="w-2 h-2 -ml-1 -mt-2 inline" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 7.70711C4.90237 7.31658 4.90237 6.68342 5.29289 6.29289L9.29289 2.29289C9.68342 1.90237 10.3166 1.90237 10.7071 2.29289L14.7071 6.29289C15.0976 6.68342 15.0976 7.31658 14.7071 7.70711C14.3166 8.09763 13.6834 8.09763 13.2929 7.70711L11 5.41421L11 17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17L9 5.41421L6.70711 7.70711C6.31658 8.09763 5.68342 8.09763 5.29289 7.70711Z" fill="currentColor" />
                </svg>
              </span>
            </div>
          </div>
        </div>
        <Sparklines data={[5, 10, 5, 20, 8, 15, 12, 98, 13, 89, 20, 23, 100, 98, 96, 91, 70]} limit={10} height={20} margin={5}>
          <SparklinesLine style={{ stroke: "#1ce", strokeWidth: "1", fill: "#333" }} />
        </Sparklines>{" "}
      </div>
    </>
  );
}

function RecentTransactionRow({ data, k }) {
  const colors = {
    done: "border-teal-800 text-teal-800",
    pending: "border-purple-800 text-purple-800",
    failed: "border-red-800 text-red-8000",
  };
  const cls = k % 2 === 0 ? "text-white bg-indigo-500" : "text-gray-900 bg-indigo-200";
  return (
    <>
      <tr className={"text-center " + cls}>
        <td className="font-semibold py-3">{data.ref}</td>
        <td>{data.date}</td>
        <td className="flex relative">
          <div className="absolute left-1/2 top-2">
            <div className="w-8 h-8 bg-gray-900 rounded-full absolute" />
            <div className="w-8 h-8 bg-gray-800 rounded-full absolute -left-4" />
          </div>
        </td>
        <td>{data.amount}</td>
        <td>
          <span className={colors[data.status] + "bg-transparente  text-xs px-2 w-10 text-medium rounded-full  font-semibold inline"}>{data.status}</span>
        </td>
        <td>{data.description}</td>
      </tr>
    </>
  );
}
function Listing({ datas = [] }) {
  const [selected, setSelected] = useState(datas[0]);

  return (
    <div className="w-44 ">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{selected?.element}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-xs bg-sky-100 bg-opacity-90 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {datas.map((data, id) => (
                <Listbox.Option
                  key={id}
                  className={({ active }) =>
                    `${active ? "text-amber-900 bg-amber-100" : "text-gray-900"}
                          cursor-default select-none relative py-1 pl-10 pr-4`
                  }
                  value={data}
                >
                  {({ selected, active }) => (
                    <>
                      <span className={`${selected ? "font-medium" : "font-normal"} block truncate`}>{data?.element}</span>
                      {selected ? (
                        <span
                          className={`${active ? "text-amber-600" : "text-amber-600"}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                        >
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
function Th() {
  return (
    <thead>
      <tr className="bg-purple-700 md:bg-indigo-700 text-white">
        <th className="py-2">Ref</th>
        <th>Date</th>
        <th>type</th>
        <th>Montant</th>
        <th>Statut</th>
        <th>Description</th>
      </tr>
    </thead>
  );
}
const t_filter_time = [{ element: "3 derniers Jours" }, { element: "3 derniers Mois" }, { element: "3 derniers Années" }];
const t_filter_status = [{ element: "Terminer" }, { element: "Encours" }, { element: "Echouer" }, { element: "Tout" }];
const CurrencyData = [
  {
    name: "BTC",
    value: "56298$",
    up: "1.4%",
    down: "2%",
    svg: <Bitcoin className="w-14 h-14 border border-white rounded-full" />,
  },
  {
    name: "ETH",
    value: "1023$",
    up: "12%",
    down: "2.2%",
    svg: <Etheurium className="w-14 h-14 border border-white rounded-full" />,
  },

  {
    name: "LTC",
    value: "120$",
    up: "0.2%",
    down: "0.23%",
    svg: <Litecoin className="w-14 h-14 border border-white rounded-full" />,
  },
];

const recentTransaction = [
  {
    ref: "AX72634",
    date: "12/20/20",
    type: "PM-JS",
    amount: "10$",
    status: "done",
    description: "Achat de react ",
  },

  {
    ref: "AX72634",
    date: "12/20/20",
    type: "PM-JS",
    amount: "10$",
    status: "pending",
    description: "",
  },
];

const CurrencyClasses = ["bg-gradient-to-tr from-pink-500 to-red-500", " bg-gradient-to-tr from-sky-500 to-purple-600", "bg-gradient-to-tr from-sky-300 to-teal-700"];
export default Dashboard;
