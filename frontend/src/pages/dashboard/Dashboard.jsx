import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import ProductList from "../../components/product/productList/ProductList";
// import ProductSummary from "../../components/product/productSummary/ProductSummary";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectIsLoggedIn } from "../../redux/features/auth/authSlice";
// import { getProducts } from "../../redux/features/product/productSlice";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { isError, message } = useSelector(
  //   (state) => state.product
  // );

  useEffect(() => {
    if (isLoggedIn === true) {
      console.log("true");
    }

    // if (isError) {
    //   console.log(message);
    // }
  }, [isLoggedIn, dispatch]);

  return (
    <div>
      {/* <ProductSummary products={products} />
      <ProductList products={products} /> */}
      welcome
    </div>
  );
};

export default Dashboard;