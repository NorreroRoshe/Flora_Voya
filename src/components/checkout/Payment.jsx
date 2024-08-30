import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Payment({ paymentSubmit, totalCost }) {
  const [active, setActive] = useState(1);
  return (
    <>
      <div className="woocomerce__cart-left checkout">
        <ul className="woocomerce__cart-payheaderup">
          <li className="woocomerce__cart-topamount">Amount: £{totalCost}</li>
          <li className="woocomerce__cart-upcart">
            <Link href={"/cart"}>Update Cart</Link>
          </li>
        </ul>
        <span className="woocomerce__cart-checktitle">Payment</span>
        <p className="woocomerce__cart-checkdis">
          * All transactions are secure and encrypted.
        </p>
        <div className="woocomerce__cart-paymentmenu">
          <div className="accordion">
            <div className="accordion-item">
              <div>
                <label htmlFor="visa">
                  <div
                    className="accordion-button"
                    onClick={() => setActive(1)}
                  >
                    <div className="woocomerce__cart-payheader">
                      <div className="woocomerce__cart-payleft">
                        <input
                          type="radio"
                          name="paypal"
                          id="visa"
                          checked={active == 1 ? true : false}
                          onChange={() => setActive(1)}
                        />
                        <p>Credit Card</p>
                      </div>
                      <div className="woocomerce__cart-checkright">
                        <ul className="woocomerce__cart-cardlist">
                          <li>
                            <Image
                              width={35}
                              height={22}
                              src="/assets/imgs/woocomerce/pay-1.png"
                              alt="pay-1"
                            />
                          </li>
                          <li>
                            <Image
                              width={35}
                              height={22}
                              src="/assets/imgs/woocomerce/pay-2.png"
                              alt="pay-1"
                            />
                          </li>
                          <li>
                            <Image
                              width={35}
                              height={22}
                              src="/assets/imgs/woocomerce/pay-3.png"
                              alt="pay-1"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div
                className={
                  active === 1
                    ? "accordion-collapse collapse show"
                    : "accordion-collapse collapse"
                }
              >
                <div className="accordion-body">
                  <div className="woocomerce__checkout-field">
                    <label>Card Number*</label>
                    <input
                      type="text"
                      name="checkout"
                      placeholder="XXXX    XXXX    XXXX    XXXX    XXXX"
                    />
                  </div>
                  <div className="woocomerce__checkout-fieldwrapper">
                    <div className="woocomerce__checkout-field">
                      <label>Expire Date*</label>
                      <input
                        type="text"
                        name="Expire"
                        placeholder="mm/dd/yyyy"
                      />
                    </div>
                    <div className="woocomerce__checkout-field cvvfield">
                      <label>CVV*</label>
                      <input type="text" name="checkout" placeholder="cvv" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div>
                <label htmlFor="paypal">
                  <div
                    className="accordion-button collapsed"
                    onClick={() => setActive(2)}
                  >
                    <div className="woocomerce__cart-payheader">
                      <div className="woocomerce__cart-payleft">
                        <input
                          type="radio"
                          name="paypal"
                          id="paypal"
                          checked={active == 2 ? true : false}
                          onChange={() => setActive(2)}
                        />
                        <p>PayPal</p>
                      </div>
                      <div className="woocomerce__cart-checkright">
                        <ul className="woocomerce__cart-cardlist">
                          <li>
                            <Image
                              width={35}
                              height={22}
                              src="/assets/imgs/woocomerce/paypal.png"
                              alt="pay-1"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div
                className={
                  active === 2
                    ? "accordion-collapse collapse show"
                    : "accordion-collapse collapse"
                }
              >
                <div className="accordion-body">
                  <div className="woocomerce__checkout-field">
                    <label>Card Number*</label>
                    <input
                      type="text"
                      name="checkout"
                      placeholder="XXXX    XXXX    XXXX    XXXX    XXXX"
                    />
                  </div>
                  <div className="woocomerce__checkout-fieldwrapper">
                    <div className="woocomerce__checkout-field">
                      <label>Expire Date*</label>
                      <input
                        type="text"
                        name="Expire"
                        placeholder="mm/dd/yyyy"
                      />
                    </div>
                    <div className="woocomerce__checkout-field cvvfield">
                      <label>CVV*</label>
                      <input type="text" name="checkout" placeholder="cvv" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div>
                <label htmlFor="bank">
                  <div
                    className="accordion-button collapsed"
                    onClick={() => setActive(3)}
                  >
                    <div className="woocomerce__cart-payheader">
                      <div className="woocomerce__cart-payleft">
                        <input
                          type="radio"
                          name="paypal"
                          id="bank"
                          checked={active == 3 ? true : false}
                          onChange={() => setActive(3)}
                        />
                        <p>Bank Transfer</p>
                      </div>
                      <div className="woocomerce__cart-checkright">
                        <ul className="woocomerce__cart-cardlist">
                          <li>
                            <Image
                              width={35}
                              height={22}
                              src="/assets/imgs/woocomerce/bank.png"
                              alt="pay-1"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div
                className={
                  active === 3
                    ? "accordion-collapse collapse show"
                    : "accordion-collapse collapse"
                }
              >
                <div className="accordion-body">
                  <div className="woocomerce__checkout-field">
                    <label>Card Number*</label>
                    <input
                      type="text"
                      name="checkout"
                      placeholder="XXXX    XXXX    XXXX    XXXX    XXXX"
                    />
                  </div>
                  <div className="woocomerce__checkout-fieldwrapper">
                    <div className="woocomerce__checkout-field">
                      <label>Expire Date*</label>
                      <input
                        type="text"
                        name="Expire"
                        placeholder="mm/dd/yyyy"
                      />
                    </div>
                    <div className="woocomerce__checkout-field cvvfield">
                      <label>CVV*</label>
                      <input type="text" name="checkout" placeholder="cvv" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="accordion-item">
              <div>
                <label htmlFor="cash">
                  <div
                    className="accordion-button collapsed"
                    onClick={() => setActive(4)}
                  >
                    <div className="woocomerce__cart-payheader">
                      <div className="woocomerce__cart-payleft">
                        <input
                          type="radio"
                          name="paypal"
                          id="cash"
                          checked={active == 4 ? true : false}
                          onChange={() => setActive(4)}
                        />
                        <p>Cash</p>
                      </div>
                      <div className="woocomerce__cart-checkright">
                        <ul className="woocomerce__cart-cardlist">
                          <li>
                            <Image
                              width={35}
                              height={22}
                              src="/assets/imgs/woocomerce/cash.png"
                              alt="pay-1"
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div
                className={
                  active === 4
                    ? "accordion-collapse collapse show"
                    : "accordion-collapse collapse"
                }
              >
                <div className="accordion-body">
                  <p className="cash-text">you can pay cash on delivery.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="woocomerce__checkout-btnwrapper">
            <button
              onClick={() => paymentSubmit()}
              className="woocomerce__checkout-submitbtn"
              type="submit"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
