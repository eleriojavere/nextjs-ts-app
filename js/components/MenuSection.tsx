import { MenuSection as MenuSectionInterface } from "../../helpers/hooks/useMenu";
import MenuItem from "./MenuItem";
import MenuOptionItem from "./MenuOptionItem";

export default function MenuSection({ data }: { data: MenuSectionInterface }) {
  return (
    <div>
      <h1 className="font-semibold mb-8 mt-8 text-lg text-blue-400">
        {data.Name}
      </h1>
      {data.MenuItems.map((menuItem) => (
        <MenuItem data={menuItem} key={menuItem.MenuItemId} />
      ))}

      {data.MenuItems.map((menuItem) =>
        menuItem.MenuItemOptionSets.filter((optionSet) => {
          return optionSet.IsMasterOptionSet === true;
        }).map((optionSet) => {
          return optionSet.MenuItemOptionSetItems.map(
            (MenuItemOptionSetItem) => {
              return (
                <MenuOptionItem
                  data={MenuItemOptionSetItem}
                  key={MenuItemOptionSetItem.MenuItemOptionSetItemId}
                />
              );
            }
          );
        })
      )}
    </div>
  );
}
