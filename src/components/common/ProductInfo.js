import Meta from "@/components/core/Meta";

const ProductInfo = ({ title, children }) => (
  <main className="container py-8">
    <Meta title={`${title} - Aks & Pro`} />
    <h1 className="text-xl lg:text-4xl font-bold">{title}</h1>
    <hr className="my-4" />
    <article className="text-gray-700 grid grid-cols-1 lg:grid-cols-2 place-items-start">{children}</article>
  </main>
);

export default ProductInfo;
