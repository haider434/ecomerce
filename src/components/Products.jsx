/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";
import data from "../db/db";

const FilteredProducts = () => {
  // Retrieve filter values from Redux state
  const { search, category, color, price, recommended } = useSelector(
    (state) => state.filters
  );
console.log(data)
  // Initialize products state with all data

  // Filter products based on criteria
  const filteredProducts = data.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || product.category === category;
    const matchesColor = color === "All" || product.color === color;

  
    return matchesSearch && matchesCategory && matchesColor ;
  });
console.log(price)
  return (
    <div className="flex flex-wrap mt-10 ml-[25rem]">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product, index) => (
          <div key={index} className="item border-2 p-4 w-64 rounded-lg flex-col z-[-2] border-[#dfdede] mr-4 mb-4">
            <img className="w-50 object-contain h-40 mb-4" src={product.img} alt={product.title} />
            <div className="cart-details">
              <h3 className="mb-2">{product.title}</h3>
              {/* Render star icon */}
              <p className="flex mb-2">
                <AiFillStar className="rating-star" />
              </p>
              <span className="reviews mb-2">(145)</span>
              <p className="price mb-2">
                <del>{product.prevPrice}</del>
                {product.newPrice}
              </p>
              <p>
                <BsFillBagHeartFill />
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="no-products">No products found</div>
      )}
    </div>
  );
};

export default FilteredProducts;
