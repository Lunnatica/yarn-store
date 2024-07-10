import { Elements, RichTextSpan } from 'prismic-reactjs';

interface ProductDescriptionItem {
  type: Elements;
  text: string;
  spans: RichTextSpan[];
}
type ProductDescription = Array<ProductDescriptionItem>;

export interface Product {
  id: number;
  name: string;
  size: string;
  stock: number;
  new: boolean;
  image: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  description: ProductDescription;
}
