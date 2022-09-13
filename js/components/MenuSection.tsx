import { MenuSection as MenuSectionInterface } from "../../helpers/hooks/useMenu";
import MenuItem from "./MenuItem";

export default function MenuSection({ data }: { data: MenuSectionInterface }) {
  return (
    <>
      {data.MenuItems.map((menuItem) => {
        return <MenuItem data={menuItem} key={menuItem.MenuItemId} />;
      })}
    </>
  );
}
