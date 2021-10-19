import Head from "../../components/head";
import FlashMessage from "../../components/messages/message";
import { Triangle } from "../../icons";

function Exchange() {
  return (
    <>
      <Head />
      <FlashMessage />
      <Main />
    </>
  );
}
export default Exchange;

const Main = () => {
  return (
    <>
      <main id="main-section" className="antialiased px-8 bg-gray-100 space-y-3 pt-4 md:pl-64 pb-14 mt-14">
        <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
          <div className="absolute right-0 top-0 -mt-4 mr-16 pointer-events-none hidden xl:block" aria-hidden="true">
            <Triangle />
            {" triangle icon "}
          </div>
          <div className="relative">
            <h1 className="text-2xl md:text-3xl text-gray-800 font-bold mb-1">Echange sur Olichange. 👋</h1>
            <p>commencer vos echanges</p>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md">
          <h3 className="text-2xl text-gray-700 my-2 font-semibold">Etape 1 : Selectionnez vos monnaies</h3>
          <div id="form" className="lg:space-x-1 lg:space-y-0 space-y-1 w-full lg:flex justify-between">
            <form action="#" className="lg:w-1/2">
              <div className="items divide-y-3 space-y-3 bg-white p-3 rounded-md shadow-md">
                <div className="header bg-indigo-800 p-3 rounded-md space-x-4">
                  <h1 className="text-2xl text-gray-200">Je donne</h1>
                </div>
                <hr />
                <section className="bg-gray-200 p-3 rounded-md space-y-3 max-h-1/2 max-h-72 overflow-y-auto">
                  <div className="item relative flex items-center h-12 cursor-pointer hover:bg-indigo-200 px-3 py-2 rounded-md">
                    <input type="radio" name="cur_01" id="id_cur_btc" className="hidden select-item" />
                    <label htmlFor="id_cur_btc" className="flex items-center space-x-3 h-12 w-full">
                      <img src="./btc.png" alt="" className="w-8 h-8" />
                      <span>BTC</span>
                    </label>
                  </div>
                </section>
              </div>
            </form>
            <form action="#" className="lg:w-1/2">
              <div className="items divide-y-3 space-y-3 bg-white p-3 rounded-md shadow-md">
                <div className="header bg-purple-800 p-3 rounded-md space-x-4">
                  <h1 className="text-2xl text-gray-200">contre</h1>
                </div>
                <hr />
                <section className="bg-gray-200 p-3 rounded-md space-y-3 max-h-72 overflow-y-auto">
                  <div className="item flex relative items-center h-12 cursor-pointer hover:bg-indigo-200 px-3 py-2 rounded-md">
                    <input type="radio" name="cur_02" id="id_dev_btc" className="select-item hidden" />
                    <label htmlFor="id_dev_btc" className="flex items-center space-x-3 h-12 w-full">
                      <img src="./btc.png" alt="" className="w-8 h-8" />
                      <span>BTC</span>
                    </label>
                  </div>
                  <div className="item flex relative items-center h-12 cursor-pointer hover:bg-indigo-200 px-3 py-2 rounded-md">
                    <input type="radio" name="cur_02" id="id_dev_eth" className="select-item hidden" />
                    <label htmlFor="id_dev_eth" className="flex items-center space-x-3 h-12 w-full">
                      <img src="./eth.png" alt="" className="w-8 h-8" />
                      <span>ETH</span>
                    </label>
                  </div>
                  <div className="item flex  relative items-center h-12 cursor-pointer hover:bg-indigo-200 px-3 py-2 rounded-md">
                    <input type="radio" name="cur_02" id="id_dev_ltc" className="select-item hidden " />
                    <label htmlFor="id_dev_ltc" className="flex items-center space-x-3 h-12 w-full">
                      <img src="./ltc.png" alt="" className="w-8 h-8" />
                      <span>LTC</span>
                    </label>
                  </div>
                </section>
              </div>
            </form>
          </div>
          <div className="btns flex space-x-1">
            <button className="flex items-center h-100 text-gray-800 font-xs px-2 rounded-sm">
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.7071 5.29289C13.0976 5.68342 13.0976 6.31658 12.7071 6.70711L9.41421 10L12.7071 13.2929C13.0976 13.6834 13.0976 14.3166 12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L7.29289 10.7071C6.90237 10.3166 6.90237 9.68342 7.29289 9.29289L11.2929 5.29289C11.6834 4.90237 12.3166 4.90237 12.7071 5.29289Z" fill="currentColor" />
              </svg>
              <span>précédant</span>
            </button>
            <button className="flex items-center h-100 hover:text-gray-900 text-gray-800 font-xs px-2 rounded-sm">
              <span>suivant</span>
              <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.29289 14.7071C6.90237 14.3166 6.90237 13.6834 7.29289 13.2929L10.5858 10L7.29289 6.70711C6.90237 6.31658 6.90237 5.68342 7.29289 5.29289C7.68342 4.90237 8.31658 4.90237 8.70711 5.29289L12.7071 9.29289C13.0976 9.68342 13.0976 10.3166 12.7071 10.7071L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071Z" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
        <div className="bg-white p-2 rounded-md">
          <h3 className="text-2xl text-gray-800 my-2 font-semibold ">Etape 2 : Quantités et addresse</h3>
          <form action className="w-full  space-y-2 select-none">
            <div className="qte lg:flex  lg:space-x-4">
              <div className="w-full">
                <label htmlFor="id_dev_address" className="block text-gray-600 text-lg font-semibold">
                  Quantité Ltc
                </label>
                <input type="number" autoComplete="false" placeholder="Address LTC" id="id_dev_address" className="w-full py-3 px-2 border  rounded-lg focus:ring focus:ring-inset focus:border-opacity-0 focus:border-purple-800 focus:ring-purple-800  border-purple-400 focus:outline-none text-gray-800  shadow-md" />
              </div>
              <div className=" w-full">
                <label htmlFor="id_dev_address" className="block text-gray-600 text-lg font-semibold">
                  Equivalent BTC
                </label>
                <input type="number" placeholder="Address LTC" id="id_dev_address" className="w-full py-3 px-2 border rounded-lg focus:ring focus:ring-inset focus:border-opacity-0 focus:border-purple-800 focus:ring-purple-800  border-purple-400 focus:outline-none text-gray-800  shadow-md" />
              </div>
            </div>
            <div className="add w-full  lg:flex  lg:space-x-4">
              <div className="relative  w-full">
                <label htmlFor="id_dev_address" className="block text-gray-600 text-lg font-semibold">
                  Address LTC{" "}
                </label>
                <input type="text" placeholder="Address LTC" id="id_dev_address " className="w-full text-xs py-3 px-2 border rounded-lg focus:ring focus:ring-inset focus:border-opacity-0 focus:border-purple-800 focus:ring-purple-800  border-purple-400 focus:outline-none text-gray-800  shadow-md" />
                <span className="text-red-600 text-xs -mb-2">votre n'est pas valide !!!</span>
                <button type="button" className="absolute top-9 right-3 text-gray-600 hover:text-gray-700" title="coller">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                    {/* Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z" />
                  </svg>
                </button>
              </div>
              <div className="relative w-full">
                <label htmlFor="id_dev_address" className="block text-gray-600 text-lg font-semibold">
                  Répéter l'Address LTC{" "}
                </label>
                <input type="text" placeholder="Address LTC" id="id_dev_address " className="w-full text-xs py-3 px-2 border rounded-lg focus:ring focus:ring-inset focus:border-opacity-0 focus:border-purple-800 focus:ring-purple-800  border-purple-400 focus:outline-none text-gray-800  shadow-md" />
                <span className="text-red-600 text-xs -mb-2">votre n'est pas valide !!!</span>
                <button type="button" className="absolute top-9 right-3 text-gray-600 hover:text-gray-700" title="coller">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 fill-current">
                    {/* Font Awesome Free 5.15.3 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d="M128 184c0-30.879 25.122-56 56-56h136V56c0-13.255-10.745-24-24-24h-80.61C204.306 12.89 183.637 0 160 0s-44.306 12.89-55.39 32H24C10.745 32 0 42.745 0 56v336c0 13.255 10.745 24 24 24h104V184zm32-144c13.255 0 24 10.745 24 24s-10.745 24-24 24-24-10.745-24-24 10.745-24 24-24zm184 248h104v200c0 13.255-10.745 24-24 24H184c-13.255 0-24-10.745-24-24V184c0-13.255 10.745-24 24-24h136v104c0 13.2 10.8 24 24 24zm104-38.059V256h-96v-96h6.059a24 24 0 0 1 16.97 7.029l65.941 65.941a24.002 24.002 0 0 1 7.03 16.971z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="hidden select-none fixed  justify-center items-center h-screen w-full z-50 bg-blue-800 bg-opacity-30 top-0 bottom-0 left-0 right-0 overflow-hidden">
          <div className="info bg-gray-100 p-3 rounded-md w-96 text-lg text-gray-600 shadow-lg">
            <h3 className="text-3xl text-gray-800 my-4">Validation d' infomations</h3>
            <div className="flex space-x-2">
              <img src="./ltc.png" alt="" className="h-9 w-9" />
              <div>
                <span>Qantité LTC</span>
                <span className="text-md text-green-600 font-bold  ml-2">10 Ltc</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <img src="./btc.png" alt="" className="h-9 w-9" />
              <div>
                <span>Equivalent BTC</span>
                <span className="text-md text-pink-600 font-bold ml-2">0.3 BTC</span>
              </div>
            </div>
            <div className="flex space-x-2 mt-4">
              <svg className="h-9 w-9 text-green-500" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="fill-current" fillRule="evenodd" clipRule="evenodd" d="M6.26701 3.45496C6.91008 3.40364 7.52057 3.15077 8.01158 2.73234C9.15738 1.75589 10.8426 1.75589 11.9884 2.73234C12.4794 3.15077 13.0899 3.40364 13.733 3.45496C15.2336 3.57471 16.4253 4.76636 16.545 6.26701C16.5964 6.91008 16.8492 7.52057 17.2677 8.01158C18.2441 9.15738 18.2441 10.8426 17.2677 11.9884C16.8492 12.4794 16.5964 13.0899 16.545 13.733C16.4253 15.2336 15.2336 16.4253 13.733 16.545C13.0899 16.5964 12.4794 16.8492 11.9884 17.2677C10.8426 18.2441 9.15738 18.2441 8.01158 17.2677C7.52057 16.8492 6.91008 16.5964 6.26701 16.545C4.76636 16.4253 3.57471 15.2336 3.45496 13.733C3.40364 13.0899 3.15077 12.4794 2.73234 11.9884C1.75589 10.8426 1.75589 9.15738 2.73234 8.01158C3.15077 7.52057 3.40364 6.91008 3.45496 6.26701C3.57471 4.76636 4.76636 3.57471 6.26701 3.45496ZM13.7071 8.70711C14.0976 8.31658 14.0976 7.68342 13.7071 7.29289C13.3166 6.90237 12.6834 6.90237 12.2929 7.29289L9 10.5858L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L8.29289 12.7071C8.68342 13.0976 9.31658 13.0976 9.70711 12.7071L13.7071 8.70711Z" fill="#111827" />
              </svg>
              <div className="overflow-y-auto">
                <span>Address BTC</span>
                <span style={{ fontSize: 15 }} className="bg-white py-1 px-2 rounded-md">
                  hqunwHHDzTPhabJiqiQyqSFtXvKtyLMJAksFexSxoKqxGNQVFBFFbr
                </span>
              </div>
            </div>
            <div className="btns flex space-x-2">
              <button type="button" className="flex items-center  mt-4 text-lg font-medium capitalize  w-full border bg-gray-300 hover:text-white px-2 py-1 hover:bg-gray-600 rounded text-gray-800 transition-all duration-300">
                <svg className="h-7 w-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current" fillRule="evenodd" clipRule="evenodd" d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" fill="#111827" />
                </svg>
                <span>annulé</span>
              </button>
              <button type="button" className="flex items-center mt-4 text-lg font-medium capitalize  w-full border bg-green-300 hover:text-white px-2 py-1 hover:bg-green-600 rounded text-gray-800 transition-all duration-300">
                <svg className="h-7 w-7" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path className="fill-current" fillRule="evenodd" clipRule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L8.70711 14.7071C8.31658 15.0976 7.68342 15.0976 7.29289 14.7071L3.29289 10.7071C2.90237 10.3166 2.90237 9.68342 3.29289 9.29289C3.68342 8.90237 4.31658 8.90237 4.70711 9.29289L8 12.5858L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z" fill="#111827" />
                </svg>
                <span>confirmé</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
