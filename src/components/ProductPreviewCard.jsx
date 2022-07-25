import { AddProduct } from "./AddProduct";

export const ProductPreviewCard = ({ product, onAddProduct }) => {
  return (
    <div className="w-full p-4 m-2 rounded border-2 border-solid border-black bg-white text-center">
      <img src={product.imageUrl} alt={product.name} />
      <h2 className="pb-2 text-lg">{product.name}</h2>
      <p className="mb-2 h-20 line-clamp-4">{product.description}</p>
      <AddProduct />
    </div>
  );
};