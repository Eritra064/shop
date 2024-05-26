import { useSelector } from "react-redux";
import CustomCard from "../../helper/CustomCard";
const Wishlist = () => {
  const wishlist = useSelector((state) => state.product.wishlist);
  return (
    <div className=" mt-5 mb-5 container mx-auto d-flex flex-wrap gap-5 justify-content-center align-items-center">
      {wishlist.map((product, index) => (
        <div key={product.id} className="col-3 mb-4">
          <CustomCard product={product} remove />
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
