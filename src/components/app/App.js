import React, { Component } from "react";
import Header from "../app-header";
import RandomPlanet from "../random-planet";

import "./App.css";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page";

export default class App extends Component {
  state = {
    showRandomPlanet: true,
    hasError: false
  };

  toggleRandomPlanet = () => {
    this.setState(state => {
      return {
        showRandomPlanet: !state.showRandomPlanet
      };
    });
  };

  componentDidCatch() {
    console.log("compcatch");
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

    return (
      <div className="stardb-app">
        <Header />
        {planet}

        <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={this.toggleRandomPlanet}
        >
          Toggle Random Planet
        </button>
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  }
}
