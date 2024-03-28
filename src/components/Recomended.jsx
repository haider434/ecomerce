import { useDispatch } from "react-redux";
import { setRecommended } from '../redux-store/filterSlice';

const Recommended = () => {
  const dispatch = useDispatch();

  const handleBrandClick = (brand) => {
    dispatch(setRecommended(brand)); // Dispatch action to set recommended brand
  };

  return (
    <div className="ml-[25rem] mt-5">
      <h1 className="text-xl font-semibold">Recommended</h1>
      <div className="flex gap-2 mt-3">
        <button
          name="recommended"
          className="border-2 border-solid border-[#f3f3f3] px-3 py-2 rounded-md"
          onClick={() => handleBrandClick('All')}
        >
          All Products
        </button>
        <button
          name="recommended"
          className="border-2 border-solid border-[#f3f3f3] px-3 py-2 rounded-md"
          onClick={() => handleBrandClick('adidas')}
        >
          Adidas
        </button>
        <button
          name="recommended"
          className="border-2 border-solid border-[#f3f3f3] px-3 py-2 rounded-md"
          onClick={() => handleBrandClick('nike')}
        >
          Nike
        </button>
        <button
          name="recommended"
          className="border-2 border-solid border-[#f3f3f3] px-3 py-2 rounded-md"
          onClick={() => handleBrandClick('puma')}
        >
          Puma
        </button>
        <button
          name="recommended"
          className="border-2 border-solid border-[#f3f3f3] px-3 py-2 rounded-md"
          onClick={() => handleBrandClick('Vans')}
        >
          Vans
        </button>
      </div>
    </div>
  );
};

export default Recommended
