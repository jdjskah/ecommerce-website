export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
}

export const products: Product[] = [
  {
    id: 1,
    name: "Classic White T-Shirt",
    description: "A comfortable and versatile white t-shirt for everyday wear.",
    price: 19.99,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    category: "Clothing",
  },
  {
    id: 2,
    name: "Slim Fit Jeans",
    description: "Stylish slim fit jeans that look great with any outfit.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Clothing",
  },
  {
    id: 3,
    name: "Running Shoes",
    description: "Comfortable and supportive shoes for your daily run or workout.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise-cancellation.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Electronics",
  },
  {
    id: 5,
    name: "Yoga Mat",
    description: "Non-slip, eco-friendly yoga mat for your practice.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Fitness",
  },
  {
    id: 6,
    name: "Smartwatch",
    description: "Feature-packed smartwatch for tracking your fitness and staying connected.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    category: "Electronics",
  },
  {
    id: 7,
    name: "Dress Shirt",
    description: "Crisp, wrinkle-resistant dress shirt for a sharp look.",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    category: "Clothing",
  },
  {
    id: 8,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse for improved productivity.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
    category: "Electronics",
  },
  {
    id: 9,
    name: "Hooded Sweatshirt",
    description: "Cozy hooded sweatshirt perfect for chilly days.",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "Clothing",
  },
  {
    id: 10,
    name: "Polo Shirt",
    description: "Classic polo shirt for a casual yet polished look.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "Clothing",
  },
  {
    id: 11,
    name: "Casual Sneakers",
    description: "Stylish and comfortable sneakers for everyday wear.",
    price: 59.99,
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80",
    category: "Footwear",
  },
  {
    id: 12,
    name: "Dress Shoes",
    description: "Elegant dress shoes for formal occasions.",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1614252369475-531eba835eb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Footwear",
  },
  {
    id: 13,
    name: "Sandals",
    description: "Comfortable sandals for beach or casual wear.",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1603487742131-4160ec999306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "Footwear",
  },
  {
    id: 14,
    name: "Watch",
    description: "Elegant wristwatch for any occasion.",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Accessories",
  },
  {
    id: 15,
    name: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with excellent sound quality.",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Electronics",
  },
  {
    id: 16,
    name: "Power Bank",
    description: "High-capacity power bank for charging your devices on the go.",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Electronics",
  },
  {
    id: 17,
    name: "Resistance Bands",
    description: "Set of resistance bands for strength training and stretching.",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1517438322307-e67111335449?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Fitness",
  },
  {
    id: 18,
    name: "Foam Roller",
    description: "High-density foam roller for muscle recovery and massage.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1616279969096-54b228f5f124?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    category: "Fitness",
  },
  {
    id: 19,
    name: "Adjustable Dumbbell Set",
    description: "Space-saving adjustable dumbbell set for home workouts.",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "Fitness",
  },
  {
    id: 20,
    name: "Jump Rope",
    description: "Adjustable jump rope for cardio workouts.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    category: "Fitness",
  },
]
  .filter((product) => product.category !== "Accessories")
  .map((product, index) => ({ ...product, id: index + 1 }))

