import "./Products.scss";
import SubHero from "./sub-hero/SubHero";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import Card from "./card/Card";
import PaginationSlider from "./pagination/Pagination";

const Products = () => {
  const data = useContext(DataContext);
  const startIndex = (data.page - 1) * 15;
  const endIndex = startIndex + 15;

  const [search, setSearch] = useState("");
  const [filteredInput, setFilteredInput] = useState("");
  const [show, setShow] = useState(false);

  console.log("search: ", search);
  console.log("filtered: ", filteredInput);

  const handleClick = (item) => {
    setFilteredInput(item);
  };

  const handleClickForAll = () => {
    setFilteredInput("");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SubHero />
      <h1 className="products_title">Products</h1>
      <div className="search_container">
        <div>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            onClick={() => setShow(true)}
            onBlur={() => {
              setTimeout(() => {
                setShow(false);
              }, 100);
            }}
          />
          {show && (
            <div className="search_list">
              <div
                className="searchFiltered"
                onClick={() => handleClickForAll()}
              >
                All
              </div>
              {data.data
                .filter((el) => {
                  const output =
                    el.brandName.toLowerCase() +
                    " " +
                    el.modelName.toLowerCase();
                  if (output.includes(search)) {
                    return output;
                  }
                })
                .map((el, idx) => {
                  return (
                    <div
                      key={idx}
                      className="searchFiltered"
                      onClick={() =>
                        handleClick(el.brandName + " " + el.modelName)
                      }
                    >
                      {el.brandName + " " + el.modelName}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
      <div className="cards_container">
        {data.data
          .filter((phone, index) => {
            const output = phone.brandName + " " + phone.modelName;
            if (output == filteredInput) {
              console.log("output: ", output);
              return phone;
            }
            if (index >= startIndex && index < endIndex) {
              if (search == "" && filteredInput == "") {
                return phone;
              }
            }
          })
          .map((phone, idx) => {
            return <Card key={idx} phone={phone} />;
          })}
      </div>
      <PaginationSlider />
    </div>
  );
};

export default Products;
