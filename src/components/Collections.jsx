const images = [
  {
    id: 1,
    imgUrl:
      "https://images.unsplash.com/photo-1630318173886-9b43a35fff9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9zaHBpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 2,
    imgUrl:
      "https://images.unsplash.com/photo-1630318173886-9b43a35fff9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9zaHBpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
  {
    id: 3,
    imgUrl:
      "https://images.unsplash.com/photo-1630318173886-9b43a35fff9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9zaHBpdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60",
  },
];

function Collections() {
  return (
    <div className="flex justify-between items-center p-4">
      {images.map((img) => (
        <div key={img.id} className="flex justify-between items-center p-3">
          <img
            src={img.imgUrl}
            alt="collection-img"
            className=" rounded-xl"
            width={300}
            height={300}
          />
        </div>
      ))}
    </div>
  );
}
export default Collections;
