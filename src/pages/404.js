import Image from "next/image";
import Layout from "@/components/core/Layout";

const Custom404 = () => (
  <Layout className="flex gap-10 flex-col items-center justify-center">
    <Image src="/not-found.svg" alt="Not found" width={412.06} height={256} />
    <h1 className="text-4xl">Sayfa bulunamadı!</h1>
  </Layout>
);

export default Custom404;
