import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
// Either mount or renderer can be used NOT BOTH
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import App from '../App';

test('Jest is set up', () => {
	expect(2 + 2).toBe(4);
})

describe('App rendering', () => {

	test('renders without crashing', () => {
	  	const div = document.createElement('div');
	  	ReactDOM.render(<App />, div);
	});

	test('renders using enzyme syntax', () => {
 		const app = mount(<App />);
    	expect(app.exists()).toBe(true);
    });

	test('renders some child', () => {
 		const wrapper = mount(<App />);
 		const someChild = wrapper.find('.search-select-container');
 		// const someChild = wrapper.find('<SearchContainer />');
    	expect(someChild.exists()).toBe(true);
    });

});