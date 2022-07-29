import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  selectAllProducts,
} from "../../stores/menu/productsSlice";
import ProductDetailCard from "../../components/ProductDetailCard";

const Menu = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectAllProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="bg-white">
      {products.status === "pending" ? (
        <div>Загрузка...</div>
      ) : (
        <div className="menu-wrapper">
          {products.products.length > 0 &&
            products.products[0].products.map((product, index) => {
              return <ProductDetailCard product={product} key={index} />;
            })}
        </div>
      )}
    </div>
  );
};

export default Menu;
