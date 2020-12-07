import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import PropTypes from "prop-types";
import styles from "./Slideshow.module.css";
import { FormControl, TextField } from "@material-ui/core";
import { useNode } from "@craftjs/core";

export default function Slideshow({
  images = [],
  width,
  height,
  className = "",
  style,
}) {
  const {
    connectors: { connect, drag },
  } = useNode();

  const zoomInProperties = {
    duration: 3000,
    pauseOnHover: true,
    indicators: true,
    scale: 1.4,
  };

  return (
    <div
      ref={(ref) => connect(drag(ref))}
      className={`${styles.slide} ${className}`}
      style={{ ...style, width }}
    >
      <Zoom {...zoomInProperties}>
        {images.map((src, ind) => (
          <div key={ind} className={styles.each} style={{ height }}>
            <img className={styles.img} src={src} alt="Slideshow" />
          </div>
        ))}
      </Zoom>
    </div>
  );
}

function SlideshowSettings() {
  const {
    actions: { setProp },
    images,
    width,
    height,
  } = useNode((node) => ({
    src: node.data.props.src,
    width: node.data.props.width,
    height: node.data.props.height,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={images}
          label="images"
          helperText="Separate with commas!"
          onChange={(e) => {
            setProp((props) => (props.images = e.target.value.split(",")));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={width}
          label="width"
          onChange={(e) => {
            setProp((props) => (props.width = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
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

Slideshow.craft = {
  props: {
    images: ["/src"],
    width: "100%",
    height: "400px",
  },
  related: {
    settings: SlideshowSettings,
  },
};

Slideshow.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
