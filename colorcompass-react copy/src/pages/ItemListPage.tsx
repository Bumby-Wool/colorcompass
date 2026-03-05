import React from "react";
import { ItemCard } from "../components/item/ItemCard";
import { itemData } from "../data/itemData";

// Catalog landing page showing all items.
export function ItemListPage(): React.JSX.Element {
  return (
    <div className="item-list-container">
      <h2>Choose An Item To Customize</h2>
      <ul className="item-list">
        {/* Render each item card from the shared data model. */}
        {itemData.map((item) => (
          <li key={item.link}>
            <ItemCard title={item.title} imageUrl={item.image} link={item.link} />
          </li>
        ))}
      </ul>
    </div>
  );
}
