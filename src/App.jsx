import Nav from "./navigation/Nav"
import Products from './components/Products';
import Recomended from './components/Recomended';
import SideBar from './sidebars/SideBar';
import { useState } from "react";
const App = () => {
  const [search,setSearch] = useState('')
  
     return (
    <div>
      <SideBar />
      <Nav search={search} setSearch={setSearch} />
      <Recomended />
      <Products search={search} />
      </div>
  )
}

export default App