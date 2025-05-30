import { ShoppingCart } from "@mui/icons-material";
import Rating from "@mui/material/Rating";

export default function ProductCard({ product, widthCard, heightCard, heightImage, textSizeName, textSizeDescription, textSizePrice, buttonSize }) {
  return (
    <div
      className={`p-4 bg-custom-orange shadow-md rounded-2xl w-[${widthCard}px] h-[${heightCard}] flex flex-col justify-between`}
    >
      <img
        src={product.image[0].url}
        alt={product.name}
        className={`w-full h-[${heightImage}px] rounded-2xl mb-1`}
      />

      <h3 className={` text-[${textSizeName}px] font-bold text-white truncate pt-0`}>
        {product.productName}
      </h3>
      <div className={`flex items-center mt-2 truncate text-white text-[${textSizeDescription}px]`}>
        {product.description}
      </div>
      <div className="flex justify-center items-center mt-3">
        <span className={`text-custom-orange w-[200px] font-bold text-[${textSizePrice}px] bg-white p-2 rounded-xl mt-2`}>
          {product.price} <span className={` text-[${textSizePrice}px]`}>VND</span>
        </span>
        <div className="flex justify-center items-center mt-2 ml-4">
          <button className={`bg-white h-${buttonSize} w-${buttonSize} rounded-full text-custom-orange hover:bg-orange-100`}>
            <ShoppingCart fontSize="small" />
          </button>
        </div>
      </div>
    </div>
  );
}
