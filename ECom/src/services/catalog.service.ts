


export class CatalogServices {
    products = [
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
            name: "4K Ultra HD TV",
            category: "Electronics",
            price: 49999,
            description: "50-inch 4K Ultra HD TV with smart capabilities and built-in streaming services.",
            image: "https://example.com/images/4k-tv.jpg",
            rating: 4.8,
            availability: "In Stock"
        },
        {
            id: 6,
            name: "Sports Running Shoes",
            category: "Footwear",
            price: 4999,
            description: "Comfortable and durable running shoes with shock absorption for a smooth run.",
            image: "https://example.com/images/running-shoes.jpg",
            rating: 4.6,
            availability: "In Stock"
        },
        {
            id: 7,
            name: "Noise Cancelling Earbuds",
            category: "Electronics",
            price: 8999,
            description: "Compact wireless earbuds with noise-canceling technology and up to 12 hours of battery life.",
            image: "https://example.com/images/earbuds.jpg",
            rating: 4.3,
            availability: "In Stock"
        },
        {
            id: 8,
            name: "Electric Kettle",
            category: "Home & Kitchen",
            price: 2999,
            description: "Stainless steel electric kettle with a 1.7L capacity and quick boiling technology.",
            image: "https://example.com/images/kettle.jpg",
            rating: 4.4,
            availability: "In Stock"
        },
        {
            id: 9,
            name: "Tennis Racket",
            category: "Sports & Outdoors",
            price: 8999,
            description: "Lightweight tennis racket with a durable frame and comfortable grip.",
            image: "https://example.com/images/tennis-racket.jpg",
            rating: 4.2,
            availability: "In Stock"
        },
        {
            id: 10,
            name: "Smart Watch",
            category: "Electronics",
            price: 14999,
            description: "Stylish smart watch with fitness tracking, heart rate monitor, and notifications.",
            image: "https://example.com/images/smart-watch.jpg",
            rating: 4.6,
            availability: "In Stock"
        },
        {
            id: 11,
            name: "Tennis Racket",
            category: "Sports & Outdoors",
            price: 8999,
            description: "Lightweight tennis racket with a durable frame and comfortable grip.",
            image: "https://example.com/images/tennis-racket.jpg",
            rating: 4.2,
            availability: "In Stock"
        },
        {
            id: 12,
            name: "Smart Watch",
            category: "Electronics",
            price: 14999,
            description: "Stylish smart watch with fitness tracking, heart rate monitor, and notifications.",
            image: "https://example.com/images/smart-watch.jpg",
            rating: 4.6,
            availability: "In Stock"
        }
    ]

    constructor() {
    }

    getCatalogData() {
        return this.products;
    }
}