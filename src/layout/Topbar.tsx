import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem
} from "reactstrap";

import styles from "../../styles/Layout.module.css";

interface ILink {
  label: string;
  href: string;
}
export default function Topbar() {
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const links: Array<ILink> = [
    { label: "Home", href: "/" },
    { label: "Users", href: "/users" },
    // { label: "Pokemons", href: "/pokemon" },
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <Navbar color="light" light expand="md" fixed="top" className={styles.topbar}>
      <NavbarBrand href="/" className={styles.brand}>Next Sample</NavbarBrand>
      <NavbarToggler onClick={toggle} className={styles.toggler} />
      <Collapse isOpen={isOpen} navbar className={styles.collapse}>
        <Nav navbar className={styles.nav}>
          {links.map((link: ILink, idx: number) => {
            const isActive = router?.pathname === link?.href;
            const classNames = `${styles.navitem} ${
              isActive ? styles.active : ``
            }`;
            return (
              <NavItem key={idx} className={classNames}>
                <Link href={link?.href}>{link?.label}</Link>
              </NavItem>
            );
          })}
        </Nav>
      </Collapse>
    </Navbar>
  );
}
