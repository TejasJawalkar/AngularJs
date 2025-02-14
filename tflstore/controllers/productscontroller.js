// controllers/products.controller.js
class ProductsController {
  getAllProducts(req, res) {
   const products = [
      {
        id: 1,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 5999,
        description: "Over-ear Bluetooth headphones with noise cancellation and up to 20 hours of battery life.",
        image: "https://m.media-amazon.com/images/I/61rXrXbLgoL._SL1500_.jpg",
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 2,
        name: "Samsung S25",
        category: "Electronics",
        price: 99999,
        description: "Latest model with 128GB storage, A14 Bionic chip, and triple camera system.",
        image: "https://m.media-amazon.com/images/I/711G25h1U1L._SX679_.jpg",
        rating: 4.7,
        availability: "Out of Stock"
      },
      {
        id: 3,
        name: "Stainless Steel Water Bottle",
        category: "Home & Kitchen",
        price: 1999,
        description: "Leak-proof, double-walled water bottle, perfect for keeping drinks hot or cold for hours.",
        image: "https://m.media-amazon.com/images/I/41GC5Z0FrhL._AC_UL320_.jpg",
        rating: 4.2,
        availability: "In Stock"
      },
      {
        id: 4,
        name: "Leather Wallet",
        category: "Fashion",
        price: 2999,
        description: "Genuine leather wallet with multiple compartments for cards and cash.",
        image: "https://m.media-amazon.com/images/I/719GhwWK4xL._AC_UL320_.jpg",
        rating: 4.0,
        availability: "In Stock"
      },
      {
        id: 5,
        name: "Gaming Laptop",
        category: "Laptops",
        price: 1299,
        image: "https://m.media-amazon.com/images/I/71lZvVXdYcL._AC_UY218_.jpg",
        description: "High-performance gaming laptop with RGB keyboard.",
        quantityAvl: 10,
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 6,
        name: "Ultrabook",
        category: "Laptops",
        price: 999,
        image: "https://m.media-amazon.com/images/I/71lZvVXdYcL._AC_UY218_.jpg",
        description: "Sleek and lightweight ultrabook for professionals.",
        quantityAvl: 15,
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 7,
        name: "Business Laptop",
        category: "Laptops",
        price: 1099,
        image: "https://m.media-amazon.com/images/I/71lZvVXdYcL._AC_UY218_.jpg",
        description: "Reliable business laptop with long battery life.",
        quantityAvl: 8,
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 8,
        name: "2-in-1 Convertible Laptop",
        category: "Laptops",
        price: 899,
        image: "https://m.media-amazon.com/images/I/71lZvVXdYcL._AC_UY218_.jpg",
        description: "Versatile 2-in-1 laptop with a touchscreen display.",
        quantityAvl: 12,
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 9,
        name: "MacBook Pro",
        category: "Laptops",
        price: 1999,
        image: "https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_1280.jpg",
        description: "Powerful MacBook Pro with M-series chip.",
        quantityAvl: 5,
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 10,
        name: "Chromebook",
        category: "Laptops",
        price: 499,
        image: "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
        description: "Affordable and fast Chromebook for students.",
        quantityAvl: 20,
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 11,
        name: "Workstation Laptop",
        category: "Laptops",
        price: 2499,
        image: "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
        description: "High-end workstation laptop for professionals.",
        quantityAvl: 6,
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 12,
        name: "Budget Laptop",
        category: "Laptops",
        price: 599,
        image: "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
        description: "Affordable laptop with decent performance.",
        quantityAvl: 18,
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 13,
        name: "Student Laptop",
        category: "Laptops",
        price: 750,
        image: "https://cdn.pixabay.com/photo/2015/06/24/15/45/macbook-820274_1280.jpg",
        description: "Perfect laptop for students and daily use.",
        quantityAvl: 25,
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 14,
        name: "Wireless Bluetooth Headphones",
        category: "Electronics",
        price: 5999,
        description: "Over-ear Bluetooth headphones with noise cancellation and up to 20 hours of battery life.",
        image: "https://m.media-amazon.com/images/I/61rXrXbLgoL._SL1500_.jpg",
        rating: 4.5,
        availability: "In Stock"
      },
      {
        id: 15,
        name: "Samsung S25",
        category: "Electronics",
        price: 99999,
        description: "Latest model with 128GB storage, A14 Bionic chip, and triple camera system.",
        image: "https://m.media-amazon.com/images/I/711G25h1U1L._SX679_.jpg",
        rating: 4.7,
        availability: "Out of Stock"
      },
      {
        id: 16,
        name: "Stainless Steel Water Bottle",
        category: "Home & Kitchen",
        price: 1999,
        description: "Leak-proof, double-walled water bottle, perfect for keeping drinks hot or cold for hours.",
        image: "https://m.media-amazon.com/images/I/41GC5Z0FrhL._AC_UL320_.jpg",
        rating: 4.2,
        availability: "In Stock"
      }
    ]
      res.json({data:products, message: "Listed all products", status:200 });
    }
  
    getProductById(req, res) {
      // Retrieve and return a single product by id
      const productId = req.params.id;
      res.json({ message: `Get product with id ${productId}` });
    }
  
    createProduct(req, res) {
      // Create a new product
      const { name, price } = req.body;
      res.status(201).json({ message: `Product ${name} created with price ${price}` });
    }
  
    updateProduct(req, res) {
      // Update an existing product
      const productId = req.params.id;
      const { name, price } = req.body;
      res.json({ message: `Product with id ${productId} updated to ${name} with price ${price}` });
    }
  
    deleteProduct(req, res) {
      // Delete an existing product
      const productId = req.params.id;
      res.json({ message: `Product with id ${productId} deleted` });
    }
  }
  
  module.exports = new ProductsController();
  