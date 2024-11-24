export const getImagePath = (path: string): string => {
  const basePath =
    process.env.NODE_ENV === "production" ? "/product-cart-list-first" : "";
  return `${basePath}${path}`;
};
