import React from "react";
import styles from "./Footer.module.css";
import PropTypes from "prop-types";

export default function Footer({
  children,
  className = "",
  bgColor,
  height,
  style,
}) {
  return (
    <footer
      className={`${styles.footer} ${className}`}
      style={{ ...style, backgroundColor: bgColor, height }}
    >
      {children}
    </footer>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgColor: PropTypes.string,
};
