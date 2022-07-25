export const AddProduct = () => {
  const onAddProduct = () => {
    console.log("The product has been added to cart");
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={onAddProduct}
        className="bg-yellow-400 hover:bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-lg"
      >
        <span>+</span>
      </button>
    </div>
  );
};
