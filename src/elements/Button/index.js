import React from "react";
import { Link } from "react-router-dom";
import propTypes from "prop-types";

//button Component
export default function Button(props) {
  const className = [props.className];
  //following parameter and concatenate className with provided name
  if (props.isPrimary) className.push("btn-primary");
  if (props.isSmall) className.push("btn-sm");
  if (props.isLarge) className.push("btn-lg");
  if (props.isBlock) className.push("btn-block");
  if (props.hasShadow) className.push("btn-shadow");
  //create onclick function
  const onClick = () => {
    if (props.onClick) props.onClick();
  };
  //check if button is disabled or loading
  if (props.isDisabled || props.isLoading) {
    //if button is disabled, className of that button will be "disabled",
    //provided in bootstrap it will not be clickable
    if (props.isDisabled) className.push("disabled");
    //if button is loading
    return (
      <span className={className.join(" ")} style={props.style}>
        {props.isLoading ? (
          //react fragment
          <>
            {/* className from bootstrap for loading api */}
            <span className="spinner-border spinner-border-sm mx-5"></span>
            <span className="sr-only">Loading...</span>
            {/* close react fragment */}
          </>
        ) : (
          //finish loading
          props.children
        )}
      </span>
    );
  }
  //check if button condition is link
  if (props.type === "link") {
    //button href to external link (means link that are not in this project)
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(" ")}
          style={props.style}
          target={props.target === "_blank" ? "_blank" : undefined}
          rel={props.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {props.children}
        </a>
      );
      //button href is pointing to file in this project (internal)
    } else {
      return (
        //instead of a href, use Link to = ...
        <Link
          to={props.href}
          className={className.join(" ")}
          style={props.style}
          onClick={onClick}
        >
          {props.children}
        </Link>
      );
    }
  }
  //finally this component will only be called upon the following ...
  return (
    <Button
      className={className.join(" ")}
      style={props.style}
      onClick={onClick}
    >
      {props.children}
    </Button>
  );
}

//condition to be met for button
Button.propTypes = {
  type: propTypes.oneOf(["button", "link"]),
  onClick: propTypes.func,
  target: propTypes.string,
  className: propTypes.string,
  href: propTypes.string,
  isExternal: propTypes.bool,
  isPrimary: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
};
