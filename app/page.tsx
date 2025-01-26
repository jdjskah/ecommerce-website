import CategoryShowcase from "@/components/CategoryShowcase"
import ProductList from "@/components/ProductList"
import ProductCard from "@/components/ProductCard"
import { products } from "@/data/products"

export default function Home() {
  const featuredProducts = products.slice(0, 4)

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-8 text-center">Welcome to YoubStore</h1>
        <p className="text-xl text-gray-600 text-center mb-8">Discover amazing products in our categories</p>
        <CategoryShowcase />
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">All Products</h2>
        <ProductList />
      </section>
    </div>
  )
}

