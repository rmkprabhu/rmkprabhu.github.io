export interface Product {
  id: string;
  title: string;
  image: string;
  minOrder: number;
  price: number;
  supplier: string;
  description: string;
  features: string[];
  specifications: {
    material: string;
    gsm: string;
    sizes: string[];
    colors: string[];
    packaging: string;
  };
}