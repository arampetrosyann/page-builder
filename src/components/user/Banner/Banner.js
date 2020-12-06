import React from "react";
import styles from "./Banner.module.css";
import PropTypes from "prop-types";
import { FormControl, TextField } from "@material-ui/core";
import { useNode } from "@craftjs/core";

export default function Banner({
  src = "",
  height,
  className = "",
  style,
  children,
  onClick,
}) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`${styles.banner} ${className}`}
      style={{ ...style, backgroundImage: `url(${src})`, height }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function BannerSettings() {
  const {
    actions: { setProp },
    src,
    height,
  } = useNode((node) => ({
    src: node.data.props.src,
    height: node.data.props.height,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={src}
          label="source"
          onChange={(e) => {
            setProp((props) => (props.src = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          type="number"
          value={height}
          label="height"
          onChange={(e) => {
            setProp((props) => (props.height = e.target.value));
          }}
        />
      </FormControl>
    </div>
  );
}

Banner.craft = {
  props: {
    src: "/",
    height: 306,
  },
  related: {
    settings: BannerSettings,
  },
};

Banner.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};
