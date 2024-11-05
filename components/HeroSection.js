export default function HeroSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-yellow-400 text-xl font-medium mb-6">Services</h2>
        <div className="max-w-4xl pl-0">
          <h1 className="text-4xl md:text-6xl mb-8 text-gray-900 leading-tight">
            At <span className="text-blue-600">NAXA</span>, we work on{" "}
            <span className="text-blue-600">ideas</span>; ideas that can provide{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600">
              simple solutions
            </span>{" "}
            to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-600">
              complex problems
            </span>
            .
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
            We work as a team to generate, explore, build and validate ideas. We
            also contextualize innovations around the world to find the best
            fitting solutions to local problems.
          </p>
        </div>
      </div>
    </section>
  );
}
