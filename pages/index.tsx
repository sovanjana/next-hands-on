import Link from "next/link";
import Layout from "../components/layout";
import Helmet from "../components/Helmet";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Helmet title="Home" />

      <Layout>
        <div className={styles.container}>
          <div className={styles.title}>
            <span>Pokemon Family</span>
          </div>
          <Link href="/pokemon">Explore</Link>
        </div>
      </Layout>
    </>
  );
}
