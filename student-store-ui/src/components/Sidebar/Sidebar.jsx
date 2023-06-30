import { useState } from "react"
import "./Sidebar.css"

export default function Sidebar({products, cart, clearCart, subTotal, checkoutStatus, setChechkoutStatus}) {
  const [currExpand, setExpand] = useState(false);
  
  const [purchasedCart, setPurchasedCart] = useState({});

  const tax = 0.12;
  const handleExpandSideBar= () =>{
      setExpand(!currExpand);
  };
  
  const avoidRefreshCheckout = (event) => {
    event.preventDefault();
  }
  const handleCheckout = () => {
    setChechkoutStatus(!checkoutStatus);
    setPurchasedCart(cart);
    clearCart({});
  }

  // these console logs are for both debugging as well as proof of stretch goal completion
  console.log(products)
  console.log(purchasedCart)
  console.log(checkoutStatus)
  return (
    <div className="sidebar">
      <h3>SideMenu</h3>
      <div className={currExpand ? "sidebar-open" : "sidebar-closed"}>
        <button className = "button" onClick={() => handleExpandSideBar()}>
          Expand
        </button>
        <div>
          {currExpand &&
          <div>
            <h1>Shopping Cart</h1>  
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
                    <td>${(products[key-1].price * value).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> 
          }
          {currExpand && subTotal > 0 && Object.keys(cart).length > 0 &&
            <div>
              <div>
                <p>Subtotal: {subTotal.toFixed(2)}</p>
                <p>Tax: {(tax * subTotal).toFixed(2)}</p>
                <p>Total: {((subTotal) + (tax * subTotal)).toFixed(2)}</p>
              </div>
              
            </div>
          }
          {currExpand && Object.keys(cart).length > 0 &&
            <div>
                <input type="text" name = "name" id= "userName" placeholder="Enter your name" />
                <input type="text" name="email" id="userEmail" placeholder="Enter your email"/>
                <button className = "button" onClick={()=>handleCheckout()}>Checkout</button>
            </div>
          }
          {checkoutStatus && 
            <div>
              <h1>Reciept</h1>
              <div>
                <table>
                  <tbody>
                    <tr>
                      {Object.entries(purchasedCart).map(([key, value]) => (
                        <tr>
                          <td>{products[key-1].name}</td>
                          <td>${products[key-1].price}</td>
                          <td>{value}</td>
                          <td>${(products[key-1].price * value).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
              <div>
                <p>Subtotal: {subTotal.toFixed(2)}</p>
                <p>Tax: {(tax * subTotal).toFixed(2)}</p>
                <p>Total: {((subTotal) + (tax * subTotal)).toFixed(2)}</p>
              </div>
              <div><button onClick={() => handleCheckout()}>Clear Reciept</button></div>
            </div>
          }

        </div>
      </div>
    </div>

  )
}
