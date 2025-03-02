import React from "react";

const Features = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-extrabold text-gray-900">Discover the iPhone 12 Pro</h1>
      <p className="mt-3 text-lg text-gray-600">Experience the latest technology with unbeatable performance and stunning design.</p>
      
      <div className="mt-8 flex flex-col md:flex-row items-center gap-6">

        <div className="max-w-md">
          <h2 className="text-2xl font-bold text-gray-800">Why Choose iPhone 12 Pro?</h2>
          <ul className="mt-4 text-gray-700 space-y-2">
            <li>🔹 Super Retina XDR Display</li>
            <li>🔹 A14 Bionic Chip</li>
            <li>🔹 Pro Camera System with Night Mode</li>
            <li>🔹 5G Connectivity</li>
          </ul>
          <div className="mt-6 flex justify-center gap-4">
            <button className="px-6 py-2 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-500 transition">
              Buy Now
            </button>
            <button className="px-6 py-2 border-2 border-blue-600 text-blue-600 rounded-full shadow-md hover:bg-blue-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Features;