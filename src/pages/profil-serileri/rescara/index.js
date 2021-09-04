import Link from "next/link";
import rescaraProducts from "@/products/profil-serileri/rescara.json";
import Meta from "@/components/core/Meta";
import ProductList from "@/components/common/ProductList";
import Layout from "@/components/core/Layout";

const Rescara = ({ categories, products }) => (
  <Layout>
    <Meta title="Rescara Profil Serileri - Aks & Pro" />
    <ProductList title="Rescara Profil Serileri" categories={categories} path="/profil-serileri/rescara/">
      {products.map((product) => (
        <Link key={product.to} href={product.to}>
          <a>
            <img
              src={`/images/profil-sistemleri/rescara/${product.path}`}
              alt={product.alt}
              className="border-gray-300 border border-dashed"
            />
          </a>
        </Link>
      ))}
    </ProductList>
  </Layout>
);

export async function getStaticProps() {
  return {
    props: {
      categories: Object.keys(rescaraProducts).map((c) => [c, rescaraProducts[c].title]),
      products: [
        {
          path: "giydirme-cephe-sistemleri.png",
          alt: "Giydirme Cephe Sistemleri",
          to: "rescara/giydirme-cephe-sistemleri",
        },
        {
          path: "cam-balkon-sistemleri.png",
          alt: "Cam Balkon Sistemleri",
          to: "rescara/cam-balkon-sistemleri",
        },
        {
          path: "gunes-kiricilar.png",
          alt: "Güneş Kırıcılar Sistemleri",
          to: "rescara/gunes-kiricilar",
        },
        {
          path: "kapi-ve-pencere-sistemleri.png",
          alt: "Kapı ve Pencere Sistemleri",
          to: "rescara/kapi-ve-pencere-sistemleri",
        },
        {
          path: "kompozit-panel-sistemleri.png",
          alt: "Kompozit Panel Sistemleri",
          to: "rescara/kompozit-panel-sistemleri",
        },
        {
          path: "korkuluk-sistemleri.png",
          alt: "Korkuluk Sistemleri",
          to: "rescara/korkuluk-sistemleri",
        },
        {
          path: "ofis-bolme-sistemleri.png",
          alt: "Ofis Bölme Sistemleri",
          to: "rescara/ofis-bolme-sistemleri",
        },
        {
          path: "skylight-isik-sistemleri.png",
          alt: "Skylight Işıklık Sistemleri",
          to: "rescara/skylight-isiklik-sistemleri",
        },
        {
          path: "surme-ve-kaldirsur-sistemleri.png",
          alt: "Sürme ve Kaldırsür Sistemleri",
          to: "rescara/surme-ve-kaldirsur-sistemleri",
        },
        {
          path: "terra-cotta-sistemleri.png",
          alt: "Terra Cotta Sistemleri",
          to: "rescara/terra-cotta-sistemleri",
        },
      ],
    },
  };
}

export default Rescara;
