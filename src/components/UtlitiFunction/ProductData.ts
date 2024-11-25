export interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

export const productData: Product[] = [
  {
    id: 1,
    name: "Indian Sharee",
    price: "23,00",
    img: "/Photo/Fe1.png",
  },
  {
    id: 2,
    name: "Hoodie",
    price: "23,00",
    img: "/Photo/Fe2.png",
  },
  {
    id: 3,
    name: "Plazu",
    price: "23,00",
    img: "/Photo/Fe3.png",
  },
  {
    id: 4,
    name: "Jacket",
    price: "23,00",
    img: "/Photo/Ma1.png",
  },
  {
    id: 5,
    name: "Shirt",
    price: "23,00",
    img: "/Photo/Ma2.png",
  },
  {
    id: 6,
    name: "Half Sleeve",
    price: "23,00",
    img: "/Photo/Fe4.png",
  },
  {
    id: 7,
    name: "Indian Sharee",
    price: "23,00",
    img: "/Photo/Fe1.png",
  },
  {
    id: 8,
    name: "Hoodie",
    price: "23,00",
    img: "/Photo/Fe2.png",
  },
  {
    id: 9,
    name: "Plazu",
    price: "23,00",
    img: "/Photo/Fe3.png",
  },
  {
    id: 10,
    name: "Jacket",
    price: "23,00",
    img: "/Photo/Ma1.png",
  },
  {
    id: 11,
    name: "Shirt",
    price: "23,00",
    img: "/Photo/Ma2.png",
  },
  {
    id: 12,
    name: "Half Sleeve",
    price: "23,00",
    img: "/Photo/Fe4.png",
  },
];

export const productInformationData = [
  {
    id: 1,
    name: "Details",
    details: "This is a detailed description of the product.",
  },
  {
    id: 2,
    name: "Review & Rating",
    users: [
      {
        id: 1,
        name: "Cameron Williamson",
        rating: "4",
        comment: "Very Nice!!",
        like: 10,
        createAt: "2024-11-20",
      },
      {
        id: 1,
        name: "Cameron Williamson",
        rating: "4",
        comment: "Very Nice!!",
        like: 10,
        createAt: "2024-11-20",
      },
    ],
    views: 121,
    rating: 4.5,
    userFeedBack: [
      { id: 5, value: 50 },
      { id: 4, value: 5 },
      { id: 3, value: 10 },
      { id: 2, value: 30 },
      { id: 1, value: 2 },
    ],
  },
  {
    id: 3,
    name: "Discussion",
    details: "Join the discussion about this product here.",
  },
];
