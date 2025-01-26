"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

interface OrderDetails {
  items: Array<{
    id: number
    name: string
    price: number
    quantity: number
  }>
  total: number
  name: string
  email: string
  address: string
  city: string
  zipCode: string
}

export default function OrderConfirmationPage() {
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null)

  useEffect(() => {
    const lastOrder = localStorage.getItem("lastOrder")
    if (lastOrder) {
      setOrderDetails(JSON.parse(lastOrder))
      localStorage.removeItem("lastOrder") // Clear the order details from localStorage
    }
  }, [])

  if (!orderDetails) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Order Confirmation</h1>
        <p>
          No order details found. Please return to the{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            homepage
          </Link>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Order Confirmation</h1>
      <p className="text-xl mb-8">Thank you for your order, {orderDetails.name}!</p>

      <div className="bg-gray-100 p-6 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {orderDetails.items.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <span>
              {item.name} x {item.quantity}
            </span>
            <span>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
        <div className="border-t pt-2 mt-2">
          <div className="flex justify-between font-bold">
            <span>Total:</span>
            <span>${orderDetails.total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Shipping Details</h2>
        <p>
          <strong>Name:</strong> {orderDetails.name}
        </p>
        <p>
          <strong>Email:</strong> {orderDetails.email}
        </p>
        <p>
          <strong>Address:</strong> {orderDetails.address}
        </p>
        <p>
          <strong>City:</strong> {orderDetails.city}
        </p>
        <p>
          <strong>ZIP Code:</strong> {orderDetails.zipCode}
        </p>
      </div>

      <div className="mt-8">
        <Link href="/">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Continue Shopping</button>
        </Link>
      </div>
    </div>
  )
}

