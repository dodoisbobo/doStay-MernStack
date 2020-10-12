import React from "react";
import Star from "elements/Star/index";
import ReviewAccent from "assets/images/Rectangle 4.jpg";
import Button from "elements/Button/index";
import Fade from "react-reveal/Fade";

export default function Review({ data }) {
  return (
    <Fade right>
      <section className="container">
        <div className="row align-items-center">
          <div className="col-auto" style={{ marginRight: 10 }}>
            <div className="review-hero" style={{ margin: `30px 0 0 30px` }}>
              <img
                src={data.imageUrl}
                alt="review"
                className="position-absolute"
                style={{ zIndex: 2 }}
              ></img>
              <img
                src={ReviewAccent}
                alt="review frame"
                className="position-absolute"
                style={{ margin: `-30px 0 0 -30px`, zIndex: 1 }}
              ></img>
            </div>
          </div>
          <div className="col-6">
            <h2 className="font-weight-bold" style={{ marginBottom: 35 }}>
              {data.name}
            </h2>
            <Star value={data.rate} width={30} height={30} spacing={4}></Star>
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5 mt-3"
                stlye={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/review/${data._id}`}
              >
                Read Review
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
