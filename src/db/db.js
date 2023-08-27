import logo from "../assets/images/logo.png";
import anyadamian from "../assets/products/anyadamian.png"
import anyaloid from "../assets/products/anyaloid.png"
import anyayor from "../assets/products/anyayor.png"
import bag from "../assets/products/bag.png"
import brook from "../assets/products/brook.png"
import chopper from "../assets/products/chopper.png"
import franky from "../assets/products/franky.png"
import luffy from "../assets/products/luffy.png"
import nami from "../assets/products/nami.png"
import nicorobin from "../assets/products/nicorobin.png"
import sanji from "../assets/products/sanji.png"
import usupp from "../assets/products/usupp.png"
import yorpins from "../assets/products/yor-pins.jpg"
import zoro from "../assets/products/zoro.png"

const products = [
    {
        "id": 1,
        "name": "Classic White T-Shirt",
        "category": "Clothing",
        "colors": ["White"],
        "sizes": ["Small", "Medium", "Large", "X-Large"],
        "quantity": 50,
        "price": 14.99,
        "description": "A timeless white T-shirt for everyday wear.",
        "image": anyadamian
    },
    {
        "id": 2,
        "name": "Casual Graphic T-Shirt",
        "category": "Clothing",
        "colors": ["Black", "Gray"],
        "sizes": ["Medium", "Large"],
        "quantity": 75,
        "price": 17.99,
        "description": "Cool graphic design for a laid-back look.",
        "image": anyaloid
    },
    {
        "id": 3,
        "name": "V-Neck T-Shirt",
        "category": "Clothing",
        "colors": ["Blue", "White"],
        "sizes": ["Small", "Medium", "Large"],
        "quantity": 60,
        "price": 12.99,
        "description": "Classic V-neck style for a touch of elegance.",
        "image": anyayor
    },
    {
        "id": 4,
        "name": "Striped T-Shirt",
        "category": "Clothing",
        "colors": ["Black/White", "Blue/White"],
        "sizes": ["Medium", "Large", "X-Large"],
        "quantity": 40,
        "price": 19.99,
        "description": "Chic striped pattern for a trendy look.",
        "image": bag
    },
    {
        "id": 5,
        "name": "Sports Performance T-Shirt",
        "category": "Clothing",
        "colors": ["Red", "Gray"],
        "sizes": ["Small", "Medium", "Large"],
        "quantity": 30,
        "price": 24.99,
        "description": "Moisture-wicking fabric for active lifestyles.",
        "image": brook
    },
    {
        "id": 6,
        "name": "Vintage Logo T-Shirt",
        "category": "Clothing",
        "colors": ["Black", "Navy"],
        "sizes": ["Medium", "Large", "X-Large"],
        "quantity": 50,
        "price": 15.99,
        "description": "Retro-inspired logo design for a nostalgic feel.",
        "image": chopper
    },
    {
        "id": 7,
        "name": "Long Sleeve T-Shirt",
        "category": "Clothing",
        "colors": ["Gray", "White"],
        "sizes": ["Medium", "Large", "X-Large"],
        "quantity": 35,
        "price": 18.99,
        "description": "Versatile long sleeve option for changing weather.",
        "image": franky
    },
    {
        "id": 8,
        "name": "Fitted T-Shirt",
        "category": "Clothing",
        "colors": ["Black", "White"],
        "sizes": ["Small", "Medium"],
        "quantity": 50,
        "price": 16.99,
        "description": "Sleek and snug fit for a stylish appearance.",
        "image": luffy
    },
    {
        "id": 9,
        "name": "Oversized T-Shirt",
        "category": "Clothing",
        "colors": ["White", "Beige"],
        "sizes": ["Medium", "Large", "X-Large"],
        "quantity": 25,
        "price": 20.99,
        "description": "Relaxed and comfortable oversized style.",
        "image": nami
    },
    {
        "id": 10,
        "name": "Pocket Tee",
        "category": "Clothing",
        "colors": ["Black", "Gray"],
        "sizes": ["Small", "Medium", "Large"],
        "quantity": 45,
        "price": 13.99,
        "description": "Convenient front pocket adds functionality.",
        "image": nicorobin
    },
    {
        "id": 11,
        "name": "Laptop Backpack",
        "category": "Accessories",
        "colors": ["Black", "Gray"],
        "sizes": ["Standard"],
        "quantity": 30,
        "price": 39.99,
        "description": "Stylish and functional backpack for laptops.",
        "image": sanji
    },
    {
        "id": 12,
        "name": "Running Shoes",
        "category": "Footwear",
        "colors": ["Blue", "White"],
        "sizes": ["US 8", "US 9", "US 10"],
        "quantity": 50,
        "price": 79.99,
        "description": "High-performance shoes for running enthusiasts.",
        "image": usupp
    },
    {
        "id": 13,
        "name": "Wireless Earbuds",
        "category": "Electronics",
        "colors": ["Black", "White"],
        "sizes": ["One Size"],
        "quantity": 100,
        "price": 89.99,
        "description": "True wireless earbuds with premium sound quality.",
        "image": yorpins
    },
    {
        "id": 14,
        "name": "Cotton Bed Sheets",
        "category": "Home & Living",
        "colors": ["White", "Gray"],
        "sizes": ["Queen", "King"],
        "quantity": 40,
        "price": 49.99,
        "description": "Soft and breathable bed sheets for a cozy sleep.",
        "image": zoro
    },
    {
        "id": 15,
        "name": "Summer Hat",
        "category": "Accessories",
        "colors": ["Beige", "Black"],
        "sizes": ["One Size"],
        "quantity": 25,
        "price": 24.99,
        "description": "Stylish hat for protection from the sun.",
        "image": logo
    },
    {
        "id": 16,
        "name": "Stainless Steel Water Bottle",
        "category": "Kitchen",
        "colors": ["Silver", "Black"],
        "sizes": ["500ml", "1000ml"],
        "quantity": 60,
        "price": 18.99,
        "description": "Durable water bottle for your hydration needs.",
        "image": logo
    },
    {
        "id": 17,
        "name": "Digital Watch",
        "category": "Accessories",
        "colors": ["Black", "Blue"],
        "sizes": ["One Size"],
        "quantity": 35,
        "price": 34.99,
        "description": "Sleek and modern digital watch for everyday wear.",
        "image": logo
    },
    {
        "id": 18,
        "name": "Yoga Mat",
        "category": "Sports & Fitness",
        "colors": ["Purple", "Green"],
        "sizes": ["Standard"],
        "quantity": 20,
        "price": 29.99,
        "description": "Non-slip yoga mat for comfortable workouts.",
        "image": logo
    },
    {
        "id": 19,
        "name": "Elegant Dress",
        "category": "Clothing",
        "colors": ["Red", "Black"],
        "sizes": ["Small", "Medium", "Large"],
        "quantity": 30,
        "price": 59.99,
        "description": "Chic dress for special occasions and events.",
        "image": logo
    },
    {
        "id": 20,
        "name": "Smart Home Speaker",
        "category": "Electronics",
        "colors": ["White", "Black"],
        "sizes": ["One Size"],
        "quantity": 50,
        "price": 129.99,
        "description": "Voice-controlled smart speaker for your home.",
        "image": logo
    }
];

export default products;
