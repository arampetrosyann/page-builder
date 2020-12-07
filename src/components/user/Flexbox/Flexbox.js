import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormLabel, TextField, Box } from "@material-ui/core";
import ColorPicker from "material-ui-color-picker";
import { useNode } from "@craftjs/core";

export default function Flexbox({
  component = "div",
  flex,
  flexDirection,
  justifyContent,
  alignItems,
  flexWrap,
  height,
  margin,
  padding,
  bgcolor,
  children,
}) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Box
      ref={(ref) => connect(drag(ref))}
      display="flex"
      component={component}
      flex={flex}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      flexWrap={flexWrap}
      height={height}
      margin={margin}
      padding={padding}
      bgcolor={bgcolor}
    >
      {children}
    </Box>
  );
}

function FlexboxSettings() {
  const {
    actions: { setProp },
    component,
    flex,
    flexDirection,
    flexWrap,
    justifyContent,
    alignItems,
    height,
    margin,
    padding,
    bgcolor,
  } = useNode((node) => ({
    component: node.data.props.component,
    flex: node.data.props.flex,
    flexDirection: node.data.props.flexDirection,
    flexWrap: node.data.props.flexWrap,
    justifyContent: node.data.props.justifyContent,
    alignItems: node.data.props.alignItems,
    height: node.data.props.height,
    margin: node.data.props.margin,
    padding: node.data.props.padding,
    bgcolor: node.data.props.bgcolor,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={component}
          label="component"
          onChange={(e) => {
            setProp((props) => (props.component = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={flex || ""}
          label="flex"
          onChange={(e) => {
            setProp((props) => (props.flex = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={flexDirection}
          label="direction"
          onChange={(e) => {
            setProp((props) => (props.flexDirection = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={flexWrap}
          label="wrap"
          onChange={(e) => {
            setProp((props) => (props.flexWrap = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={justifyContent}
          label="justify content"
          onChange={(e) => {
            setProp((props) => (props.justifyContent = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={alignItems}
          label="align items"
          onChange={(e) => {
            setProp((props) => (props.alignItems = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={height || ""}
          label="height"
          onChange={(e) => {
            setProp((props) => (props.height = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={margin || ""}
          label="margin"
          onChange={(e) => {
            setProp((props) => (props.margin = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={padding || ""}
          label="padding"
          onChange={(e) => {
            setProp((props) => (props.padding = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <ColorPicker
          defaultValue={bgcolor || ""}
          onChange={(color) => {
            setProp((props) => (props.bgcolor = color));
          }}
        />
      </FormControl>
    </div>
  );
}

Flexbox.craft = {
  props: {
    component: "div",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexWrap: "nowrap",
  },
  related: {
    settings: FlexboxSettings,
  },
};

Flexbox.propTypes = {
  component: PropTypes.string,
  flex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  alignItems: PropTypes.string,
  flexWrap: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  margin: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  padding: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bgcolor: PropTypes.string,
};
