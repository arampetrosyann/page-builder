import React from "react";
import styles from "./Navigation.module.css";
import PropTypes from "prop-types";

export default function Navigation({
  links = [],
  bgcolor,
  height,
  className = "",
  style,
}) {
  return (
    <nav
      className={className}
      style={{ ...style, backgroundColor: bgcolor, height }}
    >
      <ul className={styles.navList}>
        {links.map(({ title, path }, ind) => {
          return (
            <li className={styles.navLink} key={ind}>
              <a href={path}>{title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  className: PropTypes.string,
  bgcolor: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  links: PropTypes.arrayOf(PropTypes.object).isRequired,
};
