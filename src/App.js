import React, { Component } from "react";
import { QueryRenderer, graphql } from "react-relay";
import environment from "./RelayEnvironment";
import ListPage from "./components/ListPage";
// Query to fetch list of competing ants from GraphQL endpoint
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
      // Using QueryRenderer to render list of ants as props and pass them down to the ListPage component
      <QueryRenderer
        environment={environment}
        query={AppQuery}
        render={({ error, props }) => {
          if (error) {
            return <div>{error.message}</div>;
          } else if (props) {
            return <ListPage ants={props.ants} />;
          }
          return <div>Loading</div>;
        }}
      />
    );
  }
}

export default App;
