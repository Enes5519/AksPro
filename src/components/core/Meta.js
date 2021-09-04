import Head from "next/head";

const Meta = ({
  title = "Aks & Pro - Alüminyum Profil Sistemleri, Kompozit Panel, Zengin Aksesuar Çeşitleri ve Proje Çözüm Merkezi",
  description = "Alüminyum Profil Sistemleri, Kompozit Panel ve Zengin Aksesuar çeşitleriyle birlikte, Alüminyum PROJE Çözüm Merkezi olarak ta hizmet vermekteyiz...",
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta
      name="keywords"
      content="akspro, aks, aks pro, tente profili, alüminyum tente profilleri, samsun alüminyum, aks alüminyum, ankraj çeşitleri, profil, aldoks profil, alüminyum, kompozit, proje"
    />
  </Head>
);

export default Meta;
