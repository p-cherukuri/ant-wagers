# Ant Wagers
This is a small web app built with React + Relay + GraphQL that retrieves and displays a list of ants from the competitive ant racing scene. It displays each ant's information in a card format, and allows users to calculate the odds of them winning with the click of an animated progress button, using a given randomizer algorithm.

### Pre-requisites:

Latest version of Node.js installed locally: https://nodejs.org/

### How to Run:

1) Clone the repository with `git clone https://github.com/p-cherukuri/ant-wagers.git` or by downloading the ZIP file.
2) `cd ant-wagers` and then use `yarn` to install all dependencies
3) Use `yarn relay`, which is a custom script that runs the Relay compiler to generate JavaScript representations of all the graphql code using the downloaded `schema.graphql` file
4) Use `yarn start` to run the development server and view the app at `localhost:3000`

### Issues:

Three features I didn't implement that were all tied to each other:
1) Sorting ants upon win odds calculation
2) Showing results of all tests
3) Pressing a button to run all calculations simultaneously

I had trouble understanding how to use Relay to take the win odds value and pass it up to the parent component, where I could have used a custom sort or `mixitup` to sort the results as they came in. This may have been due to my implementation of the progress button within the Ant component (Ant.js) for each ant's test status as opposed to allowing the tests to be run from the parent component (ListPage.js). Similarly, I had trouble figuring out how to pass up the values of each ant's "test status" for showing the results of all tests. I tried a couple of scenarios where I passed a handler to the child component (Ant.js) as a prop, so that it could pass the win odds value back up to ListPage.js, but that ultimately didn't work.