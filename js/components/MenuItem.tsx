import React from "react";
import {
  Menu,
  MenuItem as MenuItemInterface,
} from "../../helpers/hooks/useMenu";

export default function MenuItem({ data }: { data: MenuItemInterface }) {
  return (
    <div>
      <h2>{data.Name}</h2>
      <div>{data.Description}</div>
      <div>{data.Price}</div>
    </div>
  );
}
