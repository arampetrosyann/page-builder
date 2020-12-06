import React from "react";
import styles from "./Header.module.css";
import PropTypes from "prop-types";

export default function Header({
  bgColor,
  height,
  className = "",
  style,
  children,
}) {
  return (
    <header
      className={`${styles.header} ${className}`}
      style={{ ...style, backgroundColor: bgColor, height }}
    >
      {children}
    </header>
  );
}

Header.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgColor: PropTypes.string,
};
