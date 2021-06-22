import Link from "next/link";
import Helmet from "../src/Helmet";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Helmet title="Home" />

      <div className={styles.container}>
        <div className={styles.title}>
          <span>Hands on - Next.js</span>
        </div>
        <div className={styles.links}>
          <Link href="/pokemon">Pokemons</Link>
          <Link href="/users">Users</Link>
        </div>
      </div>
    </>
  );
}
