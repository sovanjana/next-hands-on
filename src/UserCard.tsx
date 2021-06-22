import { useEffect, useState } from "react";
import Image from 'next/image'

import styles from "../styles/Users.module.css";

interface IUserCard {
  name: string;
  url: string;
}

function UserCard(props: IUserCard) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    if (!data) {
      fetchData();
    }
  }, []);

  const fetchData = async () => {
    const res = await fetch(props?.url);
    const resData = await res.json();

    setData(resData);
    
  }
  console.log(data);
  

  const NoDataJSX = () => {
    return (
      <div className={styles.noData}>
        <span className={styles.loader}>Loading...</span>
      </div>
    )
  }

  return !data ? <NoDataJSX /> : (
    <div className="d-flex align-items-center justify-content-between">
      <Image
        src={data?.sprites?.front_default}
        alt="Picture of the author"
        width={100}
        height={100}
        className={styles.img}
        blurDataURL={data?.sprites?.front_default}
      />
      <p className={styles.name}>{data?.name}</p>
    </div>
  );
}

export default UserCard;