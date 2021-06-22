// import type { AppProps } from "next/app";
import Layout from "../src/layout";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";

// function MyApp({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }
// export default MyApp

export default function MyApp({ Component, pageProps, appData }: any) {
  console.log(">>>");

  const AppLayout = Component.Layout || EmptyLayout;
  return (
    <Layout>
      <AppLayout>
        <Component {...pageProps} testData={appData} />
      </AppLayout>
    </Layout>
  );
}

const EmptyLayout = ({ children }: any) => <>{children}</>;

MyApp.getInitialProps = async ({ Component, ctx }: any) => {
  const res = await fetch("https://reqres.in/api/users?page=1");
  const appData = await res.json();
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps, appData };
};
