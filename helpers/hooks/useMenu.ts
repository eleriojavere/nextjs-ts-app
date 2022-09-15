import useSWR from "swr";

export interface Menu {
  MenuId: number;
  MenuVersionNumber: number;
  VersonGuid: string;
  MenuSections: [MenuSection];
}

export interface MenuSection {
  MenuSectionId: number;
  MenuItems: [MenuItem];
  Name: string;
}

export interface MenuItem {
  MenuItemId: number;
  Name: string;
  Description: string;
  Price: number;
  IsAvailable: Boolean;
  ImageUrl: string;
  MenuItemOptionSets: [
    {
      IsMasterOptionSet: boolean;
      MenuItemOptionSetItems: [{ Name: string }];
    }
  ];
}

export const useMenu = () => {
  const apiUrl =
    "https://menus.flipdish.co/prod/16798/e6220da2-c34a-4ea2-bb51-a3e190fc5f08.json";

  const fetcher = (url: string) => fetch(url).then((res) => res.json());

  // const fetcher = async (url: string) =>
  //   await axios.get<Menu>(url).then((res) => res.data);

  const { data, error } = useSWR<Menu, Error>(apiUrl, fetcher);

  return { menu: data, isLoading: !error && !data, isError: error };
};
