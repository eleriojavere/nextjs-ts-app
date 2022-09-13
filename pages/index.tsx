import type { NextPage } from "next";
import Head from "next/head";
import { StrictMode, useEffect, useState } from "react";
import useSWR from "swr";
import { useMenu } from "../helpers/hooks/useMenu";

const Home: NextPage = () => {
  const [error, setError]: any = useState("");
  const { menu, isLoading, isError } = useMenu();

  if (isLoading) return <p>Loading...</p>;
  if (!menu) return <p>No menu to display</p>;

  return (
    <div>
      <Head>
        <title>Flipdish menu</title>
        <meta name="description" content="Flipdish menu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>
    </div>
  );
};

export default Home;
