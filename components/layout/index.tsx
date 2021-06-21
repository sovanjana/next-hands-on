import Topbar from "./Topbar";
import Footer from "./Footer";

import styles from "../../styles/Layout.module.css";

interface ILayout {
  children: React.ReactNode
}

export default function Layout(props: ILayout) {
  return (
    <div className={styles.layout}>
      <Topbar />
      <div className={styles.content}>{props.children}</div>
      <Footer />
    </div>
  );
}
