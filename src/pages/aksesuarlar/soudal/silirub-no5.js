import ProductInfo from "@/components/common/ProductInfo";
import Layout from "@/components/core/Layout";
import Table from "@/components/common/Table";
import TableItem from "@/components/common/Table/TableItem";

const SilirubNo5 = () => (
  <Layout>
    <ProductInfo title="Silirub NO5">
      <div className="mb-4">
        <p>
          <strong>Silirub NO5</strong> ISO 11600 F25 LM ve G25LM standartına denk SNJF (Fransa) standartına sahip.
          Yüksek kaliteli, birçok yüzeye mükemmel yapışma özelliğine sahip, PVC ve alüminyum doğrama, pencere duvar
          birleşme derzleri, giydirme cephe uygulamalarında ideal bir nötr silikonudur.
        </p>
        <p>
          <strong>Silirub NO5</strong> birçok yüzeye mükemmel yapışma özelliğine sahiptir.
        </p>
        <p>
          <strong>Silirub NO5</strong> düşük modüllüdür.
        </p>
        <p>
          <strong>Silirub NO5</strong> kokusuzdur.
        </p>
        <p>
          <strong>Silirub NO5</strong> kürlendikten sonra elastikiyetini korur.
        </p>
        <p>
          <strong>Silirub NO5</strong> tüm hava koşullarına karşı yüksek dayanıma sahiptir.
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
          <TableItem>60</TableItem>
        </tr>
        <tr>
          <TableItem>Beyaz</TableItem>
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
          <TableItem>Gri</TableItem>
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
          <TableItem>Alüm. Silver</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>60</TableItem>
        </tr>
        <tr>
          <TableItem>Bej</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>60</TableItem>
        </tr>
        <tr>
          <TableItem>Altınmeşe</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>60</TableItem>
        </tr>
        <tr>
          <TableItem>Bronz</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>60</TableItem>
        </tr>
      </Table>
    </ProductInfo>
  </Layout>
);

export default SilirubNo5;
