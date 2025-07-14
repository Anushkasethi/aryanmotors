import type React from "react"
import type { Product } from "../types/Product"

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({ product }) => (
  <div className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
    <div className="relative h-48 overflow-hidden">
      <img
        src={product.imageUrl || "/placeholder.svg"}
        alt={product.partName}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-3 right-3">
        <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">NEW</span>
      </div>
    </div>

    {/* <div className="p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
        {product.model}
      </h3>
      <p className="text-gray-600 mb-4 text-sm">{product.partName}</p>

      <div className="flex items-center justify-between">
        <button className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors text-sm">
          View Details →
        </button>
        <div className="text-right">
          <p className="text-xs text-gray-500">Starting from</p>
          <p className="text-lg font-bold text-gray-900">$299</p>
        </div>
      </div> */}
    </div>
//   </div>
)

export default ProductCard
