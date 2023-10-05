const brands = [
  {
    id: 1,
    name: "Hitachi",
  },
  {
    id: 2,
    name: "Zoom",
  },
  {
    id: 3,
    name: "Philips",
  },
  {
    id: 4,
    name: "Colorlib",
  },
];

function Brands() {
  return (
    <div className="flex justify-between items-center p-8">
      {brands.map((brand) => (
        <h1
          key={brand.id}
          className="text-5xl leading-none text-black font-bold"
        >
          {brand.name}
        </h1>
      ))}
    </div>
  );
}
export default Brands;
