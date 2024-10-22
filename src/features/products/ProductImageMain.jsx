function ProductImageMain({ image, name }) {
  return (
    <div className="mb-2 aspect-square flex-1 overflow-hidden rounded-md border border-lime-800 md:mb-0 md:aspect-auto md:grow">
      <img
        src={image}
        alt={`Photo of ${name}`}
        className="h-full object-cover transition-all duration-300 hover:scale-110"
      />
    </div>
  );
}

export default ProductImageMain;
