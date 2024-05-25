import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NightclubThumbnail from "../../pictures/NightclubThumbnail.png";
import jojoAkloImage from "../../pictures/JojoAklo.jpg";
import stevenCrueltyImage from "../../pictures/StevenCruelty.jpg";
import styles from "./SimpleSlider.module.css";
import { useRef } from "react";

export default function SimpleSlider() {

    let sliderRef = useRef(null);
  
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000
    };
    return (
      <div className={styles.sliderContainer}>
        <Slider ref={slider => (sliderRef = slider)} {...settings}>
            <div>
                <a target="_blank" href="https://start.gg/nightclub">
                  <img id={styles.friendsImage} src={NightclubThumbnail} alt="" />
                </a>
            </div>
            <div>
              <a href="">
                <img id={styles.jojoAkloImage} src={jojoAkloImage} alt="" />
              </a>
            </div>
            <div>
              <a href="">
                <img id={styles.stevenCrueltyImage} src={stevenCrueltyImage} alt="" />
              </a>
            </div>
        </Slider>
      </div>
    );
  }