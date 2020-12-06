import React from "react";
import PropTypes from "prop-types";

export default function Main({ bgColor, className = "", style, children }) {
  return (
    <main className={className} style={{ ...style, backgroundColor: bgColor }}>
      {children}
    </main>
  );
}

Main.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  bgColor: PropTypes.string,
};
