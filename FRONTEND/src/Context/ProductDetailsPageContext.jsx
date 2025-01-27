import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../Hooks/useFetch";
import { PRODUCT_DETAILS } from "../Api/endpoints";

const ProductDetailsContext = React.createContext({
  id: 0,
  name: "",
  description: "",
  mainCategory: { id: 0, name: "" },
  producttypes: [{ name: "", id: 0, discount: 0, price: 0 }],
  subCategory: { id: 0, name: "" },
  imgaes: "",
});

const ProductDetailsProvider = ({ children, setLoader }) => {
  const { productId } = useParams();
  const product = useFetch(`${PRODUCT_DETAILS}/${productId}`, false, setLoader);

  return (
    <ProductDetailsContext.Provider value={{ ...product }}>
      {children}
    </ProductDetailsContext.Provider>
  );
};

export default ProductDetailsContext;
export { ProductDetailsProvider };
