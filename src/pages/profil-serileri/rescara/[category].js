import rescaraProducts from "@/products/profil-serileri/rescara.json";
import ProductList from "@/components/common/ProductList";
import WithLink from "@/components/common/WithLink";
import Layout from "@/components/core/Layout";
import Meta from "@/components/core/Meta";

const Rescara = ({ category, categories, categoryPath }) => (
  <Layout>
    <Meta title={`${category.title} - Aks & Pro`} />
    <ProductList title={category.title} categories={categories} path="/profil-serileri/rescara/">
      {category.products.map((product) => (
        <WithLink key={product.to} href={product.to} useRouter={category.useRouter}>
          {category.hasBottomText ? (
            <figure>
              <img
                src={`/images/profil-sistemleri/rescara/${categoryPath === "" ? "" : `${categoryPath}/`}${
                  product.path
                }`}
                alt={product.alt}
                className="border-gray-300 border-2 border-dashed"
              />
              <figcaption className="text-center mt-2">{product.alt}</figcaption>
            </figure>
          ) : (
            <img
              src={`/images/profil-sistemleri/rescara/${categoryPath === "" ? "" : `${categoryPath}/`}${product.path}`}
              alt={product.alt}
              className="border-gray-300 border border-dashed"
            />
          )}
        </WithLink>
      ))}
    </ProductList>
  </Layout>
);

export async function getStaticProps({ params }) {
  return {
    props: {
      categoryPath: params.category,
      category: rescaraProducts[params.category],
      categories: Object.keys(rescaraProducts).map((c) => [c, rescaraProducts[c].title]),
    },
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(rescaraProducts).map((product) => ({ params: { category: product } }));

  return { paths, fallback: false };
}

export default Rescara;
