import Layout from "../components/layout";

import styles from "../styles/TextLayout.module.css";

export interface ITextLayout {
  title: string;
  data: Array<string>;
}

export default function TextLayout(props: ITextLayout) {
  const { title, data } = props;
  
  return (
    <Layout>
      <div className={styles.header}>{title}</div>
      <div className={styles.wrapper}>
        {data?.map((text: string, idx: number) => (
          <p key={idx} className={styles.text}>
            {text}
          </p>
        ))}
      </div>
    </Layout>
  );
}
