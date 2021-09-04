import ProductInfo from "@/components/common/ProductInfo";
import Layout from "@/components/core/Layout";
import Table from "@/components/common/Table";
import TableItem from "@/components/common/Table/TableItem";

const FixAllCrystal = () => (
  <Layout>
    <ProductInfo title="Fix ALL Crystal">
      <div className="mb-4">
        <p>
          <strong>Fix ALL Crystal</strong> gözenekli ve gözeneksiz tüm yüzeylerde yapıştırma ve dolgu amaçlı
          uygulamalarda kullanılabilen, yüksek elastikiyete sahip, tek komponentli, MS-Polimer bazlı, %100 kristal
          şeffaf mastiktir.
        </p>
        <p>
          <strong>Fix ALL Crystal</strong> %100 kristal şeffaf.
        </p>
        <p>
          <strong>Fix ALL Crystal</strong> uygulamadan hemen sonra su bazlı veya pek çok değişik boyalar ile
          boyanabilir.
        </p>
        <p>
          <strong>Fix ALL Crystal</strong> nemli yüzeylerde bile kullanılabilir.
        </p>
        <p>
          <strong>Fix ALL Crystal</strong> UV ışınlarına dayanıklı.
        </p>
        <p>
          <strong>Fix ALL Crystal</strong> kokusuzdur ve solvent içermez.
        </p>
        <p>
          <strong>Fix ALL Crystal</strong> hızlı kürlenir.
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
          <TableItem>Kristal Şeffaf</TableItem>
          <TableItem>290gr Kartuş</TableItem>
          <TableItem>12</TableItem>
          <TableItem>120</TableItem>
        </tr>
      </Table>
    </ProductInfo>
  </Layout>
);

export default FixAllCrystal;
