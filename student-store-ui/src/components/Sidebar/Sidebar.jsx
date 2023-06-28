import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar({products, cart, subTotal}) {
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
        <div>
          {currExpand &&
          <table>
            <tbody>
              <tr>
                <td>Product Name</td>
                <td>Product Price</td>
                <td>Product Quantity</td>
                <td>Product Total</td>
              </tr>
              {Object.entries(cart).map(([key, value]) => (
                
                <tr>
                  <td>{products[key-1].name}</td>
                  <td>${products[key-1].price}</td>
                  <td>{value}</td>
                  <td>${products[key-1].price * value}</td>
                </tr>
              ))}
            </tbody>
          </table>
          }
          {currExpand && subTotal > 0 &&
            <p>{subTotal}</p>
          }
        </div>
      </div>
    </div>

  )
}
