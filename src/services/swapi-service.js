import React, { Component } from "react";

export default class SwapiService extends Component {
  _apiBase = "https://swapi.co/api";

  async getResource(url) {
    console.log(`${this._apiBase}${url}`);
    const res = await fetch(`${this._apiBase}${url}`);
    console.log(res);
    if (!res.ok) {
      console.log("err");
      throw new Error("Could not !!fetch " + url, "received " + res.status);
    }
    console.log(res);
    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResource(`/people/`);
    return res.result;
  }

  getPerson(id) {
    return this.getResource(`/people/${id}/`);
  }

  async getAllPlanets() {
    return this.getResource(`/planets/`);
  }

  getPlanet(id) {
    return this.getResource(`/planets/${id}/`);
  }

  async getAllStarships() {
    return this.getResource(`/starships/`);
  }

  getStarship(id) {
    return this.getResource(`/starships/${id}/`);
  }

  // getAllPeople() {
  //   return this.getResource(`https://swapi.co/api/people/`);
  // }
}
