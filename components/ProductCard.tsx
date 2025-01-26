import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import type { Product } from "@/data/products"

export default function ProductCard({ product }: { product: Product }) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <Link href={`/product/${product.id}`}>
        <div className="relative h-64">
          <Image
            src={imageError ? "/placeholder.svg" : product.image}
            alt={product.name}
            fill
            style={{ objectFit: "cover" }}
            onError={() => setImageError(true)}
          />
        </div>
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
        <p className="text-gray-600 mb-4 h-12 overflow-hidden">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</span>
          <Link
            href={`/product/${product.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  )
}

