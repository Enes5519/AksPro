import { useMemo, useState } from "react";
import akspro from "@/products/aksesuarlar/akspro.json";
import Layout from "@/components/core/Layout";
import ProductList from "@/components/common/ProductList";
import ZoomedImage from "@/components/common/ZoomedImage";
import Meta from "@/components/core/Meta";

const AksProProduct = ({ category, categoryPath, categories }) => {
  const [zoomImage, setZoomImage] = useState(null);

  const products = useMemo(() => {
    if (category.products) {
      return category.products.map((product) => (
        <figure key={product.path}>
          <img
            src={`/images/aksesuarlar/${categoryPath === "" ? "" : `${categoryPath}/`}${product.path}`}
            alt={product.alt}
            className="hover:opacity-70 cursor-zoom-in border-gray-300 border border-dashed w-full"
            role="presentation"
            onClick={({ target }) => setZoomImage({ src: target.src, alt: target.alt })}
          />
          <figcaption className="mt-2 text-center">{product.alt}</figcaption>
        </figure>
      ));
    }

    if (category.productCount) {
      const p = [];
      for (let i = 1; i <= category.productCount; i += 1) {
        p.push(
          <img
            key={i}
            src={`/images/aksesuarlar/${categoryPath === "" ? "" : `${categoryPath}/`}${i}.jpg`}
            alt={category.imageAlt}
            className="hover:opacity-70 cursor-zoom-in border-gray-300 border border-dashed"
            role="presentation"
            onClick={({ target }) => setZoomImage({ src: target.src, alt: target.alt })}
          />
        );
      }
      return p;
    }

    return null;
  }, [category.imageAlt, category.productCount, category.products, categoryPath]);

  return (
    <Layout>
      <Meta title="Aksesuarlar - Aks & Pro" />
      <ProductList categories={categories} path="/aksesuarlar/akspro/" title={category.title}>
        {products}
      </ProductList>
      {zoomImage && <ZoomedImage src={zoomImage.src} alt={zoomImage.alt} close={() => setZoomImage(false)} />}
    </Layout>
  );
};

export async function getStaticProps({ params }) {
  return {
    props: {
      categoryPath: params.category,
      category: akspro[params.category],
      categories: Object.keys(akspro).map((c) => [c, akspro[c].title]),
    },
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(akspro).map((product) => ({ params: { category: product } }));

  return { paths, fallback: false };
}

export default AksProProduct;
