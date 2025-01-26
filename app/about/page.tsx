import Link from "next/link"
import { Github } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">About YoubStore</h1>
      <p className="mb-4">
        YoubStore is your one-stop shop for all your needs. We pride ourselves on offering quality products, great
        prices, and excellent customer service.
      </p>
      <p className="mb-4">
        Our mission is to provide a seamless shopping experience, bringing you the best products from various categories
        all in one place.
      </p>
      <p className="mb-6">
        We're constantly working to improve our services and expand our product range to meet your needs.
      </p>
      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Connect with Us</h2>
        <p className="mb-4">
          Check out our GitHub profile to see what we're working on and how we're improving YoubStore:
        </p>
        <Link
          href="https://github.com/jdjskah"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          <Github className="mr-2" />
          GitHub Profile
        </Link>
      </div>
    </div>
  )
}

