import axios from "axios";
import { Component } from "react";
import "./Main.css";

class Main extends Component {
  state = { advice: "" };
  componentDidMount() {
    // console.log('mount')
    this.fetchAdvice();
  }
  fetchAdvice = () => {
    axios
      .get("	https://api.adviceslip.com/advice")
      .then((res) => {
        const { advice } = res.data.slip;
        this.setState({ advice: advice });
        console.log(advice);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    const { advice } = this.state;
    return (
      <>
        <div className="main">
          <div className="">
            <h1 className="advice">{advice}</h1>
            <button className="button" onClick={this.fetchAdvice}>
              <span>Click To Get Advice !</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
