// import React, { useEffect, useState } from "react";
// function ProductList() {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     fetch("http://localhost:3000/products")
//       .then((response) => response.json())
//       .then((data) => setProducts(data));
//   }, []);
//   return (
//     <div>
//       <h2>Product List</h2>
//       {products.map((product) => (
//         <div key={product._id}>
//           <h3>{product.name}</h3>
//           <p>{product.description}</p>
//           <p>Price: ${product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
// export default ProductList;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products from the backend
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product._id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
