import React, { Component } from "react";
import { Container } from "./Container";
import { Card } from "./Card";
import { TiTimes } from "react-icons/lib/ti";
import styled from "react-emotion";
import { withRouter } from "react-router";
import { cards } from "./cards";
import { grey } from "./palette";

const CloseButton = styled("div")({
  padding: 14,
  position: "absolute",
  top: 0,
  left: 0,
  cursor: "pointer",
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
        {showMenu && (
          <CloseButton onClick={this.hideMenu}>
            <TiTimes size={40} color={grey} />
          </CloseButton>
        )}
        {cards.map((card, index) => (
          <Card
            key={card.title}
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
