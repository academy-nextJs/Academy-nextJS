export const UnitPrice = (price: number) => {
  const reducer = Intl.NumberFormat("fa", {
    notation: "compact",
  });
  const newPrice = reducer.format(price);
  return newPrice;
};

export const SeparationPrice = (price: string | number) => {
  price = String(price);
  const CategorizedPrice = price.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return CategorizedPrice;
};
