import type React from "react"
import type { Product } from "../types/Product"
import ProductCard from "./ProductCard"

interface Props {
  products: Product[]
}

const ProductGrid: React.FC<Props> = ({ products }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
)

export default ProductGrid
