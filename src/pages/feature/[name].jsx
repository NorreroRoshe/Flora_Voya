import { Preloader } from "@/components";
import SideFilter from "@/components/shop/SideFilterFeatured";
import ProductLayout from "@/components/common/layout/ProductLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AllFeature() {
  const router = useRouter();
  const { name } = router.query;
  const getTitle = () => {
    switch (name) {
      case 'featured':
        return 'Самые популярные';
      case 'romanticcollection':
        return 'Романтическая коллекция';
        case 'boxes':
          return 'Боксы';
        case 'designbouquets':
          return 'Дизайнерские букеты';
        case 'rosesbouquets':
          return 'Букеты с розами';
        case 'premium':
          return 'Премиум';
        case 'romanticcollection':
          return 'Романтическая коллекция';
        case 'bascets':
          return 'Цветочные корзины';
        case 'moneybouquets':
          return 'Денежные букеты';
        case 'corsage':
          return 'Корсаж';
        case 'superbouquets':
          return 'Супербукеты';
      default:
        return name;
    }
  };
  // console.log(router.query.name);
  const { data: allProducts, error } = useSWR(
    "../assets/json/allProducts.json",
    fetcher
  );
  const { data: filters, error2 } = useSWR(
    "../assets/json/filter.json",
    fetcher
  );

  if (error || error2) return <div>Failed to load</div>;
  if (!allProducts || !filters)
    return (
      <div>
        <Preloader />
      </div>
    );

  const allData = allProducts.products.filter((el) => el[router.query.name]);
  const allFilter = filters.filter;
  return (
    <>
      <Head>
        <title>Category Wise Product</title>
        <meta name="description" content="Category Wise Product Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductLayout>
          <div className="my-md-4 my-3 pt-md-3 text-center">
            {/* <h1 style={{ textTransform: "capitalize" }}>{router.query.name}</h1> */}
            <h1>{getTitle()}</h1>
          </div>
          <SideFilter allData={allData} allFilter={allFilter} />
        </ProductLayout>
      </main>
    </>
  );
}
