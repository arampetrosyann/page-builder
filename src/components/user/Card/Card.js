import React from "react";
import styles from "./Card.module.css";
import { Image, Text } from "../";
import PropTypes from "prop-types";
import { FormControl, TextField } from "@material-ui/core";
import { useNode, Element } from "@craftjs/core";

export const CardBottom = ({ children }) => {
  const {
    connectors: { connect },
  } = useNode();
  return <div ref={connect}>{children}</div>;
};

export default function Card({
  imageSrc = "",
  alt,
  title,
  text = "",
  height,
  className,
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
      className={`${styles.card} ${className}`}
      style={{ ...style, height }}
      onClick={onClick}
    >
      <div className={styles.container}>
        <Image className={styles.img} src={imageSrc} alt={alt} title={title} />
      </div>
      <Text className={styles.text} value={text} />
      <Element is={CardBottom} id="cardbottom" canvas>
        {children}
      </Element>
    </div>
  );
}

function CardSettings() {
  const {
    actions: { setProp },
    imageSrc,
    alt,
    title,
    text,
    height,
  } = useNode((node) => ({
    imageSrc: node.data.props.imageSrc,
    alt: node.data.props.alt,
    title: node.data.props.title,
    text: node.data.props.text,
    height: node.data.props.height,
  }));

  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <TextField
          fullWidth={true}
          value={imageSrc}
          label="source"
          onChange={(e) => {
            setProp((props) => (props.imageSrc = e.target.value));
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
          value={text}
          label="title"
          onChange={(e) => {
            setProp((props) => (props.text = e.target.value));
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

Card.craft = {
  props: {
    imageSrc: "/",
    alt: "img",
    title: "Card",
    height: "380px",
  },
  related: {
    settings: CardSettings,
  },
};

Card.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  text: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func,
};
