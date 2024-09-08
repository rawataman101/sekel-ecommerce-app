import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShoppingCart } from "lucide-react";

const Header = () => {
  // Get cart items and calculate total number of items
  const cartItems = useSelector((state) => state.cart);
  const totalItems = cartItems.cart.length || 0;
  console.log(cartItems);

  return (
    <header className="bg-neutral-300 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Sekel
        </Link>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link to="/products" className="text-gray-600 hover:text-gray-900">
            Products
          </Link>
        </nav>

        {/* Cart Icon */}
        <Link to="/cart" className="relative text-gray-600 hover:text-gray-900">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute top-[-10px] right-0 left-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;
