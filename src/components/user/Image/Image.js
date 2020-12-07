import React from "react";
import styles from "./Image.module.css";
import PropTypes from "prop-types";
import { FormControl, TextField } from "@material-ui/core";
import { useNode } from "@craftjs/core";

export default function Image({
  src,
  title,
  alt,
  href,
  className = "",
  style,
  onClick,
  onFocus,
}) {
  const {
    connectors: { connect, drag },
  } = useNode();

  if (href) {
    return (
      <a
        ref={(ref) => connect(drag(ref))}
        href={href}
        className={`${styles.imgLink} ${className}`}
        style={style}
      >
        <img
          src={src}
          title={title}
          alt={alt}
          style={style}
          onClick={onClick}
          onFocus={onFocus}
        />
      </a>
    );
  } else {
    return (
      <img
        ref={(ref) => connect(drag(ref))}
        src={src}
        title={title}
        alt={alt}
        className={className}
        style={style}
        onClick={onClick}
        onFocus={onFocus}
      />
    );
  }
}

function ImageSettings() {
  const {
    actions: { setProp },
    src,
    title,
    alt,
    href,
  } = useNode((node) => ({
    src: node.data.props.src,
    title: node.data.props.title,
    alt: node.data.props.alt,
    href: node.data.props.href,
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
          value={title}
          label="title"
          onChange={(e) => {
            setProp((props) => (props.title = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={alt}
          label="alt"
          onChange={(e) => {
            setProp((props) => (props.alt = e.target.value));
          }}
        />
      </FormControl>

      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={href}
          label="link to"
          onChange={(e) => {
            setProp((props) => (props.href = e.target.value));
          }}
        />
      </FormControl>
    </div>
  );
}

Image.craft = {
  props: {
    src: "/",
    title: "",
    alt: "image",
    href: "",
  },
  related: {
    settings: ImageSettings,
  },
};

Image.propTypes = {
  src: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};
