// Component that displays a header bar and all information cards about ants

import React from "react";
import Ant from "./Ant/Ant";
import mixitup from "mixitup";

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.addWinOdds = this.addWinOdds.bind(this);
    this.state = { antWinOdds: 0 };
  }
  // Function that gets passed down to child component to bring the win odds value back up to the parent
  // Failed attempt at trying to add the win odds value to the "ants" array to be able to sort by win odds values upoon re-render
  addWinOdds(odds) {
    this.setState({ winOdds: odds });
    console.log(this.state);
  }

  render() {
    return (
      <div className="w-100 flex justify-center">
        <div
          style={{
            backgroundColor: "#3a5ef2",
            boxShadow: "5px 5px 5px #888888",
            margin: 0,
            padding: 0,
            overflow: "hidden"
          }}
        >
          <h1
            className="w-100 justify-center"
            style={{
              textAlign: "center",
              letterSpacing: "4px",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#fff"
            }}
          >
            Ant Wagers
          </h1>
        </div>

        <div
          className="w-100 justify-center"
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignContent: "flex-start",
            justifyContent: "space-between",
            padding: "2.5%"
          }}
        >
          {this.props.ants.map((item, index) => (
            // Mapping each of the passed down "ants" props to an Ant child component with a unique key
            // Added addWinOdds as the function that would take the win odds value and bring it back to parent component and change winOdds state
            <Ant
              key={index}
              ant={item}
              addWinOdds={this.addWinOdds}
              winOdds={this.antWinOdds}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default ListPage;
