import React from "react";
import shooes from "../images/shooes.png";
import iphone from "../images/iphone.png";

const products = [
  {
    pic: <img src={shooes} />,
    name: "NIKE Shoes Black Pattern",
    price: "$87",
    rating: 5,
  },
  { pic: <img src={iphone} />, name: "iPhone 12", price: "$987", rating: 5 },
];

const TopSellingProducts = () => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h2 className="text-xl font-bold mb-4">Top Selling Products</h2>
    <ul>
      {products.map((product, index) => (
        <li key={index} className="mb-4">
          <div className="flex items-center">
            <div className="px-4"> {product.pic}</div>
            <div>
              <h3 className="text-base ">{product.name}</h3>
              <div className="flex items-center">
                {[...Array(product.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-4 h-4 fill-current text-yellow-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .587l3.668 7.431 8.217 1.151-6 5.917 1.461 8.414L12 18.896l-7.346 4.004 1.461-8.414-6-5.917 8.217-1.151z" />
                  </svg>
                ))}
              </div>
              <p className="font-bold">{product.price}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default TopSellingProducts;
