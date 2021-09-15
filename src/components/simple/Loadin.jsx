import Nav from "./nav";
import Footer from "./footer";

const LoadingPage = () => {
  return (
    <>
      <Nav />
      <div className="w-full h-screen bg-sky-100 bg-opacity-200"></div>
      <Footer />
    </>
  );
};

export default LoadingPage;
