import ProductInfo from "@/components/common/ProductInfo";
import Layout from "@/components/core/Layout";
import Table from "@/components/common/Table";
import TableItem from "@/components/common/Table/TableItem";

const AcryrubSilikonizeMastik = () => (
  <Layout>
    <ProductInfo title="Acryryb Silikonize Mastik">
      <div className="mb-4">
        <p>
          <strong>Acryrub Silikonize</strong> tek komponentli, akrilik dispersiyon esaslı, silikon emülsiyonu ile
          takviye edilerek üstün yapışma gücüne sahip, boyanabilen derz dolgu ve izolasyon mastiğidir.
        </p>
        <p>
          <strong>Acryrub Silikonize</strong> antibakteriyel özelliği sayesinde sararma ve kararma yapmaz.
        </p>
        <p>
          <strong>Acryrub Silikonize</strong> kuruduktan sonra elastikiyetini korur, çatlama yapmaz.
        </p>
        <p>
          <strong>Acryrub Silikonize</strong> kürlendikten sonra boyanabilme özelliğine sahiptir.
        </p>
      </div>

      <Table
        headers={
          <>
            <TableItem isHeader>Renk</TableItem>
            <TableItem isHeader>Ambalaj</TableItem>
            <TableItem isHeader>Adet / Koli</TableItem>
            <TableItem isHeader>Koli / Palet</TableItem>
          </>
        }
      >
        <tr>
          <TableItem>Beyaz</TableItem>
          <TableItem>500gr Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>80</TableItem>
        </tr>
      </Table>
    </ProductInfo>
  </Layout>
);

export default AcryrubSilikonizeMastik;
