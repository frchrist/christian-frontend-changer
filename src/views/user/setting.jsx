import Head from "../../components/head";
import FlashMessage from "../../components/messages/message";

export default () => {
  return (
    <>
      <Head />
      <FlashMessage />
      <Main />
    </>
  );
};

const Main = () => {
  return (
    <main id="main-section" className="px-8 bg-sky-100 bg-opacity-50 space-y-3 mt-14 pt-4 md:pl-64 pb-14">
      <div className="mb-3 bg-white p-3 rounded-lg shadow-md">
        <div className="user-profile-avatar mx-auto p-3 rounded-sm flex space-x-4 items-center">
          <div className="avatar">
          <img src="./btc.png" alt="" className="w-20 h-20  border-white shadow-lg border-8 rounded-full"/>
          </div>
          <div>
            <div className="flex text-green-500">
              <p className="font-thin text-purple-700 mr-1">@Username</p>
            </div>
            <div>
              <p>
                <span className="text-md text-gray-700 uppercase font-semibold">Email</span> : <span className="font-light">username@gmail.com </span>
              <a href="#" className="text-sky-900 text-xs underline ml-5">Changer</a>


              </p>
              <p>
                <span className="text-md text-gray-700 uppercase font-semibold">Status</span> : <span className="font-light">valider</span>
                <span className="text-sky-500">
                  <svg className="inline" width={24} height={24} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10M7.83474 4.69705C8.55227 4.63979 9.23346 4.35763 9.78132 3.89075C11.0598 2.80123 12.9402 2.80123 14.2187 3.89075C14.7665 4.35763 15.4477 4.63979 16.1653 4.69705C17.8397 4.83067 19.1693 6.16031 19.303 7.83474C19.3602 8.55227 19.6424 9.23346 20.1093 9.78132C21.1988 11.0598 21.1988 12.9402 20.1093 14.2187C19.6424 14.7665 19.3602 15.4477 19.303 16.1653C19.1693 17.8397 17.8397 19.1693 16.1653 19.303C15.4477 19.3602 14.7665 19.6424 14.2187 20.1093C12.9402 21.1988 11.0598 21.1988 9.78132 20.1093C9.23346 19.6424 8.55227 19.3602 7.83474 19.303C6.16031 19.1693 4.83067 17.8397 4.69705 16.1653C4.63979 15.4477 4.35763 14.7665 3.89075 14.2187C2.80123 12.9402 2.80123 11.0598 3.89075 9.78132C4.35763 9.23346 4.63979 8.55227 4.69705 7.83474C4.83067 6.16031 6.16031 4.83067 7.83474 4.69705Z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div class="action flex space-x-3">
                    <button class="border shadow-md bg-indigo-800 text-white rounded-md px-2 py-1" >Changer Image</button>
                    <button class="border shadow-md border-indigo-800 text-indigo-800 rounded-md px-2 py-1">Supprimé Photo</button>
                </div>
        <div className="lg:flex justify-between">
          <section className="user-base-informations w-full lg:w-1/2">
            <div className="p-4 bg-white">
              <h3 className="text-xl  uppercase font-semibold text-sky-800">
                Information personnelles
                <svg className="inline" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13 16H12V12H11M12 8H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </h3>
              <form action="#" className="space-y-5 my-2">
                <Input name="first_name" label="First Name" placeholder="First Name" />
                <Input name="last_name" label="Last Name" placeholder="Last Name" />
                <Input name="username" label="Username" placeholder="Username" />
                <Input name="birthday" label="Birth Day" placeholder="Birth Day" />
                <Input name="phoneNumber" label="Phone Number" placeholder="Phone" />
                <div>
                  <button className="h-16 w-full text-white font-semibold bg-indigo-500 rounded-lg transition-all duration-400 focus:ring focus:ring-indigo-600 focus:ring-offset-1 hover:bg-indigo-600">
                    Enregistrer
                    <svg className="inline" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H16M15 11L12 14M12 14L9 11M12 14L12 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </section>
          <section id className="w-full lg:w-1/2 bg-white p-3">
            <h3 className="text-xl uppercase font-semibold text-sky-800">
              Modifer votre mot de passe
              <svg className="inline" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 7C16.1046 7 17 7.89543 17 9M21 9C21 12.3137 18.3137 15 15 15C14.3938 15 13.8087 14.9101 13.2571 14.7429L11 17H9V19H7V21H4C3.44772 21 3 20.5523 3 20V17.4142C3 17.149 3.10536 16.8946 3.29289 16.7071L9.25707 10.7429C9.08989 10.1914 9 9.60617 9 9C9 5.68629 11.6863 3 15 3C18.3137 3 21 5.68629 21 9Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </h3>
            <form action="#" className="space-y-5 my-2">
              <Input type="password" name="last-password" placeholder="*******" label="Old password" />
              <Input type="password" name="new-password1" placeholder="*******" label="New Password" />
              <Input type="password" name="new-password2" placeholder="*******" label="Confirm the password" />
              <div className="my-5">
                <button className="h-16 w-full text-white font-semibold bg-indigo-500 rounded-lg transition-all duration-400 focus:ring focus:ring-indigo-600 focus:ring-offset-1 hover:bg-indigo-600">
                  Enregistrer
                  <svg className="inline" width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 7H5C3.89543 7 3 7.89543 3 9V18C3 19.1046 3.89543 20 5 20H19C20.1046 20 21 19.1046 21 18V9C21 7.89543 20.1046 7 19 7H16M15 11L12 14M12 14L9 11M12 14L12 4" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </form>
          </section>
        </div>
        <section className="p-3">
          <h3 className="text-xl text-sky-800 uppercase font-semibold">sécurté</h3>
          <form action="#" className="mt-3">
            <div className="flex items-center space-x-3">
              <input type="checkbox" name="" id className="w-6 h-6" />
              <label htmlFor="#" className="font-normal text-lg text-gray-500">
                Activé la double authentication
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <input type="checkbox" name="" id className="w-6 h-6" />
              <label htmlFor="#" className="font-normal text-lg text-gray-500">
                Etre notifier en cas de connexion
              </label>
            </div>
          </form>
        </section>
        <section class="p-3">
                    <h3 class="text-xl text-sky-800 uppercase font-semibold">Supprimé Compte</h3>
                    <p class="text-gray-600">
                        would you like delete your account ? 
                        this account contains  10 transactions 10 Dollar. Deleting your account will remove all the content associated with it.
                    </p>
                    <a href="#" class="text-red-600 text-md underline">Je veux supprimer mon compte</a>

                </section>
      </div>
    </main>
  );
};

function Input({ name, label, placeholder, value, type = "text" }) {
  return (
    <>
      <div>
        <label htmlFor={name} className="block text-gray-900 text-md font-semibold">
          {label}
        </label>
        <input type={type} id={name} name={name} defaultValue={value} className="h-12 rounded-lg pl-3 mt-2 w-full border border-gray-300 focus:border-sky-300 focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:outline-none" placeholder={placeholder} />
      </div>
    </>
  );
}
