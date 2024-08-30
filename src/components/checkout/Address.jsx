import Link from "next/link";
import { useImperativeHandle } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Address({ reference, updateFormData }) {
  useImperativeHandle(reference, () => ({
    submitForm() {
      handleSubmit(onSubmit)();
    },
  }));
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toast.success("Order place successfully", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    updateFormData(data);
  };
  return (
    <>
      <div className="woocomerce__cart-right checkout">
        <span className="woocomerce__checkout-rtitle">Shipping Address</span>
        <div className="woocomerce__checkout-rform">
          <form>
            <div className="woocomerce__checkout-frfieldwrapper">
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  placeholder="Your email"
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  type="email"
                />
                {errors.email && (
                  <span className="warning_text" role="alert">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div className="woocomerce__checkout-fieldright">
                <p>
                  Already have an account? <br />
                  <Link href={"/sign-in"}>Log in</Link>
                </p>
              </div>
            </div>
            <div className="woocomerce__checkout-frfieldwrapperc">
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="country">Country / Region*</label>
                <input
                  id="country"
                  placeholder="Country"
                  {...register("country", {
                    required: "required",
                  })}
                  type="text"
                />
                {errors.country && (
                  <span className="warning_text" role="alert">
                    {errors.country.message}
                  </span>
                )}
              </div>
            </div>
            <div className="woocomerce__checkout-frfieldwrapper2">
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="f_name">First Name*</label>
                <input
                  id="f_name"
                  placeholder="First Name"
                  {...register("f_name", {
                    required: "required",
                  })}
                  type="text"
                />
                {errors.f_name && (
                  <span className="warning_text" role="alert">
                    {errors.f_name.message}
                  </span>
                )}
              </div>
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="l_name">Last Name*</label>
                <input
                  id="l_name"
                  placeholder="Last Name"
                  {...register("l_name", {
                    required: "required",
                  })}
                  type="text"
                />
                {errors.l_name && (
                  <span className="warning_text" role="alert">
                    {errors.l_name.message}
                  </span>
                )}
              </div>
            </div>
            <div className="woocomerce__checkout-frfieldwrapper2">
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="address_1">Street Address*</label>
                <input
                  id="address_1"
                  placeholder="Address"
                  {...register("address_1", {
                    required: "required",
                  })}
                  type="text"
                />
                {errors.address_1 && (
                  <span className="warning_text" role="alert">
                    {errors.address_1.message}
                  </span>
                )}
              </div>
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="address_2">Address 2*</label>
                <input
                  id="address_2"
                  placeholder="Address"
                  {...register("address_2", {
                    required: "required",
                  })}
                  type="text"
                />
                {errors.address_2 && (
                  <span className="warning_text" role="alert">
                    {errors.address_2.message}
                  </span>
                )}
              </div>
            </div>
            <div className="woocomerce__checkout-frfieldwrapper3">
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="city">City/ Town*</label>
                <input
                  id="city"
                  placeholder="City"
                  {...register("city", {
                    required: "required",
                  })}
                  type="text"
                />
                {errors.city && (
                  <span className="warning_text" role="alert">
                    {errors.city.message}
                  </span>
                )}
              </div>
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="area">Area*</label>
                <input
                  id="area"
                  placeholder="Area"
                  {...register("area", {
                    required: "required",
                  })}
                  type="text"
                />
                {errors.area && (
                  <span className="warning_text" role="alert">
                    {errors.area.message}
                  </span>
                )}
              </div>
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="p_code">Postal Code*</label>
                <input
                  id="p_code"
                  placeholder="Postal Code"
                  {...register("p_code", {
                    required: "required",
                  })}
                  type="text"
                />
                {errors.p_code && (
                  <span className="warning_text" role="alert">
                    {errors.p_code.message}
                  </span>
                )}
              </div>
            </div>
            <div className="woocomerce__checkout-frfieldwrapper2">
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="phone">Phone*</label>
                <input
                  id="phone"
                  placeholder="Phone"
                  {...register("phone", {
                    required: "required",
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Please enter number",
                    },
                  })}
                  type="text"
                />
                {errors.phone && (
                  <span className="warning_text" role="alert">
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div className="woocomerce__checkout-rformfield">
                <label htmlFor="company">Company</label>
                <input
                  id="company"
                  placeholder="Company"
                  {...register("company")}
                  type="text"
                />
              </div>
            </div>
            <div className="woocomerce__checkout-frfieldwrapperc">
              <div className="woocomerce__checkout-checker">
                <div>
                  <input
                    id="check"
                    {...register("check", {
                      required: "required",
                    })}
                    type="checkbox"
                  />
                  <label htmlFor="check">Agree*</label>
                </div>
                {errors.check && (
                  <span className="warning_text" role="alert">
                    {errors.check.message}
                  </span>
                )}
              </div>
            </div>
            <div className="woocomerce__checkout-frfieldwrapperc">
              <div className="woocomerce__checkout-msg">
                <label htmlFor="msg">Order Notes (Optional)</label>
                <textarea
                  id="msg"
                  placeholder="Write your order note....."
                  {...register("msg")}
                  type="text"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
