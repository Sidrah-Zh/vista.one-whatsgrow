import img from "../assets/img.jpg";

const JoinVistaSection = () => {
  return (
    <section className="bg-gray-100 py-10 px-6 flex justify-center items-center relative w-full min-h-screen">
      <div className="absolute inset-0">
        <img
          src={img}
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
      </div>
      <div className="max-w-5xl w-full border-2 border-blue-500 rounded-bl-3xl rounded-tr-3xl p-6 md:p-10 bg-transparent shadow-md text-center md:text-left relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Join the <span className="text-black">VISTA</span> Family:
        </h2>
        <p className="text-gray-700 text-base sm:text-lg md:text-xl">
          VISTA is dedicated to corporate responsibility, with initiatives that
          support environmental sustainability, ethical business practices, and
          community involvement. Our governance framework ensures that we
          operate with a balanced focus on profitability and positive social
          impact.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center md:justify-start md:space-x-4 space-y-4 sm:space-y-0">
          <button className="bg-black text-white px-6 py-3 rounded-md font-bold text-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800 w-full sm:w-auto">
            Talk to us
          </button>
          <button className="bg-black text-white px-6 py-3 rounded-md font-bold text-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-800 w-full sm:w-auto">
            Schedule a call
          </button>
        </div>
      </div>
    </section>
  );
};

export default JoinVistaSection;
