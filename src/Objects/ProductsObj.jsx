const products = [
  {
    id: 1,
    title: "Classic White T-Shirt",
    category: "T-shirts",
    description: "A timeless white t-shirt made from 100% organic cotton.",
    price: 499,
    mainprice: 799,
    colors: ["White", "Black", "Navy"],
    size: ["S", "M", "L", "XL"],
    reviews: 124,
    discount: 38,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b"
    ]
  },
  {
    id: 2,
    title: "Denim Jacket",
    category: "New In",
    description: "Trendy blue denim jacket with a comfortable fit.",
    price: 1599,
    mainprice: 2199,
    colors: ["Blue", "Black"],
    size: ["M", "L", "XL"],
    reviews: 89,
    discount: 27,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 3,
    title: "Slim Fit Chinos",
    category: "Jeans",
    description: "Comfortable slim fit chinos for everyday wear.",
    price: 999,
    mainprice: 1499,
    colors: ["Beige", "Olive", "Navy"],
    size: ["S", "M", "L", "XL"],
    reviews: 67,
    discount: 33,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 4,
    title: "Graphic Print Hoodie",
    category: "Hoodie",
    description: "Soft hoodie with a bold graphic print on the front.",
    price: 1299,
    mainprice: 1899,
    colors: ["Grey", "Black", "Red"],
    size: ["M", "L", "XL"],
    reviews: 142,
    discount: 32,
    images: [
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 5,
    title: "Checked Casual Shirt",
    category: "Shirts",
    description: "Casual checked shirt, perfect for outings and weekends.",
    price: 799,
    mainprice: 1199,
    colors: ["Blue", "Green", "Red"],
    size: ["S", "M", "L", "XL"],
    reviews: 53,
    discount: 33,
    images: [
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 6,
    title: "Black Joggers",
    category: "New In",
    description: "Stretchable joggers for gym and casual wear.",
    price: 699,
    mainprice: 1099,
    colors: ["Black", "Grey"],
    size: ["S", "M", "L", "XL"],
    reviews: 76,
    discount: 36,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 7,
    title: "Oversized Sweatshirt",
    category: "New In",
    description: "Cozy oversized sweatshirt for a relaxed look.",
    price: 899,
    mainprice: 1399,
    colors: ["Pink", "Grey", "White"],
    size: ["M", "L", "XL"],
    reviews: 61,
    discount: 36,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 8,
    title: "Cargo Shorts",
    category: "Shorts",
    description: "Lightweight cargo shorts with multiple pockets.",
    price: 599,
    mainprice: 999,
    colors: ["Khaki", "Olive", "Black"],
    size: ["S", "M", "L", "XL"],
    reviews: 44,
    discount: 40,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 9,
    title: "Striped Polo T-Shirt",
    category: "T-shirts",
    description: "Classic striped polo t-shirt for a smart casual look.",
    price: 749,
    mainprice: 1099,
    colors: ["White", "Navy", "Red"],
    size: ["S", "M", "L", "XL"],
    reviews: 38,
    discount: 32,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 10,
    title: "Basic Black Shorts",
    category: "Shorts",
    description: "Simple and comfortable black shorts for summer.",
    price: 499,
    mainprice: 799,
    colors: ["Black", "Grey"],
    size: ["S", "M", "L", "XL"],
    reviews: 29,
    discount: 38,
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 11,
    title: "Cotton Kurta",
    category: "Shirts",
    description: "Traditional cotton kurta for festive occasions.",
    price: 1199,
    mainprice: 1699,
    colors: ["White", "Blue", "Green"],
    size: ["M", "L", "XL"],
    reviews: 47,
    discount: 29,
    images: [
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 12,
    title: "Printed Summer Dress",
    category: "New In",
    description: "Lightweight printed dress for summer days.",
    price: 1399,
    mainprice: 1999,
    colors: ["Yellow", "Pink", "Blue"],
    size: ["S", "M", "L"],
    reviews: 62,
    discount: 30,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 13,
    title: "Long Sleeve Henley",
    category: "T-shirts",
    description: "Soft long sleeve henley for layering.",
    price: 899,
    mainprice: 1299,
    colors: ["Grey", "Black", "White"],
    size: ["S", "M", "L", "XL"],
    reviews: 33,
    discount: 31,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 14,
    title: "Floral Print Skirt",
    category: "New In",
    description: "Flowy floral print skirt for a chic look.",
    price: 799,
    mainprice: 1199,
    colors: ["Pink", "Blue", "White"],
    size: ["S", "M", "L"],
    reviews: 27,
    discount: 33,
    images: [
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 15,
    title: "Basic Crewneck Sweater",
    category: "New In",
    description: "Warm crewneck sweater for winter.",
    price: 1099,
    mainprice: 1599,
    colors: ["Grey", "Navy", "Black"],
    size: ["M", "L", "XL"],
    reviews: 41,
    discount: 31,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 16,
    title: "Fleece Zip Hoodie",
    category: "Hoodie",
    description: "Fleece hoodie with front zip and pockets.",
    price: 1299,
    mainprice: 1799,
    colors: ["Black", "Grey", "Blue"],
    size: ["S", "M", "L", "XL"],
    reviews: 55,
    discount: 28,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 17,
    title: "Ripped Skinny Jeans",
    category: "Jeans",
    description: "Trendy ripped skinny jeans for a modern look.",
    price: 1199,
    mainprice: 1799,
    colors: ["Blue", "Black"],
    size: ["S", "M", "L", "XL"],
    reviews: 63,
    discount: 33,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 18,
    title: "Sports Shorts",
    category: "Shorts",
    description: "Breathable sports shorts for active days.",
    price: 599,
    mainprice: 899,
    colors: ["Black", "Blue", "Grey"],
    size: ["S", "M", "L", "XL"],
    reviews: 37,
    discount: 33,
    images: [
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 19,
    title: "Printed Casual Shirt",
    category: "Shirts",
    description: "Casual shirt with modern prints.",
    price: 899,
    mainprice: 1299,
    colors: ["White", "Blue", "Black"],
    size: ["S", "M", "L", "XL"],
    reviews: 48,
    discount: 31,
    images: [
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80"
    ]
  },
  {
    id: 20,
    title: "Basic Tank Top",
    category: "T-shirts",
    description: "Lightweight tank top for layering or workouts.",
    price: 399,
    mainprice: 699,
    colors: ["White", "Black", "Grey"],
    size: ["S", "M", "L", "XL"],
    reviews: 22,
    discount: 43,
    images: [
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1469398715555-76331a6c7c9b?fit=crop&w=400&q=80"
    ]
  }
];

export default products;