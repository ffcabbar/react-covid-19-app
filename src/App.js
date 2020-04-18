import React from "react";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import image from "../src/images/image.png";
import { Typography, Link } from "@material-ui/core";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
    // console.log(fetchedData,"fetchedData");
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={image} className={styles.image} alt="COVID-19" />
        <Typography style={{marginTop: "20px"}} >
          Data sources from{" "}
          <Link
            href="https://github.com/alankilalank/react-covid-19"
            style= {{color: "#f1bb07"}}
            target="_blank"
          >
            mathdroid's
          </Link>{" "}
          API
        </Typography>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Typography style={{marginTop: "30px"}}>
          Made With <span role="img" aria-label="love">🧡</span> by{" "}
          <Link
            href="https://www.linkedin.com/in/ffcabbar/"
            className={styles.api}
            target="_blank"
            style= {{color: "#f1bb07"}}
          >
            Furkan
          </Link>
        </Typography>
      </div>
    );
  }
}

export default App;
