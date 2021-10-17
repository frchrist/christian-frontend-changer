import { Link } from "react-router-dom";
import { useEffect } from "react";
import Nav from "../components/simple/nav";
import Transaction from "../components/simple/transactions";
import Exchange from "../components/simple/exchanges";
import Footer from "../components/simple/footer";
import { definition } from "../constant/appname";
import { REGISTER, EXCHANGE } from "../constant/routes";
import FlashMessage from "../components/messages/message";

import { useSelector } from "react-redux";
export default function Home() {
  useEffect(() => {
    document.title = "Bienvenue sur la " + definition;
  }, []);
  const { is_auth } = useSelector((state) => state.auth);
  const objects = {
    data: is_auth
      ? {
          title: "Exchange",
          path: EXCHANGE,
        }
      : {
          title: "Débuter",
          path: REGISTER,
        },
  };

  return (
    <>
      <FlashMessage />
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto bg-gray-400">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-52 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
            <Nav />

            <main className="mt-10 mx-auto max-w-7xl pt-8 px-4 sm:mt-20 sm:px-6 md:mt-24 lg:mt-20 lg:px-8 xl:mt-20">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Echanges rapides <br />{" "}
                  </span>{" "}
                  <span className="block text-indigo-600 xl:inline italic">en ligne</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to={objects.data.path} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      {objects.data.title}
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={require("../assets/images/hero.jpg").default} alt="side images" />
        </div>
      </div>

      <Transaction />
      <Exchange />
      <Footer />
    </>
  );
}
