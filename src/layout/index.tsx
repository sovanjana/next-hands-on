import Topbar from "./Topbar";
import Footer from "./Footer";
import { Container } from "reactstrap";

import styles from "../../styles/Layout.module.css";

interface ILayout {
  children: React.ReactNode;
}

export default function Layout(props: ILayout) {
  return (
    <div className={styles.layout}>
      <Topbar />
      <Container className={styles.content}>
        {props.children}
      </Container>
      <Footer />
    </div>
  );
}
