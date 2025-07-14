import ProductGrid from "../components/ProductGrid"
import type { Product } from "../types/Product"
const products: Product[] = [
  {
    id: "1",
    model: "Model X200",
    partName: "Rotary Drill",
    imageUrl: "/assets/part1.jpeg",
  },
  {
    id: "2",
    model: "Model A100",
    partName: "Impact Wrench",
    imageUrl: "/assets/part2.jpeg",
  },
  {
    id: "3",
    model: "Model A100",
    partName: "Impact Wrench",
    imageUrl: "/assets/part3.jpeg",
  },
  {
    id: "4",
    model: "Model A100",
    partName: "Impact Wrench",
    imageUrl: "/assets/part4.jpeg",
  },
  {
    id: "5",
    model: "Model A100",
    partName: "Impact Wrench",
    imageUrl: "/assets/part5.jpeg",
  },
  {
    id: "6",
    model: "Model A100",
    partName: "Hydraulic Pump",
    imageUrl: "/assets/part6.jpeg",
  },
  {
    id: "7",
    model: "Model A100",
    partName: "Cutter Kit",
    imageUrl: "/assets/part7.jpeg",
  },
]

const Home = () => (
  <section id="products-section" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          For Bulk orders and inquiries, please contact us at <a href="mailto:aryanmotors27@gmail.com" className="text-yellow-600 hover:underline">aryanmotors27@gmail.com</a>
        </p>
        <div className="mt-6">
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>
      </div>

      <ProductGrid products={products} />

      {/* <div className="text-center mt-12">
        <button className="bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
          View All Products
        </button>
      </div> */}
    </div>
  </section>
)

export default Home
