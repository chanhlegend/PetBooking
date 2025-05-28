import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="absolute right-4 top-1/2 z-10 cursor-pointer">
      <ArrowForwardIos style={{ color: "#c4662e" }} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className="absolute left-4 top-1/2 z-10 cursor-pointer">
      <ArrowBackIos style={{ color: "#c4662e" }} />
    </div>
  );
}
export { NextArrow, PrevArrow };