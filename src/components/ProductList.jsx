"use client";
import Image from "next/image";
import React, { useState } from "react";

const products = [
  {
    id: 1,
    name: "Wireless Keyboard",
    category: "Electronics",
    price: 49,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3",
  },
  {
    id: 2,
    name: "Running Shoes",
    category: "Sports",
    price: 89,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 3,
    name: "Coffee Maker",
    category: "Kitchen",
    price: 65,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93",
  },
  {
    id: 4,
    name: "Yoga Mat",
    category: "Sports",
    price: 30,
    image: "https://images.unsplash.com/photo-1599058917765-a780eda07a3e",
  },
  {
    id: 5,
    name: "Desk Lamp",
    category: "Electronics",
    price: 35,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c",

  },

];

const categories = ["All", "Electronics", "Sports", "Kitchen"];

const ProductList = () => {

  const [searchInput, setSearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // 🔍 Search + Filter together
  const handleSearch = () => {
    let result = products;

    // search filter
    if (searchInput) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    // category filter
    if (selectedCategory !== "All") {
      result = result.filter(product =>
        product.category === selectedCategory
      );
    }

    setFilteredProducts(result);
  };

  // 🎯 Category filter
  const handleCategory = (cat) => {
    setSelectedCategory(cat);

    let result = products;

    if (cat !== "All") {
      result = result.filter(product => product.category === cat);
    }

    if (searchInput) {
      result = result.filter(product =>
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    setFilteredProducts(result);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">

      {/* Search */}
      <div className="flex items-center gap-3 mb-5">
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search products..."
          className="flex-1 border rounded-xl px-4 py-3 text-sm"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-5 py-3 rounded-xl text-sm"
        >
          Search
        </button>
      </div>

      {/* Category Buttons */}
      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm border ${
              selectedCategory === cat
                ? "bg-blue-600 text-white"
                : "bg-white text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <div key={p.id} className="border rounded-2xl overflow-hidden">

            <div className="h-40">
              <Image
                src={p.image}
                alt={p.name}
                width={500}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>



            <div className="p-4">
              <p className="text-xs text-gray-400">{p.category}</p>

              <h2 className="font-semibold text-gray-800 text-lg">
                {p.name}
              </h2>

              <p className="text-blue-600 font-bold mt-2 text-lg">
                ${p.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};export default ProductList;