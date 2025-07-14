const Footer = () => (
  <footer className="bg-gray-900 text-white">
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-2xl font-bold mb-4">ARYAN MOTORS</h3>
          <p className="text-gray-400 mb-4 max-w-md">
            Your trusted partner with a total experience for over 20 years in the industry, providing genuine JCB Parts for all Product ranges.
          </p>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
              <span className="text-black font-bold">A</span>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div id="contacts-section">
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-2 text-gray-400">
            <p>📧 aryanmotors27@gmail.com</p>
            <p>📞 +91 9891044567</p>
            
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Aryan Motors. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer
