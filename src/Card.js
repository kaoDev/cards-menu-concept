import * as React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/lib/ti";
import posed, { PoseGroup } from "react-pose";
import { tweenEaseFaster, tweenEaseSlow, tweenEaseFast } from "./transitions";

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

const Title = styled("h1")({
  fontSize: 20,
  padding: 0,
  margin: 0,
  textTransform: "uppercase",
  fontWeight: "normal",
  lineHeight: "60px",
});

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

const MenuButtonAnimated = posed(MenuButton)({
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      default: tweenEaseFaster,
    },
  },
  enter: {
    opacity: 1,
    scale: 1,
    transition: {
      default: tweenEaseFaster,
    },
  },
});

const TitleAnimated = posed(Title)({
  stack: {
    x: "20px",
    transition: {
      default: tweenEaseSlow,
    },
  },
  content: {
    x: "60px",
    transition: {
      default: tweenEaseFast,
    },
  },
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
  hostRef,
}) => {
  return (
    <Base innerRef={hostRef} color={color} background={background}>
      <PoseGroup>
        {active && (
          <MenuButtonAnimated key="menuButton">
            <TiThMenu color={color} size={32} onClick={showMenu} />
          </MenuButtonAnimated>
        )}
      </PoseGroup>
      <StyledLink
        replace
        disabled={active}
        onClick={active ? preventLink : hideMenu}
        to={`/${title.toLowerCase()}`}
      >
        <TitleAnimated>{title}</TitleAnimated>
      </StyledLink>
    </Base>
  );
};
