import alminProducts from "@/products/profil-serileri/almin.json";
import Meta from "@/components/core/Meta";
import ProductList from "@/components/common/ProductList";
import Layout from "@/components/core/Layout";

const Almin = ({ categories }) => (
  <Layout>
    <Meta title="Almin Profil Serileri - Aks & Pro" />
    <ProductList title="Lütfen kategoriden ürün seçiniz" categories={categories} path="/profil-serileri/almin/" />
  </Layout>
);

export async function getStaticProps() {
  return {
    props: {
      categories: Object.keys(alminProducts).map((c) => [c, alminProducts[c].title]),
    },
  };
}

export default Almin;
