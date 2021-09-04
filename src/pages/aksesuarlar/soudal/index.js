import Link from "next/link";
import soudal from "@/products/aksesuarlar/soudal.json";
import Layout from "@/components/core/Layout";
import ProductList from "@/components/common/ProductList";
import Meta from "@/components/core/Meta";

const Soudal = () => (
  <Layout>
    <Meta title="Soudal Silikonlar - Aks & Pro" />
    <ProductList title={soudal.title}>
      {soudal.products.map((product) => (
        <Link key={product.to} href={`/aksesuarlar/soudal/${product.to}`}>
          <a>
            <figure>
              <img
                src={`/images/aksesuarlar/soudal/${product.path}`}
                alt={product.alt}
                className="border-gray-300 border border-dashed w-full"
              />
              <figcaption className="mt-2 text-center">{product.alt}</figcaption>
            </figure>
          </a>
        </Link>
      ))}
    </ProductList>
  </Layout>
);

export default Soudal;
