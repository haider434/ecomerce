import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd, AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {setSearch} from '../redux-store/filterSlice'
const Nav = () => {
  const dispatch = useDispatch();
  
  
  return (
    <div className="flex flex-row border-b-[#f3f3f3] pl-[25rem] p-10 justify-around border-b-2 items-center">
      <nav>
        <input
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="border-2 border-solid border-[#f3f3f3] px-6 py-1"
          type="text"
          name="search"
          placeholder="Search Items..."
        />
      </nav>
      <div className="profile-container flex gap-6 flex-row justify-between">
        <a href="#">
          <FiHeart />
        </a>
        <a href="#">
          <AiOutlineShoppingCart />
        </a>
        <a href="#">
          <AiOutlineUserAdd />
        </a>
      </div>
    </div>
  );
};

export default Nav;
