import Image from "next/image";
import React from "react";
import { MenuItem as MenuItemInterface } from "../../helpers/hooks/useMenu";

export default function MenuItem({ data }: { data: MenuItemInterface }) {
  return (
    <div className="mb-4">
      {data.ImageUrl && (
        <Image
          className="object-cover rounded-lg"
          width={400}
          height={300}
          src={data.ImageUrl}
          alt={data.Name}
        />
      )}
      <div className="flex">
        <h2>{data.Name}</h2>
        {data.Price !== 0 && <div className="ml-4">{data.Price} €</div>}{" "}
      </div>
      <div className="text-sm opacity-80	">{data.Description}</div>
    </div>
  );
}
