
      import { useDispatch } from "react-redux";
import { setCategory, setColor, setPrice } from '../redux-store/filterSlice';

const SideBar = () => {
  const dispatch = useDispatch();
  
  // Correctly handle changes for category, color, and price
  const handleCategoryChange = (e) => {
    dispatch(setCategory(e.target.value));
  };

  const handleColorChange = (e) => {
    dispatch(setColor(e.target.value));
  };
 
    
  const handlePriceChange = (e) => {
    const priceRange = e.target.value;
    let minPrice, maxPrice;
  
    // Determine min and max prices based on the selected price range
    switch (priceRange) {
      case "All":
        minPrice = "$0";
        maxPrice = "$Infinity";
        break;
      case "$0 - $50":
        minPrice = "$0";
        maxPrice = "$50";
        break;
      case "$50 - $100":
        minPrice = "$50";
        maxPrice = "$100";
        break;
      // Handle other price ranges
      default:
        minPrice = "$0";
        maxPrice = "$1000";
        break;
    }
  
    // Dispatch action for price filter with dollar signs included
    dispatch(setPrice({ min: minPrice, max: maxPrice }));
  
    console.log('Price Filter State:', priceRange);
  };
  
    
  return (
    <div className="w-[20rem] h-[100%] pr-[3rem] br-[#f3f3f3] border-[1px] fixed flex flex-col items-center">
      <h1 className="text-[22px] mt-[2rem] mb-[4.5rem]">🛒</h1>
      <div className="items-center">
        <h1 className="font-semibold text-2xl">Category</h1>
        <div className="items-center pl-4 mt-5">
          {/* Category Options */}
          <label className="block text-md font-semibold">
            <input type="radio" name="category" value="All" onChange={handleCategoryChange} />
            <span className="pl-3">All</span>
          </label>
          <label className="block text-md font-semibold">
            <input type="radio" name="category" value="heels" onChange={handleCategoryChange} />
            <span className="pl-3">Heels</span>
          </label>
          <label className="block text-md font-semibold">
            <input type="radio" name="category" value="flats" onChange={handleCategoryChange} />
            <span className="pl-3">Flat</span>
          </label>
          <label className="block text-md font-semibold">
            <input type="radio" name="category" value="sandals" onChange={handleCategoryChange} />
            <span className="pl-3">Sandals</span>
          </label>
          <label className="block text-md font-semibold">
            <input type="radio" name="category" value="sneakers" onChange={handleCategoryChange} />
            <span className="pl-3">Sneakers</span>
          </label>
        </div>
      </div>
      <div className="items-center mt-2 ml-4">
  <h1 className="text-2xl font-semibold">Price</h1>
  <div className="items-center pl-4 mt-4">
    <label>
      <input type="radio" name="price" value="All" onChange={handlePriceChange} />
      <span>All</span>
    </label>
    <br />
    <label>
      <input type="radio" name="price" value="$0 - $50" onChange={handlePriceChange} />
      <span>$0 - $50</span>
    </label>
    <br />
    <label>
      <input type="radio" name="price" value="$50 - $100" onChange={handlePriceChange} />
      <span>$50 - $100</span>
    </label>
    <br />
    <label>
      <input type="radio" name="price" value="$100 - $150" onChange={handlePriceChange} />
      <span>$100 - $150</span>
    </label>
    <br />
    <label>
      <input type="radio" name="price" value="$150 - $200" onChange={handlePriceChange} />
      <span>$150 - $200</span>
    </label>
  </div>
</div>
      <div className="items-center mt-2 ml-[-1rem]">
        <h1 className="text-2xl font-semibold">Colors</h1>
        <div className="items-center pl-4 mt-4">
          <label className="block text-md font-semibold">
            <input type="radio" name="colors" value="All" onChange={handleColorChange} />
            <span className="pl-3">All</span>
          </label>
          <label className="block text-md font-semibold">
            <input type="radio" name="colors" value="white" onChange={handleColorChange} />
            <span className="pl-3">White</span>
          </label>
          <label className="block text-md font-semibold">
            <input type="radio" name="colors" value="green" onChange={handleColorChange} />
            <span className="pl-3">Green</span>
          </label>
          <label className="block text-md font-semibold">
            <input type="radio" name="colors" value="red" onChange={handleColorChange} />
            <span className="pl-3">Red</span>
          </label>
          <label className="block text-md font-semibold">
            <input type="radio" name="colors" value="black" onChange={handleColorChange} />
            <span className="pl-3">Black</span>
          </label>
         
        </div>
      </div>
    </div>
  );
};

export default SideBar;
