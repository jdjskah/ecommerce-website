import Link from "next/link"
import Image from "next/image"
import { products } from "@/data/products"

const categories = Array.from(new Set(products.map((product) => product.category))).filter(
  (category) => category !== "Accessories",
)

export default function CategoryShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const categoryProducts = products.filter((product) => product.category === category)
        const firstProduct = categoryProducts[0]
        return (
          <div key={category} className="relative overflow-hidden rounded-lg shadow-lg group">
            <Image
              src={firstProduct.image || "/placeholder.svg"}
              alt={category}
              width={400}
              height={300}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center relative">
              <Image
                src={`/category-images/${category.toLowerCase()}.jpg`}
                alt={`${category} category`}
                layout="fill"
                objectFit="cover"
                className="opacity-50"
              />
              <div className="text-center z-10">
                <h3 className="text-2xl font-bold text-white mb-2">{category}</h3>
                <Link
                  href={`/category/${encodeURIComponent(category)}`}
                  className="inline-block bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

