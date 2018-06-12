import React, { Component } from "react";
import { Container } from "./Container";
import { Card } from "./Card";
import { TiTimes } from "react-icons/lib/ti";
import styled from "react-emotion";
import { withRouter } from "react-router";
import { cards } from "./cards";
import { grey } from "./palette";

import posed, { PoseGroup } from "react-pose";
import { tweenEaseFast, tweenEaseFaster, tweenEaseSlow } from "./transitions";

const CloseButtonBase = styled("div")({
  padding: 14,
  position: "absolute",
  top: 0,
  left: 0,
  cursor: "pointer",
  transformOrigin: "0% 100%",
});

const buttonEnter = {
  rotate: "0deg",
  y: "0%",
  transition: {
    default: tweenEaseFast,
  },
};

const buttonExit = {
  rotate: "90deg",
  y: "100%",
  transition: {
    default: tweenEaseFast,
  },
};

const CloseButton = posed(CloseButtonBase)({
  enter: buttonEnter,
  exit: buttonExit,
});

const cardStacked = {
  x: ({ stackIndex }) => `${stackIndex * 20}px`,
  y: ({ stackIndex }) => `${stackIndex * 60}px`,
  transition: {
    default: tweenEaseSlow,
  },
};
const cardContent = {
  x: ({ active, fromTop }) => (active || fromTop ? "0px" : "480px"),
  y: ({ stackIndex, active, fromTop }) =>
    active || fromTop ? "0px" : `${stackIndex * 60}px`,
  transition: {
    default: tweenEaseFast,
  },
};

const AnimatedCard = posed(Card)({
  stack: cardStacked,
  content: cardContent,
});

class App extends Component {
  state = {
    showMenu: false,
  };

  hideMenu = () => this.setState({ showMenu: false });
  showMenu = () => this.setState({ showMenu: true });

  render() {
    const { showMenu } = this.state;
    const { location } = this.props;
    const activeRouteIndex = cards.findIndex(card =>
      location.pathname.includes(card.title.toLowerCase()),
    );

    return (
      <Container>
        <PoseGroup animateOnMount>
          {showMenu && (
            <CloseButton key={"closeButton"} onClick={this.hideMenu}>
              <TiTimes size={40} color={grey} />
            </CloseButton>
          )}
        </PoseGroup>
        {cards.map((card, index) => (
          <AnimatedCard
            pose={showMenu ? "stack" : "content"}
            key={card.title}
            fromTop={index <= activeRouteIndex}
            active={!showMenu && index === activeRouteIndex}
            stacked={showMenu}
            stackIndex={index + 1}
            hideMenu={this.hideMenu}
            showMenu={this.showMenu}
            background={card.background}
            color={card.color}
            title={card.title}
          />
        ))}
      </Container>
    );
  }
}

export default withRouter(App);
