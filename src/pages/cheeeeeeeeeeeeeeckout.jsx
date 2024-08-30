import AppContext from "@/components/AppContext";
import Address from "@/components/checkout/Address";
import Payment from "@/components/checkout/Payment";
import ProductLayout from "@/components/common/layout/ProductLayout";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({});
  const router = useRouter();
  const context = useContext(AppContext);
  const { rootState } = context;

  const formRef = useRef();
  const paymentSubmit = () => {
    formRef.current.submitForm();
  };
  const updateFormData = (data) => {
    setFormData(data);
    console.log(rootState.cartData);
    context.dispatch({
      type: "setOrderProduct",
      value: rootState.cartData,
    });
    context.dispatch({
      type: "setCartData",
      value: [],
    });
    router.push("/profile");
  };
  return (
    <>
      <ProductLayout>
        <div className="woocomerce__cart checkout-page">
          <div className="woocomerce__cart-wrapper">
            <Payment
              paymentSubmit={paymentSubmit}
              totalCost={rootState.totalCost}
            />
            <Address reference={formRef} updateFormData={updateFormData} />
          </div>
        </div>
      </ProductLayout>
    </>
  );
}
