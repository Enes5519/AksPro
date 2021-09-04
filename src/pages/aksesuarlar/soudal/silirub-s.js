import ProductInfo from "@/components/common/ProductInfo";
import Layout from "@/components/core/Layout";
import Table from "@/components/common/Table";
import TableItem from "@/components/common/Table/TableItem";

const SilirubS = () => (
  <Layout>
    <ProductInfo title="Silirub S">
      <div className="mb-4">
        <p>
          <strong>Silirub S</strong> birçok yüzeye mükemmel yapışma özelliğine sahiptir.
        </p>
        <p>
          <strong>Silirub S</strong> yüksek kaliteli, elastik, tek komponentli, genel amaçlı, antibakteriyel asetik
          silikondur.
        </p>
        <p>
          <strong>Silirub S</strong> UV ışınlarına dayanıklıdır.
        </p>
        <p>
          <strong>Silirub S</strong> antibakteriyel özelliği sayesinde bakteri barındırmaz.
        </p>
        <p>
          <strong>Silirub S</strong> kürlendikten sonra elastikiyetini korur.
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
          <TableItem>Şeffaf</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>80</TableItem>
        </tr>
        <tr>
          <TableItem>Beyaz</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>80</TableItem>
        </tr>
        <tr>
          <TableItem>Kahverengi</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>80</TableItem>
        </tr>
        <tr>
          <TableItem>Siyah</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>80</TableItem>
        </tr>
        <tr>
          <TableItem>Gri</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>80</TableItem>
        </tr>
        <tr>
          <TableItem>Alüm. Silver</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>80</TableItem>
        </tr>
        <tr>
          <TableItem>Bej</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>80</TableItem>
        </tr>
        <tr>
          <TableItem>Altınmeşe</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>80</TableItem>
        </tr>
        <tr>
          <TableItem>Şeffaf</TableItem>
          <TableItem>280ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>80</TableItem>
        </tr>
        <tr>
          <TableItem>Beyaz</TableItem>
          <TableItem>280ml Kartuş</TableItem>
          <TableItem />
          <TableItem />
        </tr>
      </Table>
    </ProductInfo>
  </Layout>
);

export default SilirubS;
