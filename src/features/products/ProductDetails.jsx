import { useState } from "react";
import { useProductDetails } from "./useProductDetails";
import QuantityCounter from "../../ui/QuantityCounter";
import { formatCurrency } from "../../utils/helpers";
import BestSellerLabel from "../../ui/BestSellerLabel";
import ProductImageMain from "./ProductImageMain";
import AddToCartButton from "../../ui/AddToCartButton";
import BackButtonProduct from "../../ui/BackButtonProduct";
import toast from "react-hot-toast";
import NoProductsError from "../../ui/NoProductsError";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const { data, error } = useProductDetails();

  if (!data.data) return <NoProductsError dataError={data.error} />;

  const { name, image, stocks, description, price, isBestSeller } = data?.data;
  const isOutOfStock = stocks === 0;

  function handleIncreaseQuantity() {
    if (quantity === stocks) {
      toast.error("Max number of stocks reached");
      return;
    }
    setQuantity((quantity) => quantity + 1);
  }
  function handleDecreaseQuantity() {
    if (quantity === 1) return;
    setQuantity((quantity) => quantity - 1);
  }

  return (
    <div className="mx-auto flex max-w-lg flex-col px-9 text-yellow-800 md:max-w-full md:flex-row md:gap-5 md:px-0">
      <div className="flex-col md:flex md:max-w-96">
        {isBestSeller && <BestSellerLabel />}

        <ProductImageMain image={image} name={name} />
      </div>

      <div className={`md:flex md:flex-col ${isBestSeller ? "md:pt-8" : ""}`}>
        <p className="mb-1 text-xl font-semibold xs:text-2xl md:mb-2 md:text-4xl">
          {name}
        </p>
        <p className="mb-3 text-sm text-stone-500 xs:text-base md:mb-5 md:text-lg">
          {stocks > 0 && (
            <span>
              In stock:{" "}
              <span className="font-medium">
                {stocks} item{stocks === 1 ? "" : "s"} left
              </span>
            </span>
          )}

          {!stocks && "Out of stock"}
        </p>
        <p className="mb-5 text-yellow-800 xs:text-lg md:mb-8 md:text-xl">
          {description}
        </p>

        <div className="mb-8 flex items-center justify-between">
          <span className="text-2xl font-bold xs:text-3xl md:text-[2.5rem]">
            {formatCurrency(price)}
          </span>

          {!isOutOfStock && (
            <QuantityCounter
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
              quantity={quantity}
            />
          )}
        </div>

        <div className="flex flex-col md:mt-auto">
          <AddToCartButton
            quantity={quantity}
            isOutOfStock={isOutOfStock}
            item={data.data}
            setQuantity={setQuantity}
          />
          <BackButtonProduct />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
