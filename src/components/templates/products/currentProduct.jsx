import React, { useEffect } from "react";
import DashboardContainer from "../../modules/dashboardContainer/dashboardContainer";
import { products } from "../home/data/data";

export default function CurrentProduct({ productID }) {
  const [product, setProduct] = React.useState(null);
  useEffect(() => {
    const current = products.find((item) => item.id === +productID);
    setProduct(current);
  }, []);
  return (
    <DashboardContainer
      pageTitle={`Product ID: ${productID}`}
      links={[
        { title: "Products", href: "/products" },
        { title: `Prodct ID: ${productID}`, href: `/products/${productID}` },
      ]}
    >
      <div className="">
        {product ? (
          <div className="">
            <p className="">Product Title: {product.name}</p>
          </div>
        ) : (
          <div className="">
            <p className="">Loading product details...</p>
          </div>
        )}
      </div>
    </DashboardContainer>
  );
}
