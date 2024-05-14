import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import friendsImage from "../../pictures/Friends.jpg";
import jojoAkloImage from "../../pictures/JojoAklo.jpg";
import stevenCrueltyImage from "../../pictures/StevenCruelty.jpg";
import styles from "./SimpleSlider.module.css";
import { useRef } from "react";

export default function SimpleSlider() {

    let sliderRef = useRef(null);
    const play = () => {
      sliderRef.slickPlay();
    };
    const pause = () => {
      sliderRef.slickPause();
    };
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div className="slider-container">
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
            <div>
                <img id={styles.friendsImage} src={friendsImage} alt="" />
            </div>
            <div>
                <img id={styles.jojoAkloImage} src={jojoAkloImage} alt="" />
            </div>
            <div>
                <img id={styles.stevenCrueltyImage} src={stevenCrueltyImage} alt="" />
            </div>
        </Slider>
      </div>
    );
  }


//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <Slider {...settings}>
    //   <div>
    //     <img id={styles.friendsImage} src={friendsImage} alt="" />
    //   </div>
    //   <div>
    //   <img id={styles.jojoAkloImage} src={jojoAkloImage} alt="" />
    //   </div>
    //   <div>
    //     <img id={styles.stevenCrueltyImage} src={stevenCrueltyImage} alt="" />
    //   </div>
//     </Slider>
//   );
// }