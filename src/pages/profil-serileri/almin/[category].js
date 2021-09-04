import { useMemo, useState } from "react";
import alminProducts from "@/products/profil-serileri/almin.json";
import Layout from "@/components/core/Layout";
import ProductList from "@/components/common/ProductList";
import ZoomedImage from "@/components/common/ZoomedImage";
import Meta from "@/components/core/Meta";

const Almin = ({ category, categoryPath, categories }) => {
  const [zoomImage, setZoomImage] = useState(null);

  const products = useMemo(() => {
    if (category.productCount) {
      const p = [];
      for (let i = 1; i <= category.productCount; i += 1) {
        p.push(
          <img
            src={`/images/profil-sistemleri/almin/${categoryPath}/${i}.jpg`}
            alt={category.imageAlt}
            className="hover:opacity-70 cursor-zoom-in"
            role="presentation"
            onClick={({ target }) => setZoomImage({ src: target.src, alt: target.alt })}
          />
        );
      }

      return p;
    }

    return null;
  }, [category.imageAlt, category.productCount, categoryPath]);

  return (
    <Layout>
      <Meta title={`${categoryPath === "" ? "Almin Profil Serileri" : category.title} - Aks & Pro`} />
      <ProductList title={category.title} categories={categories} path="/profil-serileri/almin/">
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
      category: alminProducts[params.category],
      categories: Object.keys(alminProducts).map((c) => [c, alminProducts[c].title]),
    },
  };
}

export async function getStaticPaths() {
  const paths = Object.keys(alminProducts).map((product) => ({ params: { category: product } }));

  return { paths, fallback: false };
}

export default Almin;
