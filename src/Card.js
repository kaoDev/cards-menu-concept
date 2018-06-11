import * as React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/lib/ti";

const Base = styled("div")(
  {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 8,
  },
  ({ color, background }) => ({
    backgroundColor: background,
    color,
  }),
);

const Title = styled("h1")(
  {
    fontSize: 20,
    padding: 0,
    margin: 0,
    textTransform: "uppercase",
    fontWeight: "normal",
    lineHeight: "60px",
  },
  ({ hasMargin }) => ({
    marginLeft: hasMargin ? 60 : 20,
  }),
);

const StyledLink = styled(Link)(
  {
    display: "block",
    width: "100%",
    height: "100%",
    textDecoration: "none",
    color: "currentcolor",
    "&:visited": { color: "currentcolor" },
  },
  ({ disabled }) => ({
    cursor: disabled ? "default" : "pointer",
    "&:hover": {
      backgroundColor: disabled ? undefined : "rgba(255, 255, 255, 0.05)",
    },
  }),
);

const MenuButton = styled("div")({
  padding: 14,
  position: "absolute",
  top: 0,
  left: 0,
  cursor: "pointer",
});

const preventLink = event => {
  event.nativeEvent.stopImmediatePropagation();
  event.nativeEvent.preventDefault();
  event.preventDefault();
};

export const Card = ({
  color,
  background,
  showMenu,
  hideMenu,
  active,
  title,
  stacked,
  stackIndex,
}) => {
  const baseStyle = active
    ? {}
    : stacked
      ? {
          transform: `translate(${stackIndex * 20}px, ${stackIndex * 60}px)`,
        }
      : {
          transform: `translate(${480}px, ${stackIndex * 60}px)`,
        };

  return (
    <Base color={color} background={background} style={baseStyle}>
      {active && (
        <MenuButton>
          <TiThMenu color={color} size={32} onClick={showMenu} />
        </MenuButton>
      )}
      <StyledLink
        replace
        disabled={active}
        onClick={active ? preventLink : hideMenu}
        to={`/${title.toLowerCase()}`}
      >
        <Title hasMargin={active}>{title}</Title>
      </StyledLink>
    </Base>
  );
};
