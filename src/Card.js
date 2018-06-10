import * as React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/lib/ti";

const Base = styled("div")(
  {
    width: "100%",
    height: "100%",
    position: "relative",
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
    fontWeight: "light",
    display: "grid",
    alignItems: "center",
    height: 60,
  },
  ({ active }) => ({
    marginLeft: active ? 60 : 20,
  }),
);

const StyledLink = styled(Link)({
  display: "block",
  width: "100%",
  height: "100%",
  textDecoration: "none",
  color: "currentcolor",
  ["&:visited"]: { color: "currentcolor" },
  ["&:hover"]: {
    backgroundColor: "rgba(255, 255, 255, 0.05)",
  },
});

const MenuButton = styled(TiThMenu)({
  padding: 14,
  position: "absolute",
  top: 0,
  left: 0,
  cursor: "pointer",
});

export const Card = ({
  color,
  background,
  showMenu,
  hideMenu,
  active,
  title,
  stackIndex,
}) => {
  const content = (
    <React.Fragment>
      {active && <MenuButton color={color} size={32} onClick={showMenu} />}
      <Title active={active}>{title}</Title>
    </React.Fragment>
  );
  return (
    <Base
      color={color}
      background={background}
      style={
        stackIndex && {
          transform: `translate(${stackIndex * 20}px, ${stackIndex * 60}px)`,
          position: "absolute",
        }
      }
    >
      {active ? (
        content
      ) : (
        <StyledLink onClick={hideMenu} to={`/${title.toLowerCase()}`}>
          {content}
        </StyledLink>
      )}
    </Base>
  );
};
