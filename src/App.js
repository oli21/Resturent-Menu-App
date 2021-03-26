import React, { useState } from "react";
import "./App.css";
import { Item } from "./components/item";
import menu from "./data/data";
import { Category } from "./components/category";

function App() {
  const [showMenu, setShowMenu] = useState(menu);
  //getting all the categories from the data
  let categories = [];

  categories = menu.map((item) => {
    return item.category;
  });

  //Finding unique categories for shwoing
  let unique_category = ["All", ...new Set(categories)];

  const handleCategory = (cat) => {
    if (cat === "All") {
      setShowMenu(menu);
    } else {
      let filteredMenu = menu.filter((item) => {
        if (item.category === cat) {
          return item;
        }
      });

      setShowMenu(filteredMenu);
    }
  };

  return (
    <>
      {/* rendering the categories */}
      <h1 className="title">Our Menu</h1>
      <div className="list">
        <ul>
          <li>
            {unique_category.map((item) => {
              return <Category cat={item} handleCategory={handleCategory} />;
            })}
          </li>
        </ul>
      </div>
      {/* rendering the items */}
      <div className="app">
        {showMenu.map((item) => {
          const { id, title, price, img, desc } = item;
          return (
            <Item key={id} title={title} price={price} img={img} desc={desc} />
          );
        })}
      </div>
    </>
  );
}

export default App;
