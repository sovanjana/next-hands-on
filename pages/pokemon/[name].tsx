// import { useRouter } from "next/router";
// import Layout from "../../components/layout";

export default (props: any) => {
  // const router = useRouter();
  // console.log({props});
  
  const { data } = props;

  return (
    // <Layout>
      <h1>{data?.name}</h1>
    // </Layout>
  );
};

export async function getStaticPaths() {
  const base_path = "https://pokeapi.co/api/v2";
  const res = await fetch(`${base_path}/pokemon?limit=80&offset=0`);
  const pokemons = await res.json();

  const paths = pokemons?.results?.map((pokemon: any) => ({
    params: { name: pokemon.name },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }: any) {
  const base_path = "https://pokeapi.co/api/v2";
  
  const res = await fetch(`${base_path}/pokemon/${params.name}`);
  const data = await res.json();
  console.log({data});

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
