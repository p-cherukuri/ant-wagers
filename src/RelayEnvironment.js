// Import required modules
const { Environment, Network, RecordSource, Store } = require("relay-runtime");
// Define a function to fetch results of some operation (query)
function fetchQuery(operation, variables) {
  // Return results as a promise
  return fetch("https://antserver-blocjgjbpw.now.sh/graphql", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
}

// Initialize Store for caching retrieved data
const store = new Store(new RecordSource());
// Initialize Network
const network = Network.create(fetchQuery);
// Initialize Environment
const environment = new Environment({
  network,
  store
});

export default environment;
