'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../App';
import SearchSelectContainer from '../SearchSelectContainer';

/**
 * Purpose of snapshot testing: http://facebook.github.io/jest/docs/en/snapshot-testing.html
 * A typical snapshot test case for a mobile app renders a UI component, takes a screenshot, then compares it to a 
 * reference image stored alongside the test. The test will fail if the two images do not match: either the change is 
 * unexpected, or the screenshot needs to be updated to the new version of the UI component.
 *
 * Snapshot tests preserve a starting point, but don’t 
 * give any indication of developer intent to future developers. Like any other test, if the initial snapshot passes 
 * with bugs, or doesn’t capture the full range of cases, the test won’t adequately cover those behaviors. 
 *
 */

/**
 * Creates a mock node that returns a focus function that does nothing. Required to avoid errors on input.focus
 * 
 * react-test-renderer doesn’t actually use the browser (or jsdom), it does not return real elements/tags
 * If your components crash expecting some methods (like focus()), a workaround was implemented  * in #7649 and will
 * be part of 15.4.0. It will work like this: https://github.com/facebook/react/issues/7740
 * Anything can be returned from this function.
 * @return {Function} 
 */
function createNodeMock() {
  return {
    focus() {
      // Do nothing
    }
  }
}

/******************************************************************
* App Snapshot Tests 
******************************************************************/

test('App renders correctly', () => {
  	const tree = renderer.create(
    	<App />, {createNodeMock}
  	).toJSON();
  	expect(tree).toMatchSnapshot();
});

/******************************************************************
* SearchSelectContainer Snapshot Tests 
******************************************************************/

// I guess this is redundent since App holds same snapshot? Still learning.....
test('SearchSelectContainer renders correctly', () => {
  	const tree = renderer.create(
    	<SearchSelectContainer />, {createNodeMock}
  	).toJSON();
  	expect(tree).toMatchSnapshot();
});