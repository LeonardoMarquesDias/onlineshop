import Head from 'next/head';

const MetaHead = ({ title, description, favicon }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {favicon && <link rel="icon" href={favicon} type="image/png" />}
    </Head>
  );
};

export default MetaHead;
