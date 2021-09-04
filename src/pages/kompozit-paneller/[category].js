import kompozitPaneller from "@/products/kompozit-panel.json";
import Layout from "@/components/core/Layout";
import ProductList from "@/components/common/ProductList";
import Meta from "@/components/core/Meta";

const KompozitPaneller = ({ category }) => (
  <Layout>
    <Meta title={`${category.title} - Aks & Pro`} />
    <ProductList title={category.title}>
      {category.products.map((product) => (
        <a key={product.path} href={`/pdf/kompozit-paneller/${product.to}`} target="_blank" rel="noreferrer">
          <img
            src={`/images/kompozit-paneller/${product.path}`}
            alt={product.alt}
            className="border-gray-300 border-2 border-dashed"
          />
        </a>
      ))}
    </ProductList>
  </Layout>
);

export async function getStaticProps({ params }) {
  return {
    props: {
      category: kompozitPaneller[params.category],
    },
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(kompozitPaneller).map((product) => ({ params: { category: product } }));

  return { paths, fallback: false };
}

export default KompozitPaneller;
