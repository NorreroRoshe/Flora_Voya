import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import Head from "next/head";
import Link from "next/link";
import ProductLayout from "@/components/common/layout/ProductLayout";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const OrderConfirmationBySP = () => {

  const router = useRouter();
  const [orderData, setOrderData] = useState(null);

  const orderRef = useRef();
  const downloadButtonRef = useRef();

  useEffect(() => {
    if (router.query) {
      const { name, phone, date, message, timedel, company, cartItems, totalPrice, totalCount } = router.query;

      // Проверяем, существует ли параметр cartItems, и если да, декодируем и парсим его, иначе пустой массив
      const parsedCartItems = cartItems ? JSON.parse(decodeURIComponent(cartItems)) : [];

      setOrderData({
        name: decodeURIComponent(name || ''),
        phone: decodeURIComponent(phone || ''),
        date: decodeURIComponent(date || ''),
        message: decodeURIComponent(message || ''),
        timedel: decodeURIComponent(timedel || ''),
        company: decodeURIComponent(company || ''),
        cartItems: parsedCartItems,
        totalPrice: decodeURIComponent(totalPrice || '0'),
        totalCount: decodeURIComponent(totalCount || '0'),
      });
    }
  }, [router.query]);

  const downloadPDF = () => {
    if (downloadButtonRef.current) {
      downloadButtonRef.current.style.display = 'none';
    }

    html2canvas(orderRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const imgWidth = 190;
      const pageHeight = pdf.internal.pageSize.height;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 55;
      
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('order_confirmation.pdf');

      if (downloadButtonRef.current) {
        downloadButtonRef.current.style.display = 'block';
      }
    });
  };

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
            {orderData ? (
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
                          onClick={downloadPDF}
                        >
                          Скачать лист заказа (.pdf)
                        </button>
                        <p style={{ marginTop: '10px', fontSize: '11px' }}>
                          * Рекомендуем скачать лист заказа, так как данные по заказу удалятся с сайта. В любом случае всю информацию мы вышлем вам на почту или мессенджеры.
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
                          {orderData?.message && orderData?.message !== 'undefined' ? (
                            <div style={{display: 'flex'}}>
                              Адрес: {orderData?.message}
                            </div>
                          ) : (
                            <div style={{display: 'flex'}}>
                              Адрес: &nbsp;<p style={{ color: 'red' }}>даннные не указаны</p>
                            </div>
                          )}
                          {orderData?.timedel && orderData?.timedel !== 'undefined' ? (
                            <div style={{display: 'flex', marginTop: '10px'}}>
                              Дата и время: {orderData?.timedel}
                            </div>
                          ) : (
                            <div style={{display: 'flex'}}>
                              Дата и время: &nbsp;<p style={{ color: 'red' }}>даннные не указаны</p>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="service__item-7">
                        <p className="service__title-7">Ваши товары:</p>
                        <ul>
                          {orderData?.cartItems?.map((item, index) => (
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
                          <p>Сумма: {orderData?.totalPrice} ₽</p>
                          <p>Позиций: {orderData?.totalCount}</p>
                        </div>
                      </div>
                      <div className="service__item-7">
                        <p className="service__title-7">Комментарий:</p>
                        <div>
                          {orderData?.company && orderData?.company !== 'undefined' ? (
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
            ) : (
              <p style={{textAlign: 'center', paddingBottom: '30px', fontSize: '17px'}}>Нет данных о заказе. Пожалуйста, вернитесь на главную.</p>
            )}
          </section>
        </ProductLayout>
      </main>
    </>
  );
};

export default OrderConfirmationBySP;