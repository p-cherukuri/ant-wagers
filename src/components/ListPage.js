import React from "react";
import { createFragmentContainer, graphql } from "react-relay";
import Ant from "./Ant/Ant";
import mixitup from "mixitup";

const mockAntData = [
  {
    node: {
      id: "1",
      name: "Marie ‘Ant’oinette",
      color: "BLACK",
      length: 12,
      weight: 2
    }
  },
  {
    node: {
      id: "2",
      name: "Flamin’ Pincers",
      color: "RED",
      length: 11,
      weight: 2
    }
  },
  {
    node: {
      id: "3",
      name: "Big Susan",
      color: "BLACK",
      length: 20,
      weight: 5
    }
  },
  {
    node: {
      id: "4",
      name: "The Unbeareable Lightness of Being",
      color: "SILVER",
      length: 5,
      weight: 1
    }
  },
  {
    node: {
      id: "5",
      name: "‘The Duke’",
      color: "RED",
      length: 17,
      weight: 3
    }
  }
];

//const mixer = mixitup("bg-black-05");

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    //this.state = { buttonState: "", buttonText: "Check Win Odds", value: 0 };
    console.log(this.props);
  }

  render() {
    return (
      <div className="w-100 flex justify-center">
        <h1
          className="w-100 justify-center"
          style={{
            textAlign: "center",
            letterSpacing: "2px",
            fontWeight: 600,
            color: "#3a5ef2"
          }}
        >
          Ant Wagering
        </h1>

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
          {this.props.ants.map((item, index) => <Ant key={index} ant={item} />)}
        </div>
      </div>
    );
  }
}

export default ListPage;
