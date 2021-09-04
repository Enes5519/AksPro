import ProductInfo from "@/components/common/ProductInfo";
import Layout from "@/components/core/Layout";
import Table from "@/components/common/Table";
import TableItem from "@/components/common/Table/TableItem";

const SoudaFlex40FC = () => (
  <Layout>
    <ProductInfo title="Soudaflex 40 FC">
      <div className="mb-4">
        <p>
          <strong>Soudaflex 40 FC</strong> tek komponentli, akrilik dispersiyon esaslı, silikon emülsiyonu ile takviye
          edilerek üstün yapışma gücüne sahip, boyanabilen derz dolgu ve izolasyon mastiğidir.
        </p>
        <p>
          <strong>Soudaflex 40 FC</strong> antibakteriyel özelliği sayesinde sararma ve kararma yapmaz.
        </p>
        <p>
          <strong>Soudaflex 40 FC</strong> kuruduktan sonra elastikiyetini korur, çatlama yapmaz.
        </p>
        <p>
          <strong>Soudaflex 40 FC</strong> kürlendikten sonra boyanabilme özelliğine sahiptir.
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
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>60</TableItem>
        </tr>
        <tr>
          <TableItem>Gri</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>60</TableItem>
        </tr>
        <tr>
          <TableItem>Siyah</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>60</TableItem>
        </tr>
        <tr>
          <TableItem>Kahverengi</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>60</TableItem>
        </tr>
        <tr>
          <TableItem>Tik Ağacı</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>12</TableItem>
          <TableItem>120</TableItem>
        </tr>
        <tr>
          <TableItem>Kırık Beyaz</TableItem>
          <TableItem>600ml Kartuş</TableItem>
          <TableItem>12</TableItem>
          <TableItem>70</TableItem>
        </tr>
        <tr>
          <TableItem>Gri</TableItem>
          <TableItem>600ml Kartuş</TableItem>
          <TableItem>12</TableItem>
          <TableItem>70</TableItem>
        </tr>
        <tr>
          <TableItem>Siyah</TableItem>
          <TableItem>600ml Kartuş</TableItem>
          <TableItem>12</TableItem>
          <TableItem>70</TableItem>
        </tr>
        <tr>
          <TableItem>Kahverengi</TableItem>
          <TableItem>600ml Kartuş</TableItem>
          <TableItem>12</TableItem>
          <TableItem>70</TableItem>
        </tr>
      </Table>
    </ProductInfo>
  </Layout>
);

export default SoudaFlex40FC;
