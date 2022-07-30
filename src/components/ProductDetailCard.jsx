import Button from "./elements/Button";

const ProductDetailCard = ({ product, onAddProduct }) => {
  return (
    <div className="p-4 m-4 rounded-lg bg-slate-50">
      <div className="flex flex-col items-center justify-between">
        <h2 className="text-5xl">{product.name}</h2>
        <p className="text-3xl text-gray-500">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-3xl text-black">{product.price}</p>
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <img
          src={product.imageUrl}
          className="w-40 h-40 rounded-xl object-cover"
          alt={product.name}
        />
      </div>
      <div className="w-full flex items-center justify-center">
        <Button onClick={onAddProduct}>Добавить в корзину</Button>
      </div>
    </div>
  );
};

export default ProductDetailCard;
