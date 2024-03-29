export const AuthButton = ({ type = "submit", cls = "bg-teal-500 hover:bg-teal-400", loading, children }) => {

  return (
    <button
      type={type}
      disabled={loading}
      className={`mt-4 px-4 py-2 rounded text-white font-semibold text-center block w-full 
			   			focus:outline-none focus:ring focus:ring-offset-2
                         focus:ring-opacity-80 cursor-pointer ${loading ? "bg-gray-400" : cls} `}
    >
      {loading ? (
        <>
          <div className="w-full flex justify-center items-center">
            <div className="w-8 h-8 text-white-400 text-center" title="1">
              <svg version="1.1" id="loader-1" fill="currentColor" x="0px" y="0px" width="40px" height="40px" viewBox="0 0 50 50" style={{ enableBackground: "new 0 0 50 50" }} space="preserve">
                <path fill="currentColor" d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
                  <animateTransform attributeType="xml" attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="0.6s" repeatCount="indefinite" />
                </path>
              </svg>{" "}
            </div>
          </div>
        </>
      ) : (
        children
      )}
    </button>
  );
};
