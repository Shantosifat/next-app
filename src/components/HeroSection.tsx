export function HeroSection() {
  return (
    <section className="relative text-center py-28 px-4 bg-gradient-to-r from-blue-600 to-indigo-500 text-white overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/4"></div>

      {/* Hero content */}
      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Welcome to Our Store
        </h1>
        <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
          Discover amazing products today!
        </p>

        {/* Call to Action */}
        <a
          href="/products"
          className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:shadow-xl hover:bg-gray-100 transition"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
}
