import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button/index";
import ImageHero from "assets/images/Hero_img.jpg";
import ImageHeroFrame from "assets/images/Hero_img_frame.jpg";
import Travel from "assets/images/ic_travel.svg";
import Camera from "assets/images/ic_camera.svg";
import Location from "assets/images/ic_location.svg";
import numberFormat from "utils/formatNumber";
export default function Hero(props) {
  /*function showMostPicked(){
        window.scrollTo({
            top:props.refMostPicked.current.offsetTop - 30,
            behavior:"smooth"
        })
    }*/
  const showMostPicked = () => {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  };
  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-item-center">
          <div className="col-auto  pt-5 ml-2" style={{ width: 530 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Forget your stress,
              <br />
              by taking holidays
            </h1>
            <p className="mb-5 font-weight-light text-gray-600 w-75">
              We provide vacation that you and your <br />
              family need. Time to relieve your thoughts <br />
              and go on to refreshing places.
            </p>
            <Button
              className="btn px-5 pt-2"
              type="link"
              hasShadow
              isPrimary
              onClick={showMostPicked}
              href=""
            >
              Show me
            </Button>
            <div className="row mt-5 pt-3">
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={Travel}
                  alt={`${props.data.travelers} Travelers`}
                ></img>
                <h6 className="mt-3">
                  {numberFormat(props.data.travelers)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Travelers
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={Location}
                  alt={`${props.data.treasures} Location`}
                ></img>
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Locations
                  </span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={Camera}
                  alt={`${props.data.cities} Travelers`}
                ></img>
                <h6 className="mt-3">
                  {numberFormat(props.data.cities)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Experiences
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="image-hero">
              <img
                src={ImageHero}
                alt="Villas"
                className="img-fluid position-absolute"
                style={{ margin: "30px 0 0 -30px", zIndex: 1 }}
              ></img>
              <img
                src={ImageHeroFrame}
                alt="frame"
                className="img-fluid position-absolute"
                style={{ margin: "50px 0 0 -10px" }}
              ></img>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
