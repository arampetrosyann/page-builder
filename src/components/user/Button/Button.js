import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";
import { FormControl, FormLabel, TextField } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";
import { useNode } from "@craftjs/core";

export default function Button({
  value,
  className = "",
  style,
  bgColor,
  onClick,
  onFocus,
  onBlur,
}) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <input
      ref={(ref) => connect(drag(ref))}
      type="button"
      value={value}
      className={`${styles.btn} ${className}`}
      style={{ ...style, backgroundColor: bgColor }}
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}

function ButtonSettings() {
  const {
    actions: { setProp },
    value,
    bgColor,
  } = useNode((node) => ({
    value: node.data.props.value,
    bgColor: node.data.props.bgColor,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={value}
          label="text"
          onChange={(e) => {
            setProp((props) => (props.value = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <ColorPicker
          defaultValue={bgColor}
          onChange={(color) => {
            setProp((props) => (props.bgColor = color));
          }}
        />
      </FormControl>
    </div>
  );
}

Button.craft = {
  props: {
    value: "Button",
    bgColor: "#ff7e02",
  },
  related: {
    settings: ButtonSettings,
  },
};

Button.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};
