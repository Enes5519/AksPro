import ProductInfo from "@/components/common/ProductInfo";
import Layout from "@/components/core/Layout";
import Table from "@/components/common/Table";
import TableItem from "@/components/common/Table/TableItem";

const Butyrub = () => (
  <Layout>
    <ProductInfo title="Butyrub">
      <div className="mb-4">
        <p>
          <strong>Butyrub</strong> tek komponentli, akrilik dispersiyon esaslı, silikon emülsiyonu ile takviye edilerek
          üstün yapışma gücüne sahip, boyanabilen derz dolgu ve izolasyon mastiğidir.
        </p>
        <p>
          <strong>Butyrub</strong> antibakteriyel özelliği sayesinde sararma ve kararma yapmaz.
        </p>
        <p>
          <strong>Butyrub</strong> kuruduktan sonra elastikiyetini korur, çatlama yapmaz.
        </p>
        <p>
          <strong>Butyrub</strong> kürlendikten sonra boyanabilme özelliğine sahiptir.
        </p>
      </div>

      <Table
        headers={
          <>
            <TableItem isHeader>Renk</TableItem>
            <TableItem isHeader>Ambalaj</TableItem>
            <TableItem isHeader>Adet / Koli</TableItem>
          </>
        }
      >
        <tr>
          <TableItem>Gri</TableItem>
          <TableItem>310gr Kartuş</TableItem>
          <TableItem>15</TableItem>
        </tr>
      </Table>
    </ProductInfo>
  </Layout>
);

export default Butyrub;
