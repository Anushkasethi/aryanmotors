const Hero = () => {
    const scrollToProducts = () => {
        const productsSection = document.getElementById("products-section");
        if (productsSection) {
            productsSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-300">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/jcb.jpeg')", opacity: 0.3,
                }}
            />

            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-4">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                    Mastering <span className="text-yellow-400">Excellence</span>
                    <br />
                    Every Day
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-black-200 max-w-2xl mx-auto">
                    Discover the finest selection of machine parts and accessories
                    at Aryan Motors. We are committed to providing top-quality JCB products
                    including JCB parts, JCB accessories, and JCB attachments.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        className="bg-yellow-400 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors"
                        onClick={scrollToProducts}
                    >
                        View Products
                    </button>
                    {/* <button className="border-2 border-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                        Learn More
                    </button> */}
                </div>
            </div>
        </section>
    );
};

export default Hero
