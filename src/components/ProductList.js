import React from "react";
import Product from "./Product.js";

//destructure
// export default function ProductList({product}) {
//   console.log(product)
//     return (
//     <div>

//     </div>
//   )
// }

export default function ProductList(props) {
  return props.productList.length > 0 ? (
  props.productList.map((product, i) => {
    return (
      <Product
        product={product}
        key={i}
        incrementQuantity={props.incrementQuantity}
        index={i}
        decrementQuantity={props.decrementQuantity}
        removeItems={props.removeItems}
      />
    );
  })
  ): (
    <h1>No Products Exists currently in the Cart</h1>
  );
}
