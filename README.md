# Ant Wagers
This is a small web app built with React + Relay + GraphQL that retrieves and displays a list of ants from the competitive ant racing scene. It displays each ant's information in a card format, and allows users to calculate the odds of them winning with the click of an animated progress button, using a given randomizer algorithm.

### Pre-requisites:

Latest version of Node.js installed locally: https://nodejs.org/

### How to Run:

1) Clone the repository with `git clone https://github.com/p-cherukuri/ant-wagers.git` or by downloading the ZIP file.
2) `cd ant-wagers` and then use `yarn` to install all dependencies
3) Use `yarn relay`, which is a custom script that runs the Relay compiler to generate JavaScript representations of all the graphql code using the downloaded `schema.graphql` file
4) Use `yarn start` to run the development server and view the app at `localhost:3000`
