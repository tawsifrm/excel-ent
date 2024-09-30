export default function Hero() {
    return (
      <section className="hero bg-white text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-gray-800">
            Generate <span className="bg-gradient-to-r from-green-500 via-teal-400 to-purple-500 text-transparent bg-clip-text">Excel</span> <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">Formulas</span> with AI.
          </h1>
          <p className="text-gray-600 mt-4 mb-8 text-lg">
            Streamline your spreadsheet workflows effortlessly.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition duration-300">
              Get Started →
            </button>
          </div>
        </div>
      </section>
    );
  }