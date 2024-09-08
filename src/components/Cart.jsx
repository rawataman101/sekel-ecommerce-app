import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ShoppingCart, Package, X } from "lucide-react";
import { removeFromCart } from "../redux/actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-5">
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center">
          <ShoppingCart className="mr-2 h-6 w-6" /> Shopping Cart
        </CardTitle>
      </CardHeader>
      <CardContent>
        {cart.length === 0 ? (
          <div className="text-center text-gray-500 py-8">
            <Package className="mx-auto h-12 w-12 mb-4" />
            <p>Your cart is empty</p>
          </div>
        ) : (
          <ScrollArea className="h-[300px] pr-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="mb-4 flex items-center justify-between bg-gray-50 p-5 border rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-semibold line-clamp-1">{item.title}</h3>
                    <p className="text-sm text-gray-500">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <X className="h-6 w-6" /> {/* Remove icon */}
                </button>
              </div>
            ))}
          </ScrollArea>
        )}
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex-grow text-right">
          <h3 className="text-lg font-semibold">Total:</h3>
          <p className="text-xl font-bold">${total.toFixed(2)}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Cart;
