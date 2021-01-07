import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import Product from "../product/Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  // calling from db so that more types of products can easily be added later in the dashboard as product line grows/changes
  useEffect(() => {
    db.collection("products").onSnapshot((snapshot) =>
      setProducts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  console.log(products);

  return (
    <div className="allProducts">
      <h1>all products page</h1>
      {products.map((product) => (
        <Product key={product.id} name={product.name} />
      ))}
    </div>
  );
};

export default AllProducts;
