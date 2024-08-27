function Hero() {
    return (
      <section className="text-gray-600 body-font bg-gradient-to-r from-blue-50 to-blue-100 py-24">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center animate-fadeInUp 	margin-top: -10px;">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-extrabold text-gray-900 leading-tight">
              A Task Manager You <span className="text-indigo-500">Can Trust</span> for Life
            </h1>
            <p className="mb-8 leading-relaxed text-lg text-gray-700">
              We’ve been building Todoist for over 17 years and 210 days. Rest assured that we’ll never sell out to the highest bidder.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg shadow-lg transform transition duration-300 hover:scale-105">
                Get Started
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-white border border-gray-300 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-lg text-lg shadow-lg transform transition duration-300 hover:scale-105">
                Learn More
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
              alt="hero"
              src="https://res.cloudinary.com/imagist/image/fetch/q_auto,f_auto,c_scale,w_2624/https%3A%2F%2Ftodoist.com%2Fstatic%2Fhome-teams%2Fintro%2Fnarrow%2Fheaderui.en.png"
            />
          </div>
        </div>
      </section>
    );
  }
  
  export default Hero;
  