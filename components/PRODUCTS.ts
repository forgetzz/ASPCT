export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
};

export const PRODUCTS: Product[] = [
  { id: "p1", name: "ASPCT WHITE (FRONT)", price: 120000, image: "/assets/5.png", tag: "Best Seller" },
  { id: "p4", name: "ASPCT WHITE (BACK)", price: 120000, image: "/assets/4.png" },
  { id: "p2", name: "ASPCT BLACK (Back)", price: 130000, image: "/assets/2.png" },
  { id: "p3", name: "ASPCT BLACK (FRONT)", price: 130000, image: "/assets/3.png", tag: "New" },
];
