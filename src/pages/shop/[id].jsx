import { Preloader } from "@/components";
import ProductLayout from "@/components/common/layout/ProductLayout";
import ProductDetails from "@/components/shop/ProductDetails";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Details = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    "../assets/json/allProducts.json",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data)
    return (
      <div>
        <Preloader />
      </div>
    );
  let details = {};
  if (router.query.id) {
    details = data.products.find((el) => el.id === router.query.id);
  }

  return (
    <>
      <Head>
        <title>Product Details</title>
        <meta name="description" content="Product Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductLayout>
          <ProductDetails details={details} />
        </ProductLayout>
      </main>
    </>
  );
};

export default Details;
