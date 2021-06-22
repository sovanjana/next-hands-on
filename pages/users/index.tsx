import { useRouter } from "next/router";
import UserCard from "../../src/UserCard";

import styles from "../../styles/Users.module.css";

function Users(props: any) {
  const router = useRouter();

  return (
    <div className={styles.usersList}>
      {props?.data?.users?.map((user: any, idx: number) => (
        <div
          key={idx}
          className={styles.card}
          onClick={() =>
            router.push(`${router?.asPath}/${user?.name}`)
          }
        >
          <UserCard {...user} />
        </div>
      ))}
    </div>
  );
}

export default Users;

export async function getStaticProps(_context: any) {
  const base_path = "https://pokeapi.co/api/v2";
  const res = await fetch(`${base_path}/pokemon?limit=50&offset=0`);
  const data = await res.json();
  

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: {
        nextApi: data?.next,
        count: data?.count,
        users: data?.results,
      },
    },
  };
}
