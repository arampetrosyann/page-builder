import React from "react";
import { IconButton, styled } from "@material-ui/core";
import PropTypes from "prop-types";
import { useNode } from "@craftjs/core";

const Button = styled(IconButton)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: 7,
  padding: 15,
  background: "#ef9501",
  borderRadius: "50%",
  color: "#ffffff",
  cursor: "pointer",
});

export default function ButtonIcon({ onClick, href, target, label, children }) {
  const {
    connectors: { connect, drag },
  } = useNode();

  return (
    <Button
      ref={(dom) => connect(drag(dom))}
      component="a"
      aria-label={label}
      href={href}
      target={target}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}

ButtonIcon.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  target: PropTypes.string,
  onClick: PropTypes.func,
};
