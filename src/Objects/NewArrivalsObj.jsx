const newArrivals = [
  {
    id: 101,
    title: "Classic White Tee",
    description: "A timeless white t-shirt made from soft organic cotton.",
    price: 499,
    mainprice: 799,
    colors: ["White", "Black", "Navy"],
    size: ["S", "M", "L", "XL"],
    reviews: 124,
    discount: 38,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 102,
    title: "Pastel Blue Hoodie",
    description: "Soft pastel blue hoodie for a cozy and stylish look.",
    price: 1299,
    mainprice: 1899,
    colors: ["Blue", "Pink", "Grey"],
    size: ["S", "M", "L"],
    reviews: 102,
    discount: 32,
    category: "Hoodies",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
    ]
  },
  {
    id: 103,
    title: "Minimalist Polo Shirt",
    description: "Classic polo shirt with a modern minimalist design.",
    price: 899,
    mainprice: 1399,
    colors: ["Navy", "White", "Grey"],
    size: ["M", "L", "XL"],
    reviews: 54,
    discount: 36,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 104,
    title: "Denim Street Jacket",
    description: "Modern fit denim jacket with street style details.",
    price: 1799,
    mainprice: 2499,
    colors: ["Blue", "Black"],
    size: ["M", "L", "XL"],
    reviews: 75,
    discount: 28,
    category: "Jackets",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
    ]
  },
  {
    id: 105,
    title: "Tie-Dye T-Shirt",
    description: "Colorful tie-dye t-shirt for a retro vibe.",
    price: 799,
    mainprice: 1199,
    colors: ["Multicolor"],
    size: ["S", "M", "L", "XL"],
    reviews: 63,
    discount: 33,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 106,
    title: "Cargo Joggers",
    description: "Utility joggers with cargo pockets and adjustable cuffs.",
    price: 1099,
    mainprice: 1599,
    colors: ["Olive", "Black", "Beige"],
    size: ["S", "M", "L", "XL"],
    reviews: 48,
    discount: 31,
    category: "Pants",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 107,
    title: "Relaxed Fit Shorts",
    description: "Breathable shorts for summer comfort.",
    price: 599,
    mainprice: 999,
    colors: ["Khaki", "Grey", "Blue"],
    size: ["S", "M", "L", "XL"],
    reviews: 39,
    discount: 40,
    category: "Shorts",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 108,
    title: "Striped Long Sleeve",
    description: "Trendy striped long sleeve t-shirt for layering.",
    price: 899,
    mainprice: 1299,
    colors: ["White/Black", "White/Blue"],
    size: ["S", "M", "L", "XL"],
    reviews: 44,
    discount: 31,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 109,
    title: "Basic Crewneck Sweatshirt",
    description: "Classic crewneck sweatshirt for everyday wear.",
    price: 999,
    mainprice: 1499,
    colors: ["Grey", "Black", "Navy"],
    size: ["M", "L", "XL"],
    reviews: 51,
    discount: 33,
    category: "Sweatshirts",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
    ]
  },
  {
    id: 110,
    title: "Printed Summer Dress",
    description: "Lightweight printed dress for summer days.",
    price: 1399,
    mainprice: 1999,
    colors: ["Yellow", "Pink", "Blue"],
    size: ["S", "M", "L"],
    reviews: 62,
    discount: 30,
    category: "Dresses",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 111,
    title: "Floral Print Skirt",
    description: "Flowy floral print skirt for a chic look.",
    price: 799,
    mainprice: 1199,
    colors: ["Pink", "Blue", "White"],
    size: ["S", "M", "L"],
    reviews: 27,
    discount: 33,
    category: "Skirts",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 112,
    title: "Ripped Skinny Jeans",
    description: "Trendy ripped skinny jeans for a modern look.",
    price: 1199,
    mainprice: 1799,
    colors: ["Blue", "Black"],
    size: ["S", "M", "L", "XL"],
    reviews: 63,
    discount: 33,
    category: "Jeans",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 113,
    title: "Sports Shorts",
    description: "Breathable sports shorts for active days.",
    price: 599,
    mainprice: 899,
    colors: ["Black", "Blue", "Grey"],
    size: ["S", "M", "L", "XL"],
    reviews: 37,
    discount: 33,
    category: "Shorts",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 114,
    title: "Basic Tank Top",
    description: "Lightweight tank top for layering or workouts.",
    price: 399,
    mainprice: 699,
    colors: ["White", "Black", "Grey"],
    size: ["S", "M", "L", "XL"],
    reviews: 22,
    discount: 43,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 115,
    title: "Oversized Flannel Shirt",
    description: "Soft oversized flannel shirt for a relaxed look.",
    price: 1099,
    mainprice: 1599,
    colors: ["Red", "Green", "Blue"],
    size: ["M", "L", "XL"],
    reviews: 41,
    discount: 31,
    category: "Shirts",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 116,
    title: "Cotton Kurta",
    description: "Traditional cotton kurta for festive occasions.",
    price: 1199,
    mainprice: 1699,
    colors: ["White", "Blue", "Green"],
    size: ["M", "L", "XL"],
    reviews: 47,
    discount: 29,
    category: "Kurtas",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 117,
    title: "Fleece Zip Hoodie",
    description: "Fleece hoodie with front zip and pockets.",
    price: 1299,
    mainprice: 1799,
    colors: ["Black", "Grey", "Blue"],
    size: ["S", "M", "L", "XL"],
    reviews: 55,
    discount: 28,
    category: "Hoodies",
    images: [
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
    ]
  },
  {
    id: 118,
    title: "Basic Black Shorts",
    description: "Simple and comfortable black shorts for summer.",
    price: 499,
    mainprice: 799,
    colors: ["Black", "Grey"],
    size: ["S", "M", "L", "XL"],
    reviews: 29,
    discount: 38,
    category: "Shorts",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 119,
    title: "Long Sleeve Henley",
    description: "Soft long sleeve henley for layering.",
    price: 899,
    mainprice: 1299,
    colors: ["Grey", "Black", "White"],
    size: ["S", "M", "L", "XL"],
    reviews: 33,
    discount: 31,
    category: "T-Shirts",
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 120,
    title: "Printed Casual Shirt",
    description: "Casual shirt with modern prints.",
    price: 899,
    mainprice: 1299,
    colors: ["White", "Blue", "Black"],
    size: ["S", "M", "L", "XL"],
    reviews: 48,
    discount: 31,
    category: "Shirts",
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  }
];

export default newArrivals;