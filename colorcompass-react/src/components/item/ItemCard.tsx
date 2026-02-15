import React from "react";
import { Link } from "react-router-dom";

export type ItemCardProps = {
  title: string;
  imageUrl: string;
  link: string;
};

export function ItemCard({ title, imageUrl, link }: ItemCardProps): React.JSX.Element {
  return (
    <Link className="item-card" style={{ backgroundImage: `url(${imageUrl})` }} to={link} aria-label={title}>
      <span className="item-card-title">{title}</span>
    </Link>
  );
}
