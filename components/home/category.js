import Analysis from "./analysis";
import React, { useState, setState } from "react";
import Octicon, { ChevronDown, ChevronUp } from "@githubprimer/octicons-react";

let categories = [
  "Health Tech",
  "Food Tech",
  "Entertainment",
  "Media",
  "Science Papers"
];

let subCategories = [
  "Office food",
  "Deliveries",
  "Restaurant chains",
  "Exotic cuisine",
  "Chefs"
];

// let backgroundColors = ["black", "#2a053d", "#051c42", "#42112f", "#051c0e"];

function Category() {
  const [category, setCategory] = useState(categories);
  const [categoryShown, setCategoryShown] = useState(false);
  let renderSubcategory = subCategories.map((subcategory, index) => {
    return <div className="pv2 lh-copy "> {subcategory}</div>;
  });
  return category.map((category, index) => {
    return (
      <div>
        <div
          className=" avenir ttu f3 mt0 wrapper lh-copy fw7 mb3 "
          key={index}
        >
          <div className="bar white bg-black">
            {categoryShown ? (
              <div className="bar">
                <div className=" white bg-black-70 subcategory-menu f4 ml4  pv3">
                  {renderSubcategory}
                </div>
                <button
                  className=" subcategory-btn up mr4 link mt3"
                  onClick={e => {
                    e.preventDefault();
                    setCategoryShown(!categoryShown);
                  }}
                >
                  <Octicon icon={ChevronUp} size="medium" color="white" />
                </button>
              </div>
            ) : (
              <div className="bar">
                <div className="ml4 centered pv3"> {category}</div>
                <button
                  className="centered subcategory-btn mr4 link"
                  onClick={e => {
                    e.preventDefault();
                    setCategoryShown(!categoryShown);
                  }}
                >
                  <Octicon icon={ChevronDown} size="medium" color="white" />
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="ml4 i tr mr4 f6"> Based on your history </div>
        <div className="ml4">
          <Analysis />
        </div>
        <style jsx>{`
          .wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          }
          .parent {
            width: 75vw;
            height: 70px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            border-radius: 20px;
          }

          .bar {
            width: 100vw;
            height: auto;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }

          .subcategory-menu {
            width: 100vw;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .centered {
            align-self: center;
          }

          .link:focus {
            transition: color 0.15s ease-in;
            outline: 1px none;
          }
          .subcategory-btn {
            border: none;
            background: black;
            color: white;
          }
          .up {
            justify-self: flex-end;
            align-self: flex-start;
          }
        `}</style>
      </div>
    );
  });
}

export default Category;
