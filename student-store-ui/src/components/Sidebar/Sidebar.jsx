import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar() {
  const [currExpand, setExpand] = useState(false);
  const handleExpandSideBar= () =>{
      setExpand(!currExpand);
  };
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
