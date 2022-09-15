import Image from "next/image";
import React from "react";
import { MenuItem as MenuItemInterface } from "../../helpers/hooks/useMenu";

export default function MenuItem({ data }: { data: MenuItemInterface }) {
  return (
    <div>
      {data.ImageUrl && (
        <Image width={60} height={60} src={data.ImageUrl} alt={data.Name} />
      )}
      <h2>{data.Name}</h2>
      <div>{data.Description}</div>
      <div>{data.Price}</div>
    </div>
  );
}
