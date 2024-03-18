export type TchartData = {
  id: number;
  title: string;
  price: number;
  img: string;
  quantity: number;
};

const chartData: TchartData[] = [
  {
    id: 1,
    title: "Laptop",
    price: 400,
    img: "https://i5.walmartimages.com/asr/d0d92c8a-7d40-4b45-a228-2bf0bb312b2b.307d4656b7ecc21a511eeab13a6077b8.jpeg",
    quantity: 1,
  },
  {
    id: 2,
    title: "Smart TV",
    price: 350,
    img: "https://th.bing.com/th/id/OIP.JvjUjwJZRYnvuewJ92xHNQHaGI?rs=1&pid=ImgDetMain",
    quantity: 1,
  },
  {
    id: 3,
    title: "Freezer",
    price: 200,
    img: "https://productimages.hepsiburada.net/s/23/1500/10048148602930.jpg",
    quantity: 1,
  },
  {
    id: 4,
    title: "Washing Machine",
    price: 150,
    img: "https://tecnologiaambiental.mx/wp-content/uploads/2022/11/las-7-mejores-secadoras-de-ropa-energeticamente-eficientes-de-2022-1536x915.jpg",
    quantity: 1,
  },
  {
    id: 5,
    title: "Iron",
    price: 60,
    img: "https://productimages.hepsiburada.net/s/10/1500/8929931624498.jpg",
    quantity: 1,
  },
];

export default chartData;
