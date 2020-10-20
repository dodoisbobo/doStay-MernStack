import React from "react";
import Button from "elements/Button/index";
import Fade from "react-reveal/Fade";
export default function Categories({ data }) {
  return data.map((category, index1) => {
    return (
      <section className="container" key={`category-${index1}`}>
        <Fade bottom>
          <h4 className="mb-3 ">{category.name}</h4>
          <div className="container-grid">
            {category.items.length === 0 ? (
              <div className="row">
                <div className="col-auto align-items-center">
                  There is no property at this category
                </div>
              </div>
            ) : (
              category.items.map((item, index2) => {
                return (
                  <Fade bottom delay={200 * index2}>
                    <div
                      className="item column-4 row-1"
                      key={`category-${index1} item-${index2}`}>
                      <div
                        className="card"
                        style={{ height: 235, marginBottom: -7 }}
                      >
                        {item.isPopular && (
                          <div className="tag">
                            Popular{" "}
                            <span className="font-weight-light"> Choice</span>
                          </div>
                        )}
                        <figure
                          className="img-wrapper2"
                          style={{ height: 180 }}
                        >
                          <img
                            src={item.imageUrl}
                            alt={item.name}
                            className="img-cover"
                          ></img>
                        </figure>
                        <div className="meta-wrapper2">
                          <Button
                            href={`/properties/${item._id}`}
                            type="link"
                            className="stretched-link d-block text-secondary"
                          >
                            <h5 className="h4">{item.name}</h5>
                          </Button>
                          <span className="text-gray-800">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Fade>
                );
              })
            )}
          </div>
        </Fade>
      </section>
    );
  });
}
