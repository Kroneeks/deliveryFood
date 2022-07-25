import React, { useState, useEffect } from "react";
import { ProductPreviewCard } from "./ProductPreviewCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const ProductsPreview = () => {
  const [products, setProducts] = useState([]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data?.data))
      .then(console.log(products))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div className="container mx-auto pb-4 w-2/3">
      <Carousel responsive={responsive}>
        {products.length > 0 &&
          products.map((item, _index) => {
            return (
              <div className="w-full p-3">
                <ProductPreviewCard key={item._id} product={item} />
              </div>
            );
          })}
      </Carousel>
    </div>
  );
};