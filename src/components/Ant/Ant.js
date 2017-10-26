// Component for an ant's information and win likelihood calculator

import React from "react";
import { GenerateAntWinLikelihoodCalculator } from "../../helpers/WinLikelihoodCalc";
import ProgressButton from "react-progress-button";
import "./styles/react-progress-button.css"; // Custom styling
class Ant extends React.Component {
  constructor(props) {
    super(props);
    // Set initial state of progress animation and the value of the ant's win odds
    this.state = {
      buttonState: "",
      buttonText: "Check Win Odds",
      winOddsValue: 0
    };
  }
  // Function that takes a winOdds value, and shows a loading spinner while the value is calculated, and then reflects it in the state
  showWinOdds = winOdds => {
    this.setState({ buttonState: "loading" });
    setTimeout(() => {
      this.setState({
        buttonState: "disabled",
        buttonText: winOdds,
        value: winOdds
      });
      //this.props.addWinOdds(winOdds);
    }, 1000);
  };
  // Function that first generates a calculator using the given algorithm, and then gives the calculated win odds value to showWinOdds
  winOdds = () => {
    let winOddsCalc = GenerateAntWinLikelihoodCalculator();

    winOddsCalc(this.showWinOdds);
    console.log(this.state.value);
  };
  // Ant information card styling here
  render() {
    return (
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          height: 500,
          width: 345
        }}
      >
        <div
          className="card-header"
          style={{
            backgroundColor: "#F5F5F5",
            boxShadow: "5px 5px 5px 5px #888888"
          }}
        >
          <h4
            className="antName"
            style={{
              textAlign: "center",
              color: "#3a5ef2",
              fontSize: "18px",
              letterSpacing: "0.5px",
              fontWeight: 600
            }}
          >
            {this.props.ant.name}
          </h4>
        </div>
        <div
          className="card-body"
          style={{
            boxShadow: "5px 5px 5px 5px #888888",
            textAlign: "center",
            paddingBottom: "5%",
            padding: "5%",
            position: "relative",
            borderColor: "blue",
            backgroundColor: "#3a5ef2"
          }}
        >
          <span
            className="ant-stats"
            style={{
              paddingBottom: "30%",
              fontSize: "14px",
              letterSpacing: "2px",
              fontWeight: 600,
              color: "#F5F5F5"
            }}
          >
            <span>Color: {this.props.ant.color} | </span>
            <span>Length: {this.props.ant.length} mm | </span>
            <span>Weight: {this.props.ant.weight} mg</span>
          </span>
          <br />
          <br />
          <ProgressButton
            onClick={this.winOdds}
            state={this.state.buttonState}
            value={this.state.value}
          >
            {this.state.buttonText}
          </ProgressButton>
        </div>
      </div>
    );
  }
}

export default Ant;
