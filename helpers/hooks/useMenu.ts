import axios from "axios";
import { useEffect, useState } from "react";
import useSWR, { Fetcher } from "swr";

interface Menu {
  MenuId: Number;
  MenuVersionNumber: Number;
  VersonGuid: string;
  MenuSections: [
    MenuSectionId: Number,
    MenuItems: [
      {
        MenuItemId: Number;
        Name: string;
        Description: string;
        Price: Number;
        IsAvailable: Boolean;
        MenuItemOptionSets: [
          {
            IsMasterOptionSet: boolean;
            MenuItemOptionSetItems: [{ Name: string }];
          }
        ];
      }
    ]
  ];
}

export const useMenu = () => {
  const apiUrl =
    "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json";

  // HELP, why does this fetch function give me a type error when used in useSWR()
  // const fetcher = async (url: string): Promise<Menu | null> => {
  //   try {
  //     await fetch(url)
  //       .then((res) => res.json())
  //       .then((menu) => {
  //         return menu;
  //       });
  //   } catch (e) {
  //     console.error(e, "Error fetching data");
  //   }
  //   return null;
  // };

  const fetcher = async (url: string) =>
    await axios.get<Menu>(url).then((res) => res.data);

  const { data, error } = useSWR<Menu>(apiUrl, fetcher);

  return { menu: data, isLoading: !error && !data, isError: error };
};
