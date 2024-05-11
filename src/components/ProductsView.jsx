import { useSelector, useDispatch } from "react-redux";

const ProductsView = () => {
    const products = useSelector((state) => state.productReducer)
    console.log(products);
    return ( 
        <div>
            {products.map((product) =>(
                <p>{product.name}</p>
            ))}
        </div>
     );
}
 
export default ProductsView;
