import ProductInfo from "@/components/common/ProductInfo";
import Layout from "@/components/core/Layout";
import Table from "@/components/common/Table";
import TableItem from "@/components/common/Table/TableItem";

const FirecrylFR = () => (
  <Layout>
    <ProductInfo title="Firecryl Fr">
      <div className="mb-4">
        <p>
          <strong>Firecryl Fr</strong> tek komponentli, kullanıma hazır, 120 °C den daha yüksek ısılara maruz kaldığında
          genleşerek alevlerin ve dumanın yayılmasını önleyen 240 dakikaya kadar yangın geciktirici özelliğe sahip
          akrilik mastiktir.
        </p>
        <p>
          <strong>Firecryl Fr</strong> 240 dakikaya kadar yangın dayanım ve geciktirme özelliği. (EN 1366 Kısım 4:
          NBN713.020-BS 476/20)
        </p>
        <p>
          <strong>Firecryl Fr</strong> yangın ve duman geçişlerine karşı dayanıklı.
        </p>
        <p>
          <strong>Firecryl Fr</strong> 120 °C den daha yüksek ısılara maruz kaldığında genleşerek alevlerin ve dumanın
          yayılmasını önler.
        </p>
        <p>
          <strong>Firecryl Fr</strong> gözenekli yüzeylerde ve metallerde mükemmel yapışma sağlar.
        </p>
        <p>
          <strong>Firecryl Fr</strong> kuruduktan sonra boyanma özelliğine sahiptir.
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
          <TableItem>15</TableItem>
          <TableItem>100</TableItem>
        </tr>
      </Table>
    </ProductInfo>
  </Layout>
);

export default FirecrylFR;
