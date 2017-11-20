# A Searchable Select App for Marvel Characters
This app was built in React.  The app allows a user to enter a marvel character name, and on initial input, pings the [marvel api](https://developer.marvel.com/docs#!/public/getCreatorCollection_get_0) and returns a list of characters matching the input.

###TODOs
* DONE Add spinner to indicate to user waiting for server response
* Add responsive styling
* Put app on react-searchable-select.autumnfjeld.com
* Add discussion section on all that I learned and roadblocks I hit (like testing!)

### Development Environment
* Mac OS X Sierra (version 10.12.6)
* Node v6.0.0
* This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).
* Styling done in sass, via npm module node-sass

### How to run this app locally
 * Install [node](https://nodejs.org) if necessary
 * Register for an api key with [Marvel](https://marvel.com/register) and note your public and private key
 * Clone or download this repo
 * In your terminal: `cd` to the root directory and run:  `npm install`
 * To run the app you will need to start the marvel proxy server and start React
   - Marvel proxy server: `cd api` and then `npm start <private key> <public key>`
   - Fire up React: 'cd' to the root directory and then `npm start` will launch the app on http://localhost:3033
 
### Testing
Tests are in src/__tests__ and can be run from root directory with `npm test`.
 
### Overview
This app provides and example of communication between React components. It demonstrates the React principle of ['lifting up state'](https://reactjs.org/docs/lifting-state-up.html), in which multiple components share data that is managed by a single parent. The parent maintains the React state and passes data and callbacks to the child components via the `props` object.
 
### Discussion
* TODO: add more detail
* First react app!!! Yippee!
* Testing docs all over the place, seemed more difficult than necessary to grasp basic testing syntax
* Loved the React structure, modularity, clean organziation

##### How to use
Enter a charcater name in the input field to ping the Marvel api and get a list of matching Marvel characters.
  
#### License
This project is licensed under the MIT License - see the LICENSE.md file for details

#### Acknowledgments
I learned so much building this app.  Many hours of research included devouring the following docs:
* https://reactjs.org/tutorial/tutorial.html
* https://reactjs.org/docs
* https://github.com/axios/axios
* http://facebook.github.io/jest/docs/en/tutorial-react.html
* https://github.com/airbnb/enzyme
* https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0
