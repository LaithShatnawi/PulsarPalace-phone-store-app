import "./Products.scss";
import SubHero from "./sub-hero/SubHero";
import { useContext, useEffect } from "react";
import { DataContext } from "../context/DataContext";
import Card from "./card/Card";
import PaginationSlider from "./pagination/Pagination";

const Products = () => {
  const data = useContext(DataContext);
  const startIndex = (data.page - 1) * 15;
  const endIndex = startIndex + 15;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <SubHero />
      <h1 className="products_title">Products</h1>
      <div className="cards_container">
        {data.data
          .filter((phone, index) => index >= startIndex && index < endIndex)
          .map((phone, idx) => {
            return <Card key={idx} phone={phone} />;
          })}
      </div>
      <PaginationSlider />
    </div>
  );
};

export default Products;
