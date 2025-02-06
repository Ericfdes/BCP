export interface Product {

  _id: string;
  name: string;
  price: number;
  description: string;
  images: { url: string; caption?: string }[];
  href?: string;
  imageAlt?: string;
}