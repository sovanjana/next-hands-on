import React from "react";
import { useRouter } from "next/router";
import { Row, Col } from "reactstrap";
import Image from 'next/image'

import styles from "../../styles/Users.module.css";

function User(props: any) {
  const router = useRouter();
  const { data } = props;
  console.log({ props });

  return (
    <div className={styles.user}>
      <h1 className={styles.title}>{data?.name}</h1>
      <div className={styles.details}>
        <Row>
          <Col>
            {Object.keys(data?.sprites)?.map((key: string, idx: number) => {
              return typeof data?.sprites?.[key] !== "object" && (
                <Image
                  key={idx}
                  src={data?.sprites?.[key]}
                  alt="Picture of the author"
                  width={200}
                  height={200}
                  className={styles.img}
                  blurDataURL={data?.sprites?.[key]}
                />
              );
            })}
          </Col>
          {/* <Col lg={8}></Col> */}
        </Row>
      </div>
    </div>
  );
}

export default User;

export async function getStaticPaths() {
  const base_path = "https://pokeapi.co/api/v2";
  const res = await fetch(`${base_path}/pokemon?limit=50&offset=0`);
  const data = await res.json();

  const paths = data?.results?.map((user: any) => ({
    params: { id: user?.name.toString() },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  const base_path = "https://pokeapi.co/api/v2";
  const res = await fetch(`${base_path}/pokemon/${params.id}`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    },
  };
}
