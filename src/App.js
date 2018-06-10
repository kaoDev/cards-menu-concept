import React, { Component } from "react";
import { Container } from "./Container";
import { purple, orange, red, yellow, lightGrey, grey } from "./palette";
import { Card } from "./Card";
import { TiTimes } from "react-icons/lib/ti";
import styled from "react-emotion";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

const cards = [
  {
    title: "Contact",
    background: purple,
    color: orange,
  },
  {
    title: "About",
    background: red,
    color: yellow,
  },
  {
    title: "Team",
    background: orange,
    color: purple,
  },
  {
    title: "Projects",
    background: yellow,
    color: red,
  },
];

const CloseButton = styled(TiTimes)({
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

    return (
      <Container>
        {showMenu &&
          cards.map((card, index) => (
            <React.Fragment key={card.title} onClick={this.hideMenu}>
              <CloseButton onClick={this.hideMenu} size={40} color={grey} />
              <Card
                stackIndex={index + 1}
                hideMenu={this.hideMenu}
                background={card.background}
                color={card.color}
                title={card.title}
              />
            </React.Fragment>
          ))}
        {!showMenu && (
          <Switch>
            {cards.map(card => (
              <Route
                path={`/${card.title.toLowerCase()}`}
                key={card.title}
                component={() => (
                  <Card
                    active
                    showMenu={this.showMenu}
                    background={card.background}
                    color={card.color}
                    title={card.title}
                  />
                )}
              />
            ))}
          </Switch>
        )}
      </Container>
    );
  }
}

export default App;
