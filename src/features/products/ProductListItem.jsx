import { formatCurrency } from "../../utils/helpers";
import { useRef } from "react";
import ProductTag from "../../ui/ProductTag";
import AddToCartButtonSmall from "../../ui/AddToCartButtonSmall";
import { useNavigate } from "react-router-dom";

function ProductListItem({ item }) {
  const addToCartBtn = useRef(null);
  const navigate = useNavigate();
  const { name: productName, image, price, isBestSeller, stocks, id } = item;

  function handleClickProduct(e) {
    if (e.target.closest("button") === addToCartBtn.current) return;
    navigate(`/products/${id}`);
  }

  return (
    <li className="cursor-pointer" onClick={handleClickProduct}>
      <div className="relative aspect-square cursor-pointer overflow-hidden">
        <img
          className="h-full w-full rounded-md object-cover object-bottom transition-all duration-300 hover:scale-110 xs:mb-2"
          src={image}
          alt={`Photo of ${productName}`}
        />

        {isBestSeller && stocks && <ProductTag type="best" />}
        {!stocks && <ProductTag type="unavailable" />}
      </div>

      <span className="text-xs xs:text-base sm:text-lg">{productName}</span>

      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold xs:text-lg sm:text-xl">
          {formatCurrency(price)}
        </span>
        <AddToCartButtonSmall
          ref={addToCartBtn}
          item={item}
          isOutOfStock={!stocks}
        />
      </div>
    </li>
  );
}

export default ProductListItem;
