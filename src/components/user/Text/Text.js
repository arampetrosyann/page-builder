import React, { useState, useEffect } from "react";
import ContentEditable from "react-contenteditable";
import styles from "./Text.module.css";
import PropTypes from "prop-types";
import { FormControl, FormLabel, Slider } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";
import { useNode } from "@craftjs/core";

export default function Text({
  className = "",
  value = "",
  style,
  fontSize,
  fontWeight,
  color,
}) {
  const {
    connectors: { connect, drag },
    selected,
    actions: { setProp },
  } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged,
  }));

  const [editable, setEditable] = useState(false);

  useEffect(() => {
    !selected && setEditable(false);
  }, [selected]);

  return (
    <div ref={(ref) => connect(drag(ref))} onClick={() => setEditable(true)}>
      <ContentEditable
        html={value}
        disabled={!editable}
        onChange={(e) =>
          setProp(
            (props) =>
              (props.value = e.target.value.replace(/<\/?[^>]+(>|$)/g, ""))
          )
        }
        tagName="p"
        style={{ ...style, fontSize, fontWeight, color }}
        className={`${styles.text} ${className}`}
      />
    </div>
  );
}

function TextSettings() {
  const {
    actions: { setProp },
    fontSize,
    fontWeight,
    color,
  } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    fontWeight: node.data.props.fontWeight,
    color: node.data.props.color,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={2}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp((props) => (props.fontSize = value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Font weight</FormLabel>
        <Slider
          value={fontWeight || 400}
          step={100}
          min={100}
          max={800}
          onChange={(_, value) => {
            setProp((props) => (props.fontWeight = value));
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

Text.craft = {
  props: {
    value: "Text...",
    fontSize: 17,
    color: "#000000",
  },
  related: {
    settings: TextSettings,
  },
};

Text.propTypes = {
  value: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
