import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar({products, cart}) {
  const [currExpand, setExpand] = useState(false);
  const handleExpandSideBar= () =>{
      setExpand(!currExpand);
  };
  // these console logs are for both debugging as well as proof of stretch goal completion
  console.log(products)
  console.log(cart)
  return (
    <div className="sidebar">
      <h3>SideMenu</h3>
      <div className={currExpand ? "sidebar-open" : "sidebar-closed"}>
        <button className = "button" onClick={() => handleExpandSideBar()}>
          Expand
        </button>
      </div>
    </div>

  )
}
