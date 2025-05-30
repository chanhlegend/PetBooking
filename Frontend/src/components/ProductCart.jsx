import { ShoppingCart } from "@mui/icons-material";

export default function ProductCard({
  product,
  widthCard,
  heightCard,
  heightImage,
  textSizeName,
  textSizeDescription,
  textSizePrice,
  buttonSize,
}) {
  return (
    <div
      className={`p-4 bg-custom-orange shadow-md rounded-2xl flex flex-col justify-between`}
      style={{ width: `${widthCard}px`, height: `${heightCard}px` }}
    >
      <img
        src={product.image[0].url}
        alt={product.name}
        className={`w-full rounded-2xl mb-1`}
        style={{ height: `${heightImage}px` }}
      />

      <h3
        className={`font-bold text-white truncate pt-0`}
        style={{ fontSize: `${textSizeName}px` }}
      >
        {product.productName}
      </h3>
      <div
        className={`flex items-center mt-2 truncate text-white`}
        style={{ fontSize: `${textSizeDescription}px` }}
      >
        {product.description}
      </div>
      <div className="flex justify-center items-center mt-3">
        <span
          className="text-custom-orange font-bold bg-white p-2 rounded-xl mt-2"
          style={{
            fontSize: `${textSizePrice}px`,
            width: "200px",
            display: "inline-block",
          }}
        >
          {Number(product.price).toLocaleString("vi-VN")}{" "}
          <span style={{ fontSize: `${textSizePrice}px` }}>VND</span>
        </span>

        <div className="flex justify-center items-center mt-2 ml-4">
          <button
            className={`bg-white rounded-full text-custom-orange hover:bg-orange-100`}
            style={{ width: `${buttonSize}px`, height: `${buttonSize}px` }}
          >
            <ShoppingCart fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
}
