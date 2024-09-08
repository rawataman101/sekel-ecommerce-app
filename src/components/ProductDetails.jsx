import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ArrowLeft, Loader2 } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.products.find((p) => p.id === parseInt(id))
  );

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <Link
        to="/products"
        className="flex items-center text-blue-600 hover:underline mb-4"
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
      </Link>
      <Card className="overflow-hidden mt-10">
        <CardHeader className="p-0 h-[200px]">
          <div className="aspect-square w-full relative overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="absolute inset-0 object-contain] h-[200px] mr-auto ml-auto"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-2xl font-bold mb-4">
            {product.title}
          </CardTitle>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <p className="text-2xl font-bold text-blue-600">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
        <CardFooter className="p-6">
          <Button
            onClick={handleAddToCart}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductDetails;
