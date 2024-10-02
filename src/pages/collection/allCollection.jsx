import { Preloader, FullWidthCollect } from "@/components";
import ProductLayout from "@/components/common/layout/ProductLayout";
import Head from "next/head";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Full = () => {
  const { data: allCollections, error } = useSWR(
    "../assets/json/allCollections.json",
    fetcher
  );
  const { data: filters, error2 } = useSWR(
    "../assets/json/filter.json",
    fetcher
  );

  if (error || error2) return <div>Failed to load</div>;
  if (!allCollections || !filters)
    return (
      <div>
        {/* <Preloader /> */}
      </div>
    );

  const allData = allCollections.collections;
  const allFilter = filters.filter;
  return (
    <>
      <Head>
        <title>All collections</title>
        <meta name="description" content="Shop Full Width Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <ProductLayout>
          <div className="my-4 pt-md-3 text-center">
            <h1 style={{ textTransform: "capitalize" }}>
              Коллекция Nazaretty
            </h1>
          </div>
          <FullWidthCollect allData={allData} allFilter={allFilter} />
        </ProductLayout>
      </main>
    </>
  );
};

export default Full;
