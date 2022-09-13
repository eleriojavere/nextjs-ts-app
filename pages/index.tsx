import type { NextPage } from "next";
import Head from "next/head";
import { StrictMode, useEffect, useState } from "react";
import useSWR from "swr";
import { useMenu } from "../helpers/hooks/useMenu";
import MenuItem from "../js/components/MenuItem";
import MenuSection from "../js/components/MenuSection";

const Home: NextPage = () => {
  const [error, setError]: any = useState("");
  const { menu, isLoading, isError } = useMenu();

  if (isLoading) return <p>Loading...</p>;
  if (!isLoading && isError) return <p>Error</p>;
  if (!menu) return <p>No menu to display</p>;

  console.log("menu", menu);

  return (
    <div>
      <Head>
        <title>Flipdish menu</title>
        <meta name="description" content="Flipdish menu" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {menu.MenuSections.map((menuSection) => {
        return (
          <MenuSection key={menuSection.MenuSectionId} data={menuSection} />
        );
      })}
    </div>
  );
};

export default Home;
