// import { useEffect, useState, useRef } from 'react';
// import { useRouter } from 'next/router';
// import Head from "next/head";
// import Link from "next/link";
// import ProductLayout from "@/components/common/layout/ProductLayout";
// import html2pdf from "html2pdf.js";

// const OrderConfirmation = () => {
//   const router = useRouter();
//   const [orderData, setOrderData] = useState(null);
//   const [cartItems, setCartItems] = useState([]);
//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalCount, setTotalCount] = useState(0);

//   const orderRef = useRef();
//   const downloadButtonRef = useRef();

//   useEffect(() => {
//     const savedOrderData = localStorage.getItem('orderData');
//     const savedCartData = localStorage.getItem('cartData');
//     const savedTotalPrice = localStorage.getItem('totalPrice');
//     const savedTotalCount = localStorage.getItem('totalCount');

//     if (savedOrderData && savedCartData) {
//       setOrderData(JSON.parse(savedOrderData));
//       setCartItems(JSON.parse(savedCartData));
//       setTotalPrice(savedTotalPrice);
//       setTotalCount(savedTotalCount);
//     } else {
    
//     }
//   }, [router]);

//   const downloadOrderAsPDF = () => {
//     const element = orderRef.current;
//     const downloadButton = downloadButtonRef.current;
//     const screenWidth = window.innerWidth;

  
//     let pdfWidth, scale;
//     if (screenWidth >= 1000) {
//       pdfWidth = 1980;
//       scale = 2.5;
//     } else {
//       pdfWidth = 450;
//       scale = 1.5;
//     }

  
//     downloadButton.style.display = 'none';

  
//     element.style.marginLeft = '55px';
//     element.style.marginTop = '55px';

  
//     const options = {
//       margin: 0.5,
//       filename: 'order-confirmation.pdf',
//       html2canvas: {
//         scale: scale,
//         useCORS: true,
//       },
//       jsPDF: {
//         unit: 'px',
//         format: [pdfWidth, element.clientHeight * scale],
//         orientation: 'portrait',
//       },
//     };

  
//     html2pdf().from(element).set(options).save().then(() => {
    
//       downloadButton.style.display = 'block';
      
    
//       element.style.marginLeft = '0';
//       element.style.marginTop = '0';
//     });
//   };

//   if (!orderData) {
//     return <p>Нет данных о заказе. Пожалуйста, вернитесь на главную.</p>;
//   }
  
//   return (
//     <>
//       <Head>
//         <title>Order Confirmation</title>
//         <meta name="description" content="OrderConfirmation Description" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//       </Head>
//       <main>
//         <ProductLayout>
//           <section className="service__area-7 pt-130">
//             <div className="container">
//               <div className="row">
//                 <div className="col-xxl-12">
//                   <div className="service__items-7 animation_service_7" ref={orderRef}> {/* Добавляем ref */}
//                     <div className="service__item-7">
//                       <p>
//                         <p className="service__title-7">
//                           Заказ успешно оформлен!
//                         </p>
//                       </p>
//                       <div>
//                         Всю информацию мы выслали вам на почту.
//                       </div>
//                       <button
//                         onClick={downloadOrderAsPDF}
//                         className="wc-btn-dark wc-btn-dark1"
//                         style={{ marginTop: '20px' }}
//                         ref={downloadButtonRef}
//                       >
//                         Скачать лист заказа (.pdf)
//                       </button>
//                       <p style={{marginTop: '10px', fontSize: '11px'}}>
//                        * Рекомендуем скачать лист заказа, так как данные по заказу удаляться с сайта. В любом случае всю информацтю мы вышлем вам на почту или мессенджеры.
//                       </p>
//                     </div>

//                     <div className="service__item-7">
//                       <p>
//                         <p className="service__title-7">
//                           Информация:
//                         </p>
//                       </p>
//                       <div>
//                         <p>Имя: {orderData?.name}</p>
//                         <p>Телефон: {orderData?.phone}</p>
//                         <p>Дата и время заказа: {orderData?.date}</p>
//                       </div>
//                     </div>
//                     <div className="service__item-7">
//                       <p>
//                         <p className="service__title-7">
//                           Доставка:
//                         </p>
//                       </p>
//                       <div>
//                         <p>Адрес: {orderData?.message}</p>
//                         <p>Дата и время: {orderData?.phone}</p>
//                       </div>
//                     </div>
//                     <div className="service__item-7">
//                       <p>
//                         <p className="service__title-7">
//                           Ваши товары:
//                         </p>
//                       </p>
//                       <ul>
//                         {cartItems.map((item, index) => (
//                           <li key={index}>
//                             <Link href={`/shop/${item.id}`} style={{color: '#000', display: 'block'}}>
//                               ● {item.title} - {item.quantity} шт. - {item.price} ₽
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div className="service__item-7">
//                       <p>
//                         <p className="service__title-7">
//                           Итог:
//                         </p>
//                       </p>
//                       <div>
//                         <p>Сумма: {totalPrice} ₽</p>
//                         <p>Позиций: {totalCount}</p>
//                       </div>
//                     </div>
//                     <div className="service__item-7">
//                       <p>
//                         <p className="service__title-7">
//                           Комментарий:
//                         </p>
//                       </p>
//                       <div>
//                         {orderData?.company ? (
//                           <>
//                             {orderData?.company}
//                           </>
//                         ) : (
//                           <p style={{color: 'red'}}>
//                             Без комментариев
//                           </p>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </ProductLayout>
//       </main>
//     </>
//   );
// };

// export default OrderConfirmation;


import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Link from "next/link";
import ProductLayout from "@/components/common/layout/ProductLayout";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const OrderConfirmation = () => {
  const router = useRouter();
  const [orderData, setOrderData] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCount, setTotalCount] = useState(0);

  const orderRef = useRef();
  const downloadButtonRef = useRef();

  useEffect(() => {
    const savedOrderData = localStorage.getItem('orderData');
    const savedCartData = localStorage.getItem('cartData');
    const savedTotalPrice = localStorage.getItem('totalPrice');
    const savedTotalCount = localStorage.getItem('totalCount');

    if (savedOrderData && savedCartData) {
      setOrderData(JSON.parse(savedOrderData));
      setCartItems(JSON.parse(savedCartData));
      setTotalPrice(savedTotalPrice);
      setTotalCount(savedTotalCount);
    } 
  }, [router]);


  const downloadPDF = () => {
    // Hide the download button
    if (downloadButtonRef.current) {
      downloadButtonRef.current.style.display = 'none';
    }

    html2canvas(orderRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190; // Set the image width
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 55; // Add a top margin of 55px

      // Add the image to the PDF with the top margin
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('order_confirmation.pdf');

      // Show the download button again
      if (downloadButtonRef.current) {
        downloadButtonRef.current.style.display = 'block';
      }
    });
  };

  if (!orderData) {
    return <p>Нет данных о заказе. Пожалуйста, вернитесь на главную.</p>;
  }

  return (
    <>
      <Head>
        <title>Order Confirmation</title>
        <meta name="description" content="OrderConfirmation Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductLayout>
          <section className="service__area-7 pt-130">
            <div className="container">
              <div className="row">
                <div className="col-xxl-12">
                  <div className="service__items-7 animation_service_7" ref={orderRef}>
                    <div className="service__item-7">
                      <p className="service__title-7">Заказ успешно оформлен!</p>
                      <div>Всю информацию мы выслали вам на почту.</div>
                      <button
                        className="wc-btn-dark wc-btn-dark1"
                        style={{ marginTop: '20px' }}
                        ref={downloadButtonRef}
                        onClick={downloadPDF} // Add the click handler
                      >
                        Скачать лист заказа (.pdf)
                      </button>
                      <p style={{ marginTop: '10px', fontSize: '11px' }}>
                        * Рекомендуем скачать лист заказа, так как данные по заказу удаляться с сайта. В любом случае всю информацтю мы вышлем вам на почту или мессенджеры.
                      </p>
                    </div>

                    <div className="service__item-7">
                      <p className="service__title-7">Информация:</p>
                      <div>
                        <p>Имя: {orderData?.name}</p>
                        <p>Телефон: {orderData?.phone}</p>
                        <p>Дата и время заказа: {orderData?.date}</p>
                      </div>
                    </div>
                    <div className="service__item-7">
                      <p className="service__title-7">Доставка:</p>
                      <div>
                        <p>Адрес: {orderData?.message}</p>
                        <p>Дата и время: {orderData?.phone}</p>
                      </div>
                    </div>
                    <div className="service__item-7">
                      <p className="service__title-7">Ваши товары:</p>
                      <ul>
                        {cartItems.map((item, index) => (
                          <li key={index}>
                            <Link href={`/shop/${item.id}`} style={{ color: '#000', display: 'block' }}>
                              ● {item.title} - {item.quantity} шт. - {item.price} ₽
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="service__item-7">
                      <p className="service__title-7">Итог:</p>
                      <div>
                        <p>Сумма: {totalPrice} ₽</p>
                        <p>Позиций: {totalCount}</p>
                      </div>
                    </div>
                    <div className="service__item-7">
                      <p className="service__title-7">Комментарий:</p>
                      <div>
                        {orderData?.company ? (
                          <>{orderData?.company}</>
                        ) : (
                          <p style={{ color: 'red' }}>Без комментариев</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ProductLayout>
      </main>
    </>
  );
};

export default OrderConfirmation;
