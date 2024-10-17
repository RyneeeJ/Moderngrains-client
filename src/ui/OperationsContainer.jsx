// Reusable container for product operations such as filter & sort (in both SHOP and PURCHASE HISTORY page), and remove all (in CART page)

function OperationsContainer({ children }) {
  return (
    <div className="mb-4 flex justify-between gap-6 md:mb-6">{children}</div>
  );
}

export default OperationsContainer;
