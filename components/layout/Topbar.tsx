import Link from "next/link";
import { useRouter } from "next/router";

import styles from "../../styles/Layout.module.css";

interface ILink {
  label: string;
  href: string;
}
export default function Topbar() {
  const router = useRouter();

  const links: Array<ILink> = [
    { label: "Home", href: "/" },
    { label: "Pokemons", href: "/pokemon" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className={styles.topbar}>
      <div className={styles.brandWrapper} onClick={() => router.push("/")}>
        <p className={styles.brand}>Next Sample</p>
      </div>
      <ul className={styles.nav}>
        {links.map((link: ILink, idx: number) => {
          const isActive = router?.pathname === link?.href;
          const classNames = `${styles.navitem} ${
            isActive ? styles.active : ``
          }`;

          return (
            <li key={idx} className={classNames}>
              <Link href={link?.href}>{link?.label}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
