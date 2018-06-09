import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount, render } from 'enzyme';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });


// describe what we are testing
describe('App Component', () => {
    // make our assertion and what we expect to happen
    it('should render without throwing an error', () => {
        expect(shallow(<App />).find('div.App').exists()).toBe(true)
    })
})