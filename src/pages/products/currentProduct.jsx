import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import CurrentProduct from "../../components/templates/products/currentProduct";

export default function CurrentProductPage() {
  const { id } = useParams();

  // useEffect(() => {
  //   console.log(id);
  // }, []);
  return (
    <div>
      <CurrentProduct productID={id} />
    </div>
  );
}
