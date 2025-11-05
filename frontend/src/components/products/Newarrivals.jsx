import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const Newarrivals = () => {
  const newarrivals = [
    {
      _id: "1",
      name: "Stylish Jacket",
      price: 120,
      images: [
        {
          url: "https://picsum.photos/500/500?random=1",
          altText: "Stylish Jacket",
        },
      ],
    },
    {
      _id: "2",
      name: "Denim Coat",
      price: 150,
      images: [
        {
          url: "https://picsum.photos/500/500?random=2",
          altText: "Denim Coat",
        },
      ],
    },
    {
      _id: "3",
      name: "Casual Hoodie",
      price: 90,
      images: [
        {
          url: "https://picsum.photos/500/500?random=3",
          altText: "Casual Hoodie",
        },
      ],
    },
    {
      _id: "4",
      name: "Urban Jacket",
      price: 130,
      images: [
        {
          url: "https://picsum.photos/500/500?random=4",
          altText: "Urban Jacket",
        },
      ],
    },
    {
      _id: "5",
      name: "Winter Coat",
      price: 180,
      images: [
        {
          url: "https://picsum.photos/500/500?random=5",
          altText: "Winter Coat",
        },
      ],
    },
  ];

  return (
    <section>
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">Explore New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe on the cutting edge of fashion.
        </p>

        {/* scroll buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button className="p-2 rounded border bg-white text-black hover:bg-gray-100 transition">
            <FiChevronLeft className="text-2xl" />
          </button>
          <button className="p-2 rounded border bg-white text-black hover:bg-gray-100 transition">
            <FiChevronRight className="text-2xl" />
          </button>
        </div>
      </div>

      {/* scrollable cards */}
      <div className="w-full overflow-x-auto flex space-x-6 px-4 pb-6 scrollbar-hide">
        {newarrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[65%] sm:min-w-[45%] md:min-w-[30%] lg:min-w-[22%] bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 relative group"
          >
            <div className="overflow-hidden rounded-t-2xl">
              <img
                src={product.images[0]?.url}
                alt={product.images[0]?.altText || product.name}
                className="w-full h-[320px] object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* product info */}
            <div className="p-4 text-left">
              <Link to={`/product/${product._id}`} className="block">
                <h4 className="font-semibold text-gray-900">{product.name}</h4>
                <p className="mt-1 text-gray-500 text-sm">${product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Newarrivals;
