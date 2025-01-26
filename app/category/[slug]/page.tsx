import { products } from "@/data/products"
import ProductCard from "@/components/ProductCard"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = decodeURIComponent(params.slug)
  const categoryProducts = products.filter((product) => product.category === category)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">{category}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categoryProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

