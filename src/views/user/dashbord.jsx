import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import React from "react";
import logout_request from "../../helpers/requests/logout";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import FlashMessage from "../../components/messages/message";
import * as actions from "../../state/actions/auth";
import Head from "../../components/head";
import { name } from "../../constant/appname";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CurrencyData = [
  {
    name: "BTC",
    value: "56298$",
    up: "1.4%",
    down: "2%",
  },
  {
    name: "ETH",
    value: "1023$",
    up: "12%",
    down: "2.2%",
  },

  {
    name: "LTC",
    value: "120$",
    up: "0.2%",
    down: "0.23%",
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
const Dashboard = ({ auth_state, auth_actions }) => {
  const history = useHistory();
  const auth_action = bindActionCreators(actions, useDispatch());
  const logout = (e) => logout_request(auth_action, history);

  useEffect(() => {
    document.title = " Bienvenue sur " + name;
  }, []);
  const currentUser = {
    info: auth_state,
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
      <main id="main-section" className="antialiased bg-sky-200 min-h-screen bg-opacity-10 px-8 bg-gray-100 space-y-3 pt-4 md:pl-64 pb-14 mt-14">
        <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
          <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
            <svg width={319} height={198} xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <path id="welcome-a" d="M64 0l64 128-64-20-64 20z" />
                <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z" />
                <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z" />
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
                  <stop stopColor="#A5B4FC" offset="0%" />
                  <stop stopColor="#818CF8" offset="100%" />
                </linearGradient>
                <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
                  <stop stopColor="#4338CA" offset="0%" />
                  <stop stopColor="#6366F1" stopOpacity={0} offset="100%" />
                </linearGradient>
              </defs>
              <g fill="none" fillRule="evenodd">
                <g transform="rotate(64 36.592 105.604)">
                  <mask id="welcome-d" fill="#fff">
                    <use xlinkHref="#welcome-a" />
                  </mask>
                  <use fill="url(#welcome-b)" xlinkHref="#welcome-a" />
                  <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z" />
                </g>
                <g transform="rotate(-51 91.324 -105.372)">
                  <mask id="welcome-f" fill="#fff">
                    <use xlinkHref="#welcome-e" />
                  </mask>
                  <use fill="url(#welcome-b)" xlinkHref="#welcome-e" />
                  <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z" />
                </g>
                <g transform="rotate(44 61.546 392.623)">
                  <mask id="welcome-h" fill="#fff">
                    <use xlinkHref="#welcome-g" />
                  </mask>
                  <use fill="url(#welcome-b)" xlinkHref="#welcome-g" />
                  <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z" />
                </g>
              </g>
            </svg>
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
        {/* transaction tables */}
        <section>
          <table className="w-full select-none overflow-auto">
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
            <tbody>
              {recentTransaction?.map((data, index) => (
                <RecentTransactionRow data={data} key={index} />
              ))}
            </tbody>
          </table>
        </section>
      </main>
      <a title="start exchange" href="#" className="block fixed bottom-8 right-4 bg-white rounded-full p-3 shadow-lg">
        <svg className="w-8 h-8 text-sky-700 bg-transparent drop-shadow-2xl" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 5C7.44772 5 7 5.44771 7 6C7 6.55228 7.44772 7 8 7L13.5858 7L12.2929 8.29289C11.9024 8.68342 11.9024 9.31658 12.2929 9.70711C12.6834 10.0976 13.3166 10.0976 13.7071 9.70711L16.7071 6.70711C16.8946 6.51957 17 6.26522 17 6C17 5.73478 16.8946 5.48043 16.7071 5.29289L13.7071 2.29289C13.3166 1.90237 12.6834 1.90237 12.2929 2.29289C11.9024 2.68342 11.9024 3.31658 12.2929 3.70711L13.5858 5L8 5Z" fill="currentColor" />
          <path d="M12 15C12.5523 15 13 14.5523 13 14C13 13.4477 12.5523 13 12 13L6.41421 13L7.70711 11.7071C8.09763 11.3166 8.09763 10.6834 7.70711 10.2929C7.31658 9.90237 6.68342 9.90237 6.29289 10.2929L3.29289 13.2929C3.10536 13.4804 3 13.7348 3 14C3 14.2652 3.10536 14.5196 3.29289 14.7071L6.29289 17.7071C6.68342 18.0976 7.31658 18.0976 7.70711 17.7071C8.09763 17.3166 8.09763 16.6834 7.70711 16.2929L6.41421 15L12 15Z" fill="currentColor" />
        </svg>
      </a>
    </>
  );
};

function CurrencyPresentation({ classes, data }) {
  return (
    <>
      <div className={"w-full  to-red-500 border rounded-lg border-white p-3 flex justify-between lg:flex-col " + classes}>
        <div className="currencie-icon w-14 h-14 rounded-full bg-white" />
        <div className="currencie-info">
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
        <div id="charts" className="w-48 lg:w-20" />
      </div>
    </>
  );
}

function RecentTransactionRow({ data }) {
  const colors = {
    done: "bg-teal-400 text-teal-800",
    pending: "bg-purple-400 text-purple-800",
    failed: "bg-red-400 text-red-800",
  };
  return (
    <>
      <tr className="text-center bg-gray-200 text-gray-900">
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
          <span className={colors[data.status] + "bg-opacity-20 text-capitalize text-xs px-2 py-1 w-10 text-medium rounded-full  font-semibold inline"}>{data.status}</span>
        </td>
        <td>{data.description}</td>
      </tr>
    </>
  );
}
export default Dashboard;
