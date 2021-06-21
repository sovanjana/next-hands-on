import Link from "next/link";

import styles from "../../styles/Layout.module.css";

export default function Topbar() {
  return (
    <div className={styles.topbar}>
			<div className={styles.brandWrapper}>
				<p className={styles.brand}>Next Sample</p>
			</div>
			<div className={styles.nav}>
				<Link href="/">Home</Link>
				<Link href="/pokemon">Pokemons</Link>
				<Link href="/about">About</Link>
				<Link href="/faq">FAQ</Link>
				<Link href="/contact">Contact</Link>
			</div>
    </div>
  );
}
