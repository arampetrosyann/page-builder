import React from "react";
import styles from "./Divider.module.css";
import PropTypes from "prop-types";
import { FormControl, FormLabel, Slider } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";
import { useNode } from "@craftjs/core";

export default function Divider({ className = "", color, margin, style }) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <hr
      ref={(dom) => connect(drag(dom))}
      className={`${styles.divider} ${className}`}
      style={{ ...style, backgroundColor: color, margin }}
    />
  );
}

function DividerSettings() {
  const {
    actions: { setProp },
    color,
    margin,
  } = useNode((node) => ({
    color: node.data.props.color,
    margin: node.data.props.margin,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Margin</FormLabel>
        <Slider
          value={margin}
          step={1}
          min={1}
          max={100}
          onChange={(_, value) => {
            setProp((props) => (props.margin = value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <ColorPicker
          defaultValue={color || "#000000"}
          onChange={(color) => {
            setProp((props) => (props.color = color));
          }}
        />
      </FormControl>
    </div>
  );
}

Divider.craft = {
  props: {
    margin: 8,
    color: "#ff7e02",
  },
  related: {
    settings: DividerSettings,
  },
};

Divider.propTypes = {
  className: PropTypes.string,
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  style: PropTypes.object,
};
