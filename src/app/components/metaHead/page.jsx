import Head from 'next/head';

const MetaHead = ({ title, description, favicon }) => {
  return (
    <Head>
      {/* Google Tag Manager */}
      <script
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NN97G94W');`,
        }}
      />
      {/* End Google Tag Manager */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {favicon && <link rel="icon" href={favicon} type="image/png" />}
    </Head>
  );
};

export default MetaHead;

