import React from "react";
import { GenerateAntWinLikelihoodCalculator } from "../../helpers/WinLikelihoodCalc";
import ProgressButton from "react-progress-button";
import "./styles/react-progress-button.css";
class Ant extends React.Component {
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
          height: 500,
          width: 345
        }}
      >
        <div
          className="pt3"
          onChange={this.sortByWinOdds.bind(this)}
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
          <h4
            className="antName"
            style={{
              fontSize: "17px",
              letterSpacing: "0.3px",
              fontWeight: 550,
              color: "whitesmoke"
            }}
          >
            {this.props.ant.name}
          </h4>
          <span
            style={{
              paddingBottom: "30%",
              fontSize: "13px",
              letterSpacing: "2px",
              fontWeight: 600,
              color: "whitesmoke"
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
