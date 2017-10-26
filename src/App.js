import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "./RelayEnvironment";
import logo from "./logo.svg";
import ListPage from "./components/ListPage";

const AppQuery = graphql`
  query AppQuery {
    ants {
      name
      color
      length
      weight
    }
  }
`;

class App extends Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={AppQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            console.log(props.ants);
            return <ListPage ants={props.ants} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default App;
