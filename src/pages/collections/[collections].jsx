import { Preloader } from "@/components";
import SingleCategory from "@/components/category/SingleCategory";
import { FullWidthCollect } from "@/components";
import ProductLayout from "@/components/common/layout/ProductLayout";
import Head from "next/head";
import { useRouter } from "next/router";
import useSWR from "swr";
import SideFilter from "@/components/shop/SideFilterFlowCollection";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CategoryProduct() {
  const router = useRouter();
  const { data: allProducts, error } = useSWR(
    "../assets/json/allProducts.json",
    fetcher
  );
  const { data: allCollections, error1 } = useSWR(
    "../assets/json/allCollections.json",
    fetcher
  );
  const { data: filters, error2 } = useSWR(
    "../assets/json/filter.json",
    fetcher
  );

  if (error || error1 || error2) return <div>Failed to load</div>;
  if (!allProducts || !filters || !allCollections)
    return (
      <div>
        {/* <Preloader /> */}
      </div>
    );
  const allData = allProducts.products.filter(
    (el) => el.collections == router.query.collections?.split("-").join(" ")
  );
  const allFilter = filters.filter;
  const allColl = allCollections.collections.filter(
    (el) => el.collections == router.query.collections?.split("-").join(" ")
  );
  return (
    <>
      <Head>
        <title>Category Wise Product</title>
        <meta name="description" content="Category Wise Product Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductLayout>
          <div className="my-4 pt-md-3 text-center">
            <h1 style={{ textTransform: "capitalize" }}>
              все <span style={{ textTransform: "lowercase" }}>{router.query.collections?.split("-").join(" ")}</span>
            </h1>
            <br/>
            {allColl.length > 0 && <p>{allColl[0].coll_desc}</p>}
          </div>
          {/* <FullWidthCollect allData={allData} allFilter={allFilter} /> */}
          <SideFilter allData={allData} allFilter={allFilter} />
          {/* <SingleCategory allData={allData} allFilter={allFilter} /> */}
        </ProductLayout>
      </main>
    </>
  );
}
