import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product, event) => {
    event.stopPropagation();
    dispatch(addToCart(product));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
      </div>
    );
  }

  if (error) {
    return (
      <Alert variant="destructive" className="max-w-md mx-auto mt-8">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>{error}</AlertDescription>
      </Alert>
    );
  }

  return (
    <div className="container mx-auto p-4 ">
      {/* <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <Link to={`product/${product.id}`}>
            <Card
              key={product.id}
              className="flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-lg min-h-[500px]"
            >
              <CardHeader className="p-4">
                <div className="aspect-square w-full relative overflow-hidden rounded-md">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-4">
                <CardTitle className="text-lg font-semibold mb-2 line-clamp-2">
                  {product.title}
                </CardTitle>
                <p className="text-gray-600 mb-2 font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </CardContent>
              <CardFooter className="p-4">
                <Button
                  onClick={(event) => handleAddToCart(product, event)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
