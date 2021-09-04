import ProductInfo from "@/components/common/ProductInfo";
import Layout from "@/components/core/Layout";
import Table from "@/components/common/Table";
import TableItem from "@/components/common/Table/TableItem";

const SilirubWS = () => (
  <Layout>
    <ProductInfo title="Silirub WS">
      <div className="mb-4">
        <p>
          <strong>Silirub WS</strong> UV dayanımı yüksek, ultra elastik, yüksek hareket kapasitesine sahip su yalıtım ve
          derz dolgu amaçlı kullanılan tüm hava koşullarında dayanıklı tek komponentli nötr silikondur.
        </p>
        <p>
          <strong>Silirub WS</strong> kürlendikten sonra elastikiyetini korur.
        </p>
        <p>
          <strong>Silirub WS</strong> cam, lamine cam, eloksallı alüminyum, galvanize çelik ve beton yüzeylere mükemmel
          yapışma özelliğine sahiptir.
        </p>
        <p>
          <strong>Silirub WS</strong> ISO standartlarında düşük modüllüdür.
        </p>
        <p>
          <strong>Silirub WS</strong> tüm hava koşullarına karşı yüksek dayanıma sahiptir.
        </p>
        <p>
          <strong>Silirub WS</strong> çift cam üniteleriyle uyumlu olup su geçirimsizlik özelliğine sahiptir.
        </p>
        <p>
          <strong>Silirub WS</strong> alüminyum giydirme cephe uygulamalarında, kompozit panel, alüminyum ve PVC doğrama
          derzlerinde sızdırmazlık uygulamaları için idealdir.
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
          <TableItem>Siyah</TableItem>
          <TableItem>310ml Kartuş</TableItem>
          <TableItem>24</TableItem>
          <TableItem>60</TableItem>
        </tr>
      </Table>
    </ProductInfo>
  </Layout>
);

export default SilirubWS;
