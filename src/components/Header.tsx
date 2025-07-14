const Header = () => {
    const scrollToProducts = () => {
        const contactsSection = document.getElementById("contacts-section");
        if (contactsSection) {
            contactsSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <header className="w-full bg-gray-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold tracking-wide">ARYAN MOTORS</div>
                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="hover:text-yellow-400 transition-colors">
                            Home
                        </a>
                        {/* <a href="#" className="hover:text-yellow-400 transition-colors">
                            Products
                        </a>
                        <a href="#" className="hover:text-yellow-400 transition-colors">
                            About
                        </a> */}
                        <button
                        className="hover:text-yellow-400 transition-colors"
                        onClick={scrollToProducts}
                    >
                        Contact Us
                    </button>
                        {/* <a href="#" className="hover:text-yellow-400 transition-colors">
                            Contact Us
                        </a> */}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header
