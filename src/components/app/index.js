import App from "./App";
import SwapiService from "../../services/swapi-service";

// getResource("https://swapi.co/api/people/1234567890")
//   .then(body => {
//     console.log(body);
//   })
//   .catch(err => {
//     console.error("Could not -----fetch", err);
//   });

const swapi = new SwapiService();
swapi.getPlanet(5).then(person => {
  console.log(person.name);
});

export default App;
