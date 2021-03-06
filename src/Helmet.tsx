import Head from "next/head";

interface IHelmet {
  title: string
}

export default (props: IHelmet) => {
  const { title } = props;
  return (
    <Head>
      <title>{`Next Sample - ${title}`}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
