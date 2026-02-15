import React from "react";
import { ItemCard } from "../components/item/ItemCard";
import { items } from "../data/items";

export function ItemListPage(): React.JSX.Element {
  return (
    <div className="item-list-container">
      <h2>Choose An Item To Customize</h2>
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id}>
            <ItemCard title={item.title} imageUrl={item.imageUrl} link={item.link} />
          </li>
        ))}
      </ul>
    </div>
  );
}
