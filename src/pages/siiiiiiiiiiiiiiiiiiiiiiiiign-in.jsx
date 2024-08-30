import ProductLayout from "@/components/common/layout/ProductLayout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const SignIn = () => {
  const passwordInput = useRef();
  const hidePassword = () => {
    if (passwordInput.current.type === "password") {
      passwordInput.current.type = "text";
    } else {
      passwordInput.current.type = "password";
    }
  };
  return (
    <>
      <Head>
        <title>Sign In</title>
        <meta name="description" content="Sign In Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductLayout>
          <div className="woocomerce__signin sec-plr-50">
            <div className="woocomerce__signin-wrapper">
              <div className="woocomerce__signin-titlewrap">
                <span className="woocomerce__signin-title">Sign in</span>
              </div>
              <form>
                <div className="woocomerce__signin-field">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    required
                    name="Email"
                    id="Email"
                    placeholder="Your email"
                  />
                </div>
                <div className="woocomerce__signin-field">
                  <label htmlFor="Password">Password</label>
                  <div className="woocomerce__signin-passwordfield">
                    <input
                      type="password"
                      required
                      name="Password"
                      ref={passwordInput}
                      id="Password"
                      placeholder="Password"
                    />
                    <button className="woocomerce__signin-view">
                      <Image
                        width={19}
                        height={11}
                        onClick={hidePassword}
                        src="/assets/imgs/woocomerce/view.png"
                        alt="view"
                      />
                    </button>
                  </div>
                </div>
                <div className="woocomerce__signin-checkbox">
                  <input type="checkbox" name="remmember" id="remmember" />
                  <label htmlFor="remmember">Remember me</label>
                </div>
                <div className="woocomerce__signin-btnwrap">
                  <button
                    type="submit"
                    className="woocomerce__checkout-submitbtn"
                  >
                    Sign In
                  </button>
                </div>
              </form>
              <div className="woocomerce__signin-formfooter">
                <p>
                  Don’t you have an account?{" "}
                  <Link href={"/sign-up"}>Sign up</Link>
                </p>
                <Link href={"/reset"}>Reset Password</Link>
              </div>
            </div>
          </div>
        </ProductLayout>
      </main>
    </>
  );
};

export default SignIn;
