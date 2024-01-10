import "./Information.scss";
import { DataContext } from "../../context/DataContext";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Notification from "../notification/Notification";
import { LoginContext } from "../../context/LoginContext";

const Information = () => {
  const data = useContext(DataContext);
  const loginState = useContext(LoginContext);

  const [quantity, setQuantity] = useState(1);
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="details_container">
      <div className="main_detials">
        <div className="img_container">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {data.details.images.split("||").map((image, idx) => {
              return (
                <SwiperSlide key={idx}>
                  <img src={image} alt="" className="details_img" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="text_container">
          <div>{data.details.brandName}</div>
          <h1>{data.details.modelName}</h1>
          <p>
            <span className="bold">Display: </span>
            {data.details.displayDetails.features.map((el, idx) => {
              return <span key={idx}>{el}, </span>;
            })}
            <span>
              {data.details.displayDetails.resolution},{" "}
              {data.details.displayDetails.size},{" "}
              {data.details.displayDetails.type}
            </span>
          </p>
          <div>
            <span className="bold">Memory: </span>internal storage:{" "}
            {data.details.memoryDetails.internalStorage}, ram:{" "}
            {data.details.memoryDetails.ram}
          </div>
          <p>
            <span className="bold">Main Camera:</span>
            {data.details.mainCameraDetails.features.map((el, idx) => {
              return <span key={idx}> {el}, </span>;
            })}
            {data.details.mainCameraDetails.lenses.map((el, idx) => {
              return <span key={idx}> {el}, </span>;
            })}
          </p>
          <div className="price">{data.details.price}</div>
          <div
            className="add_to_cart_btn"
            onClick={() => {
              if (loginState.loggedIn) {
                data.addToCart(data.details, quantity);
              }
              setShow(true);
            }}
          >
            <span>Add to Cart</span> <FontAwesomeIcon icon={faShoppingCart} />
          </div>
          <div className="quantity">
            <label htmlFor="">Quantity:</label>
            <input
              type="number"
              defaultValue={1}
              min={1}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="extra_details">
        <h1>More Information</h1>
        <div className="info_table">
          <div className="container">
            <div className="title">Body:</div>
            <div className="yes">
              <div>
                <b>Dimentions: </b>height:{" "}
                {data.details.bodyDetails.dimensions.height}, width:{" "}
                {data.details.bodyDetails.dimensions.width}, thickness:{" "}
                {data.details.bodyDetails.dimensions.thickness}
              </div>
              <div>
                <b>Weight: </b> {data.details.bodyDetails.weight}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="title">Network:</div>
            <div className="yes">
              <div>
                <b>Bands: </b>
                {data.details.networkDetails.bands.map((el, idx) => {
                  return <span key={idx}>{el}, </span>;
                })}
              </div>
              <div>
                <b>Technology: </b>
                {data.details.networkDetails.technology}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="title">Platform:</div>
            <div className="yes">
              <div>
                <b>Chipset: </b>
                {data.details.platformDetails.chipset}
              </div>
              <div>
                <b>Cpu: </b>
                {data.details.platformDetails.cpu}
              </div>
              <div>
                <b>Gpu: </b>
                {data.details.platformDetails.gpu}
              </div>
              <div>
                <b>OS: </b>
                {data.details.platformDetails.os}
              </div>
            </div>
          </div>
        </div>
      </div>
      {show && <Notification handleClose={handleClose} />}
    </div>
  );
};

export default Information;
