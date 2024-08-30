import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ProductLayout from "@/components/common/layout/ProductLayout";
import { useRef } from "react";

const SignUp = () => {
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
        <title>Sign Up</title>
        <meta name="description" content="Sign Up Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductLayout>
          <div className="woocomerce__signin sec-plr-50">
            <div className="woocomerce__signin-wrapper">
              <div className="woocomerce__signin-titlewrap">
                <span className="woocomerce__signin-title">Sign up</span>
              </div>
              <form>
                <div className="woocomerce__signin-field">
                  <label htmlFor="Name">Name</label>
                  <input type="text" required name="Name" id="Name" placeholder="Name" />
                </div>
                <div className="woocomerce__signin-field">
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    name="Email"
                    required
                    id="Email"
                    placeholder="Your email"
                  />
                </div>
                <div className="woocomerce__signin-field">
                  <label htmlFor="Password">Password</label>
                  <div className="woocomerce__signin-passwordfield">
                    <input
                      type="password"
                      name="Password"
                      required
                      id="Password"
                      ref={passwordInput}
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
                <div className="woocomerce__signin-btnwrap signupbtn">
                  <button
                    type="submit"
                    className="woocomerce__checkout-submitbtn"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              <div className="woocomerce__signin-formfooter">
                <p>
                  Already have an account <Link href={"/sign-in"}>Sign in</Link>
                </p>
              </div>
            </div>
          </div>
        </ProductLayout>
      </main>
    </>
  );
};

export default SignUp;
