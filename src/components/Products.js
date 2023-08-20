import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";
const DUMMY_PRODUCTS = [
  {
    id: 1,
    name: "Apple MacBook Air",
    imgURL:
      "https://cdn1.smartprix.com/rx-iXMsgRkkm-w1200-h1200/XMsgRkkm.jpg",
    price: 1300,
  },
  {
    id: 2,
    name: "Samsung S23 Ultra",
    imgURL:
      "	https://m.media-amazon.com/images/I/61imYpK33qL.jpg",
    price: 900,
  },
  {
    id: 3,
    name: "Boat Smart Watch",
    imgURL:
      "https://m.media-amazon.com/images/I/61RPXUwgCjL.jpg",
    price: 50,
  },
  {
    id: 4,
    name: "Apple iPad Pro",
    imgURL:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXYN13Y_OMypUBxti67JJLo-dowh3AzMVMjP5-8wvCwZ1GR_TxkXpdQo4mD3oS4M3rXA&usqp=CAU",
    price: 750,
  },
  {
    id: 5,
    name: "Boat Earpods",
    imgURL:
      "https://www.boat-lifestyle.com/cdn/shop/products/c2386af9-4349-432f-8ba5-2b6aa06025c8_600x.png?v=1668756103",
    price: 45,
  },
  {
    id: 6,
    name: "Sony Smart TV",
    imgURL:
      "https://static.digit.in/default/8b6f50dd2de38e5108ad6e9e3455da9ebc8dab59.jpeg?tr=w-1200",
    price: 500,
  },
];
const Products = () => {
  return (
    <div>
      <ul className="products-container">
        {DUMMY_PRODUCTS.map((product, index) => (
          <li key={index}>
            <Product
              id={product.id}
              name={product.name}
              imgURL={product.imgURL}
              price={product.price}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
