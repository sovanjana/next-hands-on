import { useRouter } from "next/router";
import UserLayout from "../../src/UserLayout";
import styles from "../../styles/Pokemon.module.css";

interface IPokemonSkeleton {
  name: string;
  url: string;
}
interface IPokemon {
  data: Array<IPokemonSkeleton>;
}

export default function Pokemon(props: IPokemon) {
  const router = useRouter();

  return (
    <div className={styles.pokemons}>
      <div className={styles.list}>
        {props?.data?.map((pokemon: IPokemonSkeleton, idx: number) => (
          <div
            key={idx}
            className={styles.card}
            onClick={() =>
              router.push(`${router?.asPath}/${pokemon?.name}`)
            }
          >
            <span>{pokemon?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Pokemon.Layout = ListLayout;



export async function getStaticProps(_context: any) {
  const base_path = "https://pokeapi.co/api/v2";
  const res = await fetch(`${base_path}/pokemon?limit=80&offset=0`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data: data?.results,
    },
  };
}
