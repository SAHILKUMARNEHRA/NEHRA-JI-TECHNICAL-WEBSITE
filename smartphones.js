// My list of smartphones, I made this for my viewers to find good phones
// I divided them into budget categories
const smartphones = {
    // Phones under 20,000
    under20000: [
        { brand: "Realme", model: "Narzo 60", price: 17999, year: 2023 }, // Good budget phone
        { brand: "Oppo", model: "A79 5G", price: 19999, year: 2023 },
        { brand: "Vivo", model: "Y78", price: 18999, year: 2023 },
        { brand: "OnePlus", model: "Nord CE 4 Lite", price: 17999, year: 2024 }, // I like OnePlus
        { brand: "Nothing", model: "Phone 2a", price: 17999, year: 2024 }, // Cool design
        { brand: "Samsung", model: "Galaxy A14 5G", price: 16999, year: 2023 },
        { brand: "Motorola", model: "Moto G54 5G", price: 15999, year: 2023 },
        { brand: "Poco", model: "M6 Pro 5G", price: 14999, year: 2023 },
        { brand: "CMF", model: "Phone 1", price: 15999, year: 2024 } // I converted the price from £209
    ],
    // Phones between 20,000 and 40,000
    between20000and40000: [
        { brand: "Realme", model: "11 Pro", price: 23999, year: 2023 },
        { brand: "Realme", model: "GT Neo 5", price: 34999, year: 2024 },
        { brand: "Oppo", model: "Reno 10", price: 32999, year: 2023 },
        { brand: "Vivo", model: "V29", price: 29999, year: 2023 },
        { brand: "OnePlus", model: "Nord 3", price: 29999, year: 2023 },
        { brand: "Nothing", model: "Phone 2", price: 39999, year: 2024 },
        { brand: "Samsung", model: "Galaxy A34", price: 24999, year: 2023 },
        { brand: "Samsung", model: "Galaxy S23 FE 5G", price: 39999, year: 2023 },
        { brand: "Google", model: "Pixel 7a", price: 39999, year: 2023 }, // I love Pixel cameras
        { brand: "Motorola", model: "Edge 40", price: 29999, year: 2023 },
        { brand: "Poco", model: "F5", price: 29999, year: 2023 },
        { brand: "iQOO", model: "Neo 7", price: 27999, year: 2023 }
    ],
    // Phones between 40,000 and 60,000
    between40000and60000: [
        { brand: "Oppo", model: "Find X7", price: 59999, year: 2024 },
        { brand: "Vivo", model: "X90", price: 54999, year: 2023 },
        { brand: "Apple", model: "iPhone 14", price: 59999, year: 2022 }, // Starting with Apple here
        { brand: "Google", model: "Pixel 8", price: 75999, year: 2023 },
        { brand: "Samsung", model: "Galaxy S23", price: 64999, year: 2023 },
        { brand: "OnePlus", model: "11", price: 56999, year: 2023 },
        { brand: "iQOO", model: "11", price: 51999, year: 2023 }
    ],
    // Premium phones above 60,000
    above60000: [
        { brand: "OnePlus", model: "12", price: 64999, year: 2024 },
        // Apple iPhones, I added all the recent ones
        { brand: "Apple", model: "iPhone 15", price: 79999, year: 2023 },
        { brand: "Apple", model: "iPhone 15 Plus", price: 89999, year: 2023 },
        { brand: "Apple", model: "iPhone 15 Pro", price: 129900, year: 2023 },
        { brand: "Apple", model: "iPhone 15 Pro Max", price: 159900, year: 2023 },
        { brand: "Apple", model: "iPhone 16", price: 79999, year: 2024 },
        { brand: "Apple", model: "iPhone 16 Plus", price: 89999, year: 2024 },
        { brand: "Apple", model: "iPhone 16 Pro", price: 119900, year: 2024 },
        { brand: "Apple", model: "iPhone 16 Pro Max", price: 144900, year: 2024 },
        { brand: "Apple", model: "iPhone 16e", price: 69999, year: 2025 }, // I read this came out in Feb 2025
        { brand: "Apple", model: "iPhone 17", price: 79999, year: 2025 }, // Expected in Sep 2025
        { brand: "Apple", model: "iPhone 17 Pro", price: 119900, year: 2025 },
        { brand: "Apple", model: "iPhone 17 Pro Max", price: 144900, year: 2025 },
        { brand: "Apple", model: "iPhone 17 Air", price: 99999, year: 2025 }, // Sounds cool!
        // Samsung flagships
        { brand: "Samsung", model: "Galaxy S24", price: 79999, year: 2024 },
        { brand: "Samsung", model: "Galaxy S24 Ultra", price: 129999, year: 2024 },
        { brand: "Samsung", model: "Galaxy S25", price: 79999, year: 2025 },
        { brand: "Samsung", model: "Galaxy S25+", price: 99999, year: 2025 },
        { brand: "Samsung", model: "Galaxy S25 Ultra", price: 129999, year: 2025 },
        { brand: "Samsung", model: "Galaxy S25 Slim", price: 109999, year: 2025 },
        { brand: "Samsung", model: "Galaxy S25 FE", price: 64999, year: 2025 },
        // Google Pixels
        { brand: "Google", model: "Pixel 9", price: 84999, year: 2024 },
        { brand: "Google", model: "Pixel 9 Pro", price: 109999, year: 2024 },
        { brand: "Google", model: "Pixel 9 Pro XL", price: 124999, year: 2024 }
    ]
};