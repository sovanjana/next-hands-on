import Link from "next/link";

import styles from "../../styles/Layout.module.css";

export default function Footer() {
  const date = new Date();

  return (
    <div className={styles.footer}>
      <div className={styles.nav}>
        <Link href="/">Home</Link>
        <Link href="/pokemon">Pokemons</Link>
        <Link href="/about">About</Link>
        <Link href="/faq">FAQ</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <p className={styles.copyright}>{`Copyright ©${date.getFullYear()} by sovanjana. All rights reserved.`}</p>
    </div>
  );
}
