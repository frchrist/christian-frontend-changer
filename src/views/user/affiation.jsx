
import Head from "../../components/head"
import FlashMessage from "../../components/messages/message";

export default ()=>{


    return <>
    <Head/>
    <FlashMessage />
    <Main/> 

    </> 
}

const Main =()=>{

    return <>
         <main id="main-section" className="px-8 bg-gray-200 space-y-3 pt-4 md:pl-64 pb-14">
  <div className="mb-3 bg-white p-3 rounded-lg divide-y">
    <section id="info-affiliation" className="mt-2 p-3 bg-white w-full">
      <h3 className="text-lg uppercase font-semibold">
        Information d'affilation
        <svg className="inline" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H3V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H21V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </h3>
      <div className>
        <p className="text-lg font-semibold my-3 capitalize text-gray-500">parain <span className="text-red-500">@username</span></p>
        <div className="relative lg:w-1/2">
          <label htmlFor="#">Lien de parrinage</label>
          <input type="text" className="h-14 px-4 border w-full rounded-lg focus:outline-none" defaultValue="http://*****.com/ref@christian" readOnly />
          <svg title="copié" className="absolute top-10 right-3 text-gray-500" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H3V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H21V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      <div className="my-3">
        <h4 className="text-xl uppercase font-semibold my-3">Vos fieulles</h4>
        <table className="border border-gray-300 w-full select-none overflow-auto max-w-xl rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-4">Utilisateur</th>
              <th>Date d'inscription</th>
              <th>Total transaction</th>
              <th>gain</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center bg-gray-200">
              <td className="font-semibold py-3">@Christ12</td>
              <td>12/02/2021</td>
              <td>$22.3</td>
              <td className="text-green-600 font-semibold">$2</td>
            </tr>
            <tr className="text-center">
              <td className="font-semibold py-3">@Olivetoto</td>
              <td>12/02/2021</td>
              <td>$ 0</td>
              <td className="text-green-600 font-semibold">$0</td>
            </tr>
            <tr className="text-center bg-gray-200">
              <td className="font-semibold py-3">@kingStart</td>
              <td>12/02/2021</td>
              <td>$ 20</td>
              <td className="text-green-600 font-semibold">$1.3</td>
            </tr>
            <tr className="text-center">
              <td className="font-semibold py-3">@sheldon20</td>
              <td>12/02/2021</td>
              <td>$ 15.2</td>
              <td className="text-green-600 font-semibold">$2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</main>



    </>
}