import BackButton from "./BackButton";

function NoProductsError({ dataError }) {
  return (
    <div className="mt-12 flex flex-col items-center gap-8 text-center text-lg sm:text-2xl">
      {dataError}
      <BackButton />
    </div>
  );
}

export default NoProductsError;
