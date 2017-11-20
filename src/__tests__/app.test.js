import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
// Either mount or renderer can be used NOT BOTH
import { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import App from '../App';
import SearchSelectContainer from '../SearchSelectContainer';

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

	test('renders a header element', () => {
 		const wrapper = mount(<App />);
 		const someChild = wrapper.find('header');
    	expect(someChild.exists()).toBe(true);
    });

});

/******************************************************************
* SearchSelectContainer Tests 
******************************************************************/

describe('SearchSelectContainer', () => {

	test('component renders', () => {
 		const wrapper = mount(<SearchSelectContainer />);
    	expect(wrapper.exists()).toBe(true);
    });

	test('renders an input element', () => {
 		const wrapper = mount(<SearchSelectContainer />);
 		const input = wrapper.find('input');
    	expect(input.exists()).toBe(true);
    });


});

// TODO: test input/onChange
   

// TODO: test result list generation