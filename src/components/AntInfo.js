import React from "react";
import { GenerateAntWinLikelihoodCalculator } from "../helpers/WinLikelihoodCalc";
import ProgressButton from "react-progress-button";
import "../../node_modules/react-progress-button/react-progress-button.css";

class AntInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { buttonState: "", buttonText: "Check Win Odds", value: 0 };
  }

  showWinOdds = winOdds => {
    this.setState({ buttonState: "loading" });
    setTimeout(() => {
      this.setState({
        buttonState: "disabled",
        buttonText: winOdds,
        value: winOdds
      });
    }, 1000);
  };

  winOdds = () => {
    let winOddsCalc = GenerateAntWinLikelihoodCalculator();

    winOddsCalc(this.showWinOdds);
  };

  sortByWinOdds(event) {
    /* mixer.sort("value:asc").then(state => {
      console.log(state.activeSort.attribute === "value"); // should be true
      console.log(state.activeSort.order === "asc"); // should be true
    }); */
  }

  render() {
    return (
      <div
        className="pa3 bg-black-05 ma3"
        style={{
          display: "flex",
          flexDirection: "column",
          height: 300,
          width: 300
        }}
      >
        <div
          className="pt3"
          onChange={this.sortByWinOdds.bind(this)}
          style={{
            boxShadow: "5px 5px 5px 5px #888888",
            textAlign: "center",
            paddingBottom: "5%",
            position: "relative"
          }}
        >
          <h4 className="antName">{this.props.ants.name}</h4>
          <span
            style={{
              paddingBottom: "30%"
            }}
          >
            <span>Color: {this.props.ants.color} | </span>
            <span>Length: {this.props.ants.length} | </span>
            <span>Weight: {this.props.ants.weight}</span>
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

export default AntInfo;
