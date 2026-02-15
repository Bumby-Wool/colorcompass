import React from "react";

export type ItemCardProps = {
  title: string;
  imageUrl: string;
  onClick?: () => void;
};

export function ItemCard({ title, imageUrl, onClick }: ItemCardProps): JSX.Element {
  return (
    <button className="item-card" style={{ backgroundImage: `url(${imageUrl})` }} onClick={onClick}>
      <span className="item-card-title">{title}</span>
    </button>
  );
}
