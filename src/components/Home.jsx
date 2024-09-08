import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button"; // Assuming you have a Button component styled with Tailwind

const Home = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate("/products");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Welcome to Sekel
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        Discover our range of products and find the perfect one for you.
      </p>
      <Button
        onClick={goToProducts}
        className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md"
      >
        Go to Products
      </Button>
    </div>
  );
};

export default Home;
