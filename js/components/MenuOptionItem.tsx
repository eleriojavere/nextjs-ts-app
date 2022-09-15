import Image from "next/image";
import React from "react";
import { MenuItemOptionSetItem } from "../../helpers/hooks/useMenu";

export default function MenuOptionItem({
  data,
}: {
  data: MenuItemOptionSetItem;
}) {
  return (
    <div className="flex mb-4">
      <h2>{data.Name}</h2>
      <div className="ml-4">{data.Price} €</div>
    </div>
  );
}
