export type ItemListItem = {
  id: string;
  title: string;
  imageUrl: string;
  link: string;
};

export const items: ItemListItem[] = [
  {
    id: "diapercover",
    title: "Diaper Cover",
    imageUrl: "/resources/diapercover.png",
    link: "/items/diapercover",
  },
  {
    id: "bloomers",
    title: "Shorts - Bloomers",
    imageUrl: "/resources/Bloomers-laying-down-500x500.png",
    link: "/items/bloomers",
  },
  {
    id: "pants",
    title: "Pants",
    imageUrl: "/resources/Baby-Standard-Pants-Mild-Tapered-Hemmed-Main.png",
    link: "/items/pants",
  },
  {
    id: "crops",
    title: "Crops",
    imageUrl: "/resources/CropsEuros.png",
    link: "/items/crops",
  },
  {
    id: "sweater",
    title: "Sweater",
    imageUrl: "/resources/Adult-Sheepy.png",
    link: "/items/sweater",
  },
];
