import Meta from "@/components/core/Meta";
import ProductList from "@/components/common/ProductList";
import Layout from "@/components/core/Layout";
import akspro from "@/products/aksesuarlar/akspro.json";

const AksPro = ({ categories }) => (
  <Layout>
    <Meta title="Aksesuarlar - Aks & Pro" />
    <ProductList categories={categories} path="/aksesuarlar/akspro/" title="Lütfen kategoriden ürün seçiniz." />
  </Layout>
);

export async function getStaticProps() {
  return {
    props: {
      categories: Object.keys(akspro).map((c) => [c, akspro[c].title]),
    },
  };
}

export default AksPro;
