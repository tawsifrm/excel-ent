export default function Hero() {
  return (
    <section className="hero bg-white text-center py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
          Generate{" "}
          <span className="bg-gradient-to-r from-green-500 via-teal-400 to-purple-500 text-transparent bg-clip-text">
            Excel
          </span>{" "}
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
            Formulas
          </span>{" "}
          with AI
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-600 mt-6 text-lg md:text-xl max-w-2xl mx-auto">
          Say goodbye to manual formula creation. Harness the power of AI to streamline and enhance your Excel workflow with ease.
        </p>

        {/* Supporting Text */}
        <p className="text-gray-500 mt-4 text-base md:text-lg max-w-xl mx-auto">
          Whether you are a beginner or a pro, our tool simplifies complex tasks. Build dynamic formulas, solve challenges, and optimize your spreadsheets instantly.
        </p>

        {/* Call to Action */}
        <div className="mt-10">
          <button className="relative inline-block px-8 py-3 bg-black text-white rounded-full text-lg md:text-xl font-semibold transition duration-300 transform hover:scale-105 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-gray-300">
            Get Started →
          </button>
        </div>

        {/* Secondary CTA */}
        <p className="text-gray-400 mt-4 text-sm">
          No sign-up required. Start generating formulas for free.
        </p>
      </div>
    </section>
  );
}
