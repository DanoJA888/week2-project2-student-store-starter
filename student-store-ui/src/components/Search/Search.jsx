import * as React from "react"
import "./Search.css"

const categories = ["All Categories", "food", "clothing", "accessories", "tech"];
export default function Search({filtering, currentSearch, setSearch}){
    return(
        <div className="search">
            <div className="search-content">
                <div className="search-section">
                    <input
                        id = "inputField"
                        type="text"
                        value = {currentSearch}
                        onChange={(e) => {setSearch(e.target.value)}}

                    ></input>
                    <button>Search</button>
                </div>
                    
                
                <div className="filter-section">
                    <button onClick={() => {filtering(categories[0])} }>All Items</button>
                    <button onClick={() => {filtering(categories[1])}}>Food</button>
                    <button onClick={() => {filtering(categories[2])}}>Clothing</button>
                    <button onClick={() => {filtering(categories[3])}}>Accessories</button>
                    <button onClick={() => {filtering(categories[4])}}>Tech</button>
                </div>
            </div>
        </div>
    )
}