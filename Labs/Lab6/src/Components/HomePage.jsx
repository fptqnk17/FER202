import { useState, useEffect } from "react";
import "../assets/HomePage.scss";
import banner1 from "../assets/img/slide1.jpg";
import banner2 from "../assets/img/slide2.jpg";
import banner3 from "../assets/img/slide3.jpg";
import menu1 from "../assets/img/menu-01.jpg";
import menu2 from "../assets/img/menu-02.jpg";
import menu3 from "../assets/img/menu-03.jpg";
import menu4 from "../assets/img/menu-04.jpg";
import menu5 from "../assets/img/menu-05.jpg";
import menu6 from "../assets/img/menu-06.jpg";
import menu7 from "../assets/img/menu-07.jpg";
import menu8 from "../assets/img/menu-08.jpg";

const banners = [banner1, banner2, banner3];
const menus = [menu1, menu2, menu3, menu4, menu5, menu6, menu7, menu8];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % banners.length);
    }, 2000); // Change slide every 2 seconds

    return () => clearInterval(timer);
  }, [currentSlide]);

  return (
    <div>
      <div className="slider">
        <img src={banners[currentSlide]} alt="" />
      </div>
      <div className="best-sellers">
        <h2>This is Home Page</h2>
        <div className="products">
          {menus.map((menu, index) => (
            <div key={index} className="product">
              <img src={menu} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
