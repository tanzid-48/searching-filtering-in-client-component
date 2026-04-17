"use client";
import Image from "next/image";
import React from "react";

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
  {
    id: 6,
    name: "Headphones",
    category: "Electronics",
    price: 120,
    image: "https://images.unsplash.com/photo-1518444028785-8d3b0d7d6b5f",
  },
];

const categories = ["All", "Electronics", "Sports", "Kitchen"];

const ProductList = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/*  Search UI */}
      <div className="flex items-center gap-3 mb-5">
        <input
          type="text"
          placeholder="Search products..."
          className="flex-1 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="bg-blue-600 text-white px-5 py-3 rounded-xl text-sm hover:bg-blue-700 transition">
          Search
        </button>
      </div>

      {/*  Filter Buttons */}
      <div className="flex gap-3 flex-wrap mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            className="px-4 py-1.5 rounded-full text-sm border bg-white text-gray-600 border-gray-300 hover:bg-blue-600 hover:text-white transition"
          >
            {cat}
          </button>
        ))}
      </div>

      {/*  Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="group border rounded-2xl overflow-hidden bg-white hover:shadow-lg transition"
          >
            {/*  Image */}
            <div className="h-40 overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                width={500}
                height={200}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <p className="text-xs text-gray-400">{p.category}</p>

              <h2 className="font-semibold text-gray-800 text-lg group-hover:text-blue-600 transition">
                {p.name}
              </h2>

              <p className="text-blue-600 font-bold mt-2 text-lg">${p.price}</p>

              {/* Buttons */}
              <div className="flex gap-2 mt-4">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700 transition">
                  Add
                </button>
                <button className="w-full border border-gray-300 py-2 rounded-lg text-sm hover:bg-gray-100 transition">
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
