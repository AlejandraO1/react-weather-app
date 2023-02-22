import "./App.css";

import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York City" />
        <footer>
          {" "}
          This project was coded by <strong>Alejandra Ortega</strong> and is{" "}
          <a
            href="https://github.com/AlejandraO1/react-weather-app"
            target="_blank"
          >
            open-sourced
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
