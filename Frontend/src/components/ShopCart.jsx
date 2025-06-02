export default function ShopCart({
    shop,
}) {
  return (
    <div className="flex flex-col items-center justify-center h-screen" style={{position: "relative"}}>
        <img src={shop.image} alt={shop.name} />
        <div style={{position: "absolute", bottom: "10px", left: "0"}}>
        <h3 className="text-3xl font-bold text-custom-orange mt-4">{shop.name}</h3>
        <p className="text-lg text-gray-700 mt-2">{shop.address}</p>
        </div>
    </div>
  );
}