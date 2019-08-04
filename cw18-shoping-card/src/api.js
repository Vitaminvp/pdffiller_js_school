export const data = [
  {
    id: "id1",
    img:
      "https://cdnus.melaleuca.com/ProductContent/7878h_01_enUs_GridClear.png",
    title: "Simple Product",
    price: 90
  },
  {
    id: "id2",
    img:
      "https://meadowfresh.co.nz/assets/categories/4690496241/2L-ORIGINAL-500px__PadWzIwMCwyMDAsIkZGRkZGRiIsMF0.jpg",
    title: "Not Simple Product",
    price: 55
  },
  {
    id: "id3",
    img:
      "http://www.geocel.co.uk/images/uploads/product-images/Product_Sealants.png",
    title: "Awesome Product",
    price: 60
  },
  {
    id: "id4",
    img: "https://pp.userapi.com/c9304/g17010860/a_b7156a87.jpg?ava=1",
    title: "Mivina",
    price: 599
  }
];

const fakeApi = cb =>
  new Promise(resolve => {
    setTimeout(() => resolve(cb()), 500);
  });

export const getProducts = () => fakeApi(() => data);
